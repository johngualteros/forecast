import { Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';

export const routes: Routes = [
    {
        path: 'weather/:acronym',
        component: WeatherComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
