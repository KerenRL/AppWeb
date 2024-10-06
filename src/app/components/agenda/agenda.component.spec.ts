import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
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
        const fechaA = new Date(a.fechaCita);
        const fechaB = new Date(b.fechaCita);
        return fechaA.getTime() - fechaB.getTime();
      });
    }
  }

  toggleCompletada(index: number) {
    if (this.citas[index].completada) {
      this.citas.splice(index, 1);
    } else {
      this.citas[index].completada = true;
    }

    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

}