import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,  // Esta opción solo es válida si usas Angular 14+ con Standalone Components.
  imports: [CommonModule, RouterModule],  // Asegúrate de importar RouterModule para usar routerLink
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeLink: string = '/about'; // Ruta activa inicial

  navItems = [
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/projects' },
    { title: 'Contact', link: '/contact' }
  ];

  constructor(private router: Router) {}

  setActiveLink(link: string): void {
    this.activeLink = link;
    this.router.navigate([link]); // Navegar a la ruta correspondiente
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop; // Posición del elemento
      const startPosition = window.scrollY; // Posición actual
      const distance = targetPosition - startPosition;
      const duration = 800; // Duración en milisegundos
      let start: number;
  
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1); // Asegurarse de no pasar del 100%
        window.scrollTo(0, startPosition + distance * percent);
  
        if (progress < duration) {
          window.requestAnimationFrame(step); // Continuar animación
        }
      };
  
      window.requestAnimationFrame(step);
    }
  }
  
}
