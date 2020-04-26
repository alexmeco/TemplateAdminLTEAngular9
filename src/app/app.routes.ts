import {RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ContactoComponent } from './components/contacto/contacto.component';



const APP_ROUTES: Routes = [
    {path: 'principal', component: PrincipalComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', pathMatch: 'full' , redirectTo: 'principal'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);