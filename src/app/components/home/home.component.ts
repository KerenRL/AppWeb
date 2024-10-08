import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pacienteData: any[] = [];
  completadas: Set<number> = new Set(); // Inicializamos como un Set

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCitas(); 
  }

  loadCitas() {
    this.http.get<any[]>('http://localhost:8000/api/patient').subscribe({
      next: (response) => {
        this.pacienteData = response.filter(cita => cita.completed === 0);
        console.log('Citas obtenidas de la API:', this.pacienteData);
      },
      error: (error) => {
        console.error('Error al obtener las citas:', error);
        alert('Ocurrió un error al obtener las citas');
      }
    });
  }

  toggleCompletada(index: number) {
    const completadaCita = { ...this.pacienteData[index], completed: 1 };

    
    this.http.put(`http://localhost:8000/api/patient/${completadaCita.patient_id}/complete`, completadaCita).subscribe({
      next: () => {
        this.pacienteData.splice(index, 1); 
        this.completadas.add(index); 
        this.saveCitaToReportes(completadaCita); 
      },
      error: (error) => {
        console.error('Error al completar la cita:', error);
        alert('Ocurrió un error al completar la cita');
      }
    });
  }

  saveCitaToReportes(cita: any) {
    const reportes = JSON.parse(localStorage.getItem('reportes') || '[]');
    reportes.push(cita);
    localStorage.setItem('reportes', JSON.stringify(reportes));
 }
}
