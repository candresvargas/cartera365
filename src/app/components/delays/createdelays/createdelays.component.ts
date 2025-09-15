import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DelaysService } from '../../../services/delay.service';
import { Delay } from '../../../models/delays';

@Component({
  selector: 'app-create-delay',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './createdelays.component.html',
  styleUrls: ['./createdelays.component.css']
})
export class CreatedelaysComponent {
  delay: Delay = {
    id: 0,
    idPrestamo: 0,
    fechaVencimiento: '',
    diasMora: 0,
    interesMora: 0,
    estado: 'pendiente'
  };

  constructor(private delaysService: DelaysService, private router: Router) {}

  saveDelay() {
    this.delaysService.addDelay(this.delay);
    this.router.navigate(['/delays']);
  }

  cancel() {
    this.router.navigate(['/delays']);
  }
}
