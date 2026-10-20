import { AfterViewInit, Component, HostListener, NgZone, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  activeSection = 'inicio_id';
  private observer?: IntersectionObserver;
  private sections: HTMLElement[] = [];
  private initializationTimer?: ReturnType<typeof setTimeout>;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.initializationTimer = setTimeout(() => this.initializeNavigation(), 0);
  }

  private initializeNavigation(): void {
    this.sections = ['inicio_id', 'projects_id', 'timeline-btn', 'tech_habilities_id', 'beyond_code_id', 'contact_id']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (this.sections.length === 0) {
      this.initializationTimer = setTimeout(() => this.initializeNavigation(), 50);
      return;
    }

    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(() => this.updateActiveSection(), {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.2, 0.6]
      });

      this.sections.forEach((section) => this.observer?.observe(section));
    }

    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    if (this.sections.length === 0) {
      return;
    }

    const sectionLine = window.innerHeight * 0.35;
    const passedSections = this.sections.filter(
      (section) => section.getBoundingClientRect().top <= sectionLine
    );
    const currentSection = passedSections[passedSections.length - 1] ?? this.sections[0];

    if (currentSection.id !== this.activeSection) {
      this.ngZone.run(() => {
        this.activeSection = currentSection.id;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.initializationTimer) {
      clearTimeout(this.initializationTimer);
    }
    this.observer?.disconnect();
  }
}
