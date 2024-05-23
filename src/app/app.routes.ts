import { Routes } from '@angular/router';

export const routes: Routes = [
//   {
//     path: 'opportunities',
//     loadChildren: () =>
//       import('./opportunities').then((m) => m.OpportunitiesModule),
//   },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
//   {
//     path: 'maintenance',
//     component: MaintenanceComponent,
//   },
];
