import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPage } from './book.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage,
    children: [
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
          }
        ]
      },

      {
        path: 'booking',
        children: [
          {
            path: '',
            loadChildren: () => import('../booking/booking.module').then( m => m.BookingPageModule)
          }
        ]
      },

      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPageRoutingModule {}
