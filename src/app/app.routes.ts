import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'item/:itemId',
        loadComponent: () => import('./item-details/item-details.component').then(c => c.ItemDetailsComponent)
    }
];
