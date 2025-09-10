import { Routes } from '@angular/router';

// crud briefcase
import { CreatebriefcaseComponent } from './components/briefcase/createbriefcase/createbriefcase.component';
import { ShowbriefcaseComponent } from './components/briefcase/showbriefcase/showbriefcase.component';
import { UpdatebriefcaseComponent } from './components/briefcase/updatebriefcase/updatebriefcase.component';

// crud debtors
import { CreatedebtorsComponent } from './components/debtors/createdebtors/createdebtors.component';
import { ShowdebtorsComponent } from './components/debtors/showdebtors/showdebtors.component';
import { UpdatedebtorsComponent } from './components/debtors/updatedebtors/updatedebtors.component';

// crud delays
import { CreatedelaysComponent } from './components/delays/createdelays/createdelays.component';
import { ShowdelaysComponent } from './components/delays/showdelays/showdelays.component';
import { UpdatedelaysComponent } from './components/delays/updatedelays/updatedelays.component';

// crud guarantees
import { CreateguaranteesComponent } from './components/guarantees/createguarantees/createguarantees.component';
import { ShowguaranteesComponent } from './components/guarantees/showguarantees/showguarantees.component';
import { UpdateguaranteesComponent } from './components/guarantees/updateguarantees/updateguarantees.component';

// crud loans
import { CreateloansComponent } from './components/loans/createloans/createloans.component';
import { ShowloansComponent } from './components/loans/showloans/showloans.component';
import { UpdateloansComponent } from './components/loans/updateloans/updateloans.component';

// crud money 
import { CreatemoneyComponent } from './components/money/createmoney/createmoney.component';
import { ShowmoneyComponent } from './components/money/showmoney/showmoney.component';
import { UpdatemoneyComponent } from './components/money/updatemoney/updatemoney.component';

// crud payments
import { CreatepaymentsComponent } from './components/payments/createpayments/createpayments.component';
import { ShowpaymentsComponent } from './components/payments/showpayments/showpayments.component';
import { UpdatepaymentsComponent } from './components/payments/updatepayments/updatepayments.component';

export const routes: Routes = [
    // Redirección desde raíz
    { path: '', redirectTo: '/cartera', pathMatch: 'full' },

    // CRUD Cartera
    { path: 'cartera', component: ShowbriefcaseComponent },
    { path: 'cartera/crear', component: CreatebriefcaseComponent },
    { path: 'cartera/editar/:id', component: UpdatebriefcaseComponent },

    // CRUD Deudores
    { path: 'deudores', component: ShowdebtorsComponent },
    { path: 'deudores/crear', component: CreatedebtorsComponent },
    { path: 'deudores/editar/:id', component: UpdatedebtorsComponent },

    // CRUD Pagos
    { path: 'pagos', component: ShowpaymentsComponent },
    { path: 'pagos/crear', component: CreatepaymentsComponent },
    { path: 'pagos/editar/:id', component: UpdatepaymentsComponent },

    // CRUD Moras
    { path: 'moras', component: ShowdelaysComponent },
    { path: 'moras/crear', component: CreatedelaysComponent },
    { path: 'moras/editar/:id', component: UpdatedelaysComponent },

    // CRUD Garantías
    { path: 'garantias', component: ShowguaranteesComponent },
    { path: 'garantias/crear', component: CreateguaranteesComponent },
    { path: 'garantias/editar/:id', component: UpdateguaranteesComponent },

    // CRUD Préstamos
    { path: 'prestamos', component: ShowloansComponent },
    { path: 'prestamos/crear', component: CreateloansComponent },
    { path: 'prestamos/editar/:id', component: UpdateloansComponent },

    // CRUD Dinero
    { path: 'dinero', component: ShowmoneyComponent },
    { path: 'dinero/crear', component: CreatemoneyComponent },
    { path: 'dinero/editar/:id', component: UpdatemoneyComponent },

];
