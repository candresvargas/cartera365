import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Debtor } from '../../../models/debtors';

@Component({
  selector: 'app-showdebtors',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './showdebtors.component.html',
  styleUrl: './showdebtors.component.css'
})
export class ShowdebtorsComponent {
  debtors: Debtor[] = [
    {
      id: 1,
      name: 'Carlos López',
      email: 'carlos.lopez@gmail.com',
      phone: '3112223344',
      address: 'Carrera 10 #45-67',
      documents: 10203040,
      status: 'active'
    },
    {
      id: 2,
      name: 'Andrea Gómez',
      email: 'andrea.gomez@gmail.com',
      phone: '3001122334',
      address: 'Calle 80 #20-15',
      documents: 20304050,
      status: 'inactive'
    },
    {
      id: 3,
      name: 'Luis Torres',
      email: 'luis.torres@gmail.com',
      phone: '3214567890',
      address: 'Av. Siempre Viva 742',
      documents: 40506070,
      status: 'active'
    },
    {
      id: 4,
      name: 'María Fernanda Ruiz',
      email: 'maria.ruiz@gmail.com',
      phone: '3109876543',
      address: 'Calle 15 #8-22',
      documents: 50607080,
      status: 'inactive'
    },
    {
      id: 5,
      name: 'Jorge Ramírez',
      email: 'jorge.ramirez@gmail.com',
      phone: '3121234567',
      address: 'Transversal 25 #100-50',
      documents: 60708090,
      status: 'active'
    },
    {
      id: 6,
      name: 'Paola Castaño',
      email: 'paola.castano@gmail.com',
      phone: '3014455667',
      address: 'Carrera 50 #30-10',
      documents: 70809010,
      status: 'inactive'
    }
  ];
}
