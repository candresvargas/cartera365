import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DebtorsService } from '../../../services/debtor.service';
import { Debtor } from '../../../models/debtors';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-createdebtor',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, DropdownModule],
  templateUrl: './createdebtors.component.html',
  styleUrls: ['./createdebtors.component.css']
})
export class CreatedebtorsComponent {
  debtor: Debtor = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    documents: 0,
    status: 'active'
  };

  statuses = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' }
  ];

  constructor(private debtorsService: DebtorsService, private router: Router) {}

  saveDebtor() {
    this.debtorsService.addDebtor(this.debtor);
    this.router.navigate(['/deudores']);
  }
  cancel() {
  this.router.navigate(['/deudores']);
}

}
