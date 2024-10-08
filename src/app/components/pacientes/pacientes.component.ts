import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  pacienteForm: FormGroup;

  constructor(private http: HttpClient) {
    
    this.pacienteForm = new FormGroup({
      fechaCita: new FormControl('', Validators.required),
      servicio: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      enfermedadActual: new FormControl(''),
      revisionSistemas: new FormControl(''),
      examenFisico: new FormControl(''),
      ayudaDiagnostica: new FormControl(''),
      analisis: new FormControl(''),
      dxPrincipal: new FormControl(''),
      tipoDiagnostico: new FormControl(''),
      finalidadConsulta: new FormControl(''),
      causaExterna: new FormControl(''),
      tratamiento: new FormControl('', Validators.required),
      recomendacion: new FormControl(''),
    });
  }

  submit() {
    
    if (this.pacienteForm.invalid) {
      alert('Por favor, completa todos los campos requeridos.');
    } else {
      const newCita = this.pacienteForm.value;


      this.http.post('http://localhost:8000/api/patient', newCita).subscribe({
        next: (response) => {
          alert('Datos guardados correctamente en la base de datos');
          this.pacienteForm.reset(); 
        },
        error: (error) => {
          console.error('Error al guardar los datos:', error); 
          alert('Ocurrió un error al guardar los datos');
        }
      });
    }
  }
}
