// home.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pacienteData: any[] = [];
  completadas: Set<number> = new Set<number>();

  ngOnInit() {
    this.loadCitas();
  }

  loadCitas() {
    const storedCitas = localStorage.getItem('citas');
    if (storedCitas) {
      this.pacienteData = JSON.parse(storedCitas);
    }
  }

toggleCompletada(index: number) {

  const completadaCita = this.pacienteData.splice(index, 1)[0];

  localStorage.setItem('citas', JSON.stringify(this.pacienteData));

 
  this.saveCitaToReportes(completadaCita);
}

saveCitaToReportes(cita: any) {
  const reportes = JSON.parse(localStorage.getItem('reportes') || '[]');
  reportes.push(cita);
  localStorage.setItem('reportes', JSON.stringify(reportes));
}

}
