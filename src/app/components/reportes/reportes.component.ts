import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'] 
})
export class ReportesComponent implements OnInit {
  reportes: any[] = [];


ngOnInit() {
  this.loadReportes();
}

loadReportes() {
  const storedReportes = localStorage.getItem('reportes');
  if (storedReportes) {
    this.reportes = JSON.parse(storedReportes);
  }
}

}
