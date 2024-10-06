import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  citas: any[] = [];

  ngOnInit() {
    this.loadCitas();
  }


loadCitas() {
  const storedCitas = localStorage.getItem('citas');
  if (storedCitas) {
    this.citas = JSON.parse(storedCitas);

    
    this.citas.sort((a, b) => {
      const dateA = new Date(a.fechaCita).getTime();
      const dateB = new Date(b.fechaCita).getTime();
      return dateA - dateB;  
    });
  }
}

 
toggleCompletada(index: number) {
 
  const completadaCita = { ...this.citas[index], completada: true }; 
  
  this.citas.splice(index, 1);

  
  localStorage.setItem('citas', JSON.stringify(this.citas));

  
  this.saveCitaToReportes(completadaCita);
}

saveCitaToReportes(cita: any) {
  const reportes = JSON.parse(localStorage.getItem('reportes') || '[]');
  reportes.push(cita);
  localStorage.setItem('reportes', JSON.stringify(reportes));
}

}
