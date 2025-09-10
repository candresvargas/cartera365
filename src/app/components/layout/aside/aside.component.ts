import { Component, OnInit } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Cartera',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/cartera']
      },
      {
        label: 'Deudores',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/deudores']
      },
      {
        label: 'Préstamos',
        icon: 'pi pi-fw pi-wallet',
        routerLink: ['/prestamos']
      },
      {
        label: 'Pagos',
        icon: 'pi pi-fw pi-dollar',
        routerLink: ['/pagos']
      },
      {
        label: 'Moras',
        icon: 'pi pi-fw pi-exclamation-triangle',
        routerLink: ['/moras']
      },
      {
        label: 'Garantías',
        icon: 'pi pi-fw pi-shield',
        routerLink: ['/garantias']
      },
      {
        label: 'Movimientos de Caja',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: ['/dinero']
      }
    ];
  }
}
