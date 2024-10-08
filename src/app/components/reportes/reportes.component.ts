import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, HttpClientModule], 
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reportes: any[] = [];

  constructor(private http: HttpClient) {} 

  ngOnInit() {
    this.loadReportes(); 
  }

  loadReportes() {
    
    this.http.get<any[]>('http://localhost:8000/api/patient').subscribe({
      next: (response) => {
        this.reportes = response; 
        console.log('Reportes obtenidos de la API:', this.reportes);
      },
      error: (error) => {
        console.error('Error al obtener los reportes:', error);
        alert('Ocurrió un error al obtener los reportes');
      }
    });
  }
}
