import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  private revealSubscription?: Subscription;
  isVisible = this.loaderService.isRevealed;

  constructor(
    private loaderService: LoaderService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.revealSubscription = this.loaderService.reveal$.subscribe(() => {
      this.ngZone.run(() => {
        this.isVisible = true;
      });
    });
  }

  ngOnDestroy(): void {
    this.revealSubscription?.unsubscribe();
  }
}
