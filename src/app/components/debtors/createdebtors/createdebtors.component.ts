import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

type StatusType = 'ACTIVE' | 'INACTIVE';

@Component({
  selector: 'app-createdebtor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    InputMaskModule
  ],
  templateUrl: './createdebtors.component.html',
  styleUrls: ['./createdebtors.component.css']
})
export class CreatedebtorsComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  statusOptions: { label: string; value: StatusType }[] = [
    { label: 'Activo', value: 'ACTIVE' },
    { label: 'Inactivo', value: 'INACTIVE' }
  ];

  form: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
    direccion: ['', [Validators.required, Validators.minLength(5)]],
    documento: ['', [Validators.required, Validators.pattern(/^\d{6,15}$/)]],
    status: ['ACTIVE' as StatusType, [Validators.required]]
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.value;
    // TODO: Reemplazar con tu servicio real:
    // this.debtorsService.create(payload).subscribe(() => this.router.navigate(['/deudores']));
    console.log('Deudor a guardar:', payload);
    this.router.navigate(['/deudores']);
  }

  onCancel() {
    this.router.navigate(['/deudores']);
  }
}
