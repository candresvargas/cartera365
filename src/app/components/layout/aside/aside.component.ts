import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Cartera',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/cartera'
      },
      {
        label: 'Préstamos',
        icon: 'pi pi-fw pi-wallet',
        items: [
          { label: 'Nuevo Préstamo', icon: 'pi pi-plus-circle', routerLink: '/prestamos/nuevo' },
          { label: 'Resumen', icon: 'pi pi-list', routerLink: '/prestamos/resumen' }
        ]
      },
      {
        label: 'Pagos',
        icon: 'pi pi-fw pi-dollar',
        items: [
          { label: 'Registrar Pago', icon: 'pi pi-credit-card', routerLink: '/pagos/nuevo' },
          { label: 'Historial de Pagos', icon: 'pi pi-list', routerLink: '/pagos' }
        ]
      },
      {
        label: 'Moras',
        icon: 'pi pi-fw pi-exclamation-triangle',
        routerLink: '/moras'
      },
      {
        label: 'Fiadores',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'Listado de Fiadores', icon: 'pi pi-list', routerLink: '/fiadores' },
          { label: 'Agregar Fiador', icon: 'pi pi-user-plus', routerLink: '/fiadores/nuevo' }
        ]
      },
      {
        label: 'Garantías',
        icon: 'pi pi-fw pi-shield',
        routerLink: '/garantias'
      },
      {
        label: 'Movimientos de Caja',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: '/movimientos'
      }
    ];
  }
}
