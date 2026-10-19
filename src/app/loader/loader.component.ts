import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  NgZone
} from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements AfterViewInit, OnDestroy {

  @ViewChild('loaderEl') loaderEl!: ElementRef<HTMLElement>;
  @ViewChild('barEl')    barEl!: ElementRef<HTMLElement>;
  @ViewChild('counterEl') counterEl!: ElementRef<HTMLElement>;

  private rafId = 0;
  private fallbackId = 0;
  private finished = false;

  constructor(
    private loaderService: LoaderService,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    const loader  = this.loaderEl?.nativeElement;
    const bar     = this.barEl?.nativeElement;
    const counter = this.counterEl?.nativeElement;

    if (!loader || !bar || !counter) {
      this.reveal();
      return;
    }

    // Reduced motion → skip immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      loader.hidden = true;
      this.reveal();
      return;
    }

    // Run animation loop outside Angular to avoid change-detection overhead
    this.ngZone.runOutsideAngular(() => {
      const start    = performance.now();
      const duration = 1_500; // ms

      const tick = (now: number): void => {
        if (this.finished) return;

        const progress = Math.min(1, (now - start) / duration);
        const eased    = 1 - Math.pow(1 - progress, 2); // ease-out quadratic

        bar.style.transform = `scaleX(${eased})`;
        counter.textContent = `${Math.round(eased * 100)}%`;

        if (progress < 1) {
          this.rafId = requestAnimationFrame(tick);
        } else {
          this.finishLoader(loader, counter);
        }
      };

      // Failsafe: never leave the visitor trapped
      this.fallbackId = window.setTimeout(() => {
        if (!this.finished) {
          loader.hidden = true;
          this.reveal();
        }
      }, 5_000);

      this.rafId = requestAnimationFrame(tick);
    });
  }

  /** Swap counter text, trigger CSS panel exit, then hide overlay. */
  private finishLoader(loader: HTMLElement, counter: HTMLElement): void {
    if (this.finished) return;

    counter.textContent = 'Welcome.';
    loader.classList.add('is-done');
    this.reveal();

    // Wait for panels to fully slide out before removing from flow
    window.setTimeout(() => { loader.hidden = true; }, 1_350);
  }

  /** Emit the reveal signal exactly once. */
  private reveal(): void {
    if (this.finished) return;
    this.finished = true;

    if (this.rafId)     cancelAnimationFrame(this.rafId);
    if (this.fallbackId) window.clearTimeout(this.fallbackId);

    document.documentElement.classList.add('is-loaded');
    this.loaderService.emitReveal();
  }

  ngOnDestroy(): void {
    if (this.rafId)     cancelAnimationFrame(this.rafId);
    if (this.fallbackId) window.clearTimeout(this.fallbackId);
  }
}
