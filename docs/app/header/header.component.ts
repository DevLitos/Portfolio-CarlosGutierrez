import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  closeOffcanvas() {
    const offcanvasElement = document.getElementById('offcanvasDarkNavbar');
    if (offcanvasElement) {
      const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
      offcanvas.hide();
    }
  }
}
