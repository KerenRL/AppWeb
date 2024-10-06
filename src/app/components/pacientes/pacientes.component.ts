import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  pacienteForm: FormGroup;

  constructor() {
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
      const newCita = {
        fechaCita: this.pacienteForm.value.fechaCita,
        servicio: this.pacienteForm.value.servicio,
        motivo: this.pacienteForm.value.motivo,
        enfermedadActual: this.pacienteForm.value.enfermedadActual,
        revisionSistemas: this.pacienteForm.value.revisionSistemas,
        examenFisico: this.pacienteForm.value.examenFisico,
        ayudaDiagnostica: this.pacienteForm.value.ayudaDiagnostica,
        analisis: this.pacienteForm.value.analisis,
        dxPrincipal: this.pacienteForm.value.dxPrincipal,
        tipoDiagnostico: this.pacienteForm.value.tipoDiagnostico,
        finalidadConsulta: this.pacienteForm.value.finalidadConsulta,
        causaExterna: this.pacienteForm.value.causaExterna,
        tratamiento: this.pacienteForm.value.tratamiento,
        recomendacion: this.pacienteForm.value.recomendacion,
        completada: false, 
      };
  
      const citas = JSON.parse(localStorage.getItem('citas') || '[]');
      citas.push(newCita);
      localStorage.setItem('citas', JSON.stringify(citas));
      alert('Datos guardados correctamente');
  
      this.pacienteForm.reset();
    }
  }
}
