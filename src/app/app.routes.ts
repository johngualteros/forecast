import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/home/home.component';

// routes
import { routes as weatherRoutes } from './presentation/weather/weather.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    ...weatherRoutes,
    {
        path: '**',
        redirectTo: 'home'
    }
];
