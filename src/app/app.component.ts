import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "./projects/components/projects/projects.component";
import { AboutComponent } from "./about/components/about/about.component";
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from "./experience/components/experience/experience.component";
import { SidebarComponent } from "./sidebar/components/sidebar/sidebar.component";
import { StudiesComponent } from "./studies/components/studies/studies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SidebarComponent, RouterModule, AboutComponent, ExperienceComponent, ProjectsComponent, StudiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-portfolio';

  // Usamos HostListener para escuchar el evento mousemove
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    // Obtener la posición del ratón
    const x = event.clientX;
    const y = event.clientY;

    // Buscar el elemento del gradiente
    const gradiente = document.getElementById('gradiente');

    // Asegurarnos de que el elemento existe antes de modificarlo
    if (gradiente) {
      // Aplicamos el gradiente dinámico al fondo
      gradiente.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    }
  }
}
