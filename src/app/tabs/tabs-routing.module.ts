import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'addmeta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../addmeta/addmeta.module').then(m => m.AddmetaPageModule)
          }
        ]
      },
      {
        path: 'firstaccess',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../firstaccess/firstaccess.module').then(m => m.FirstaccessPageModule)
          }
        ]
      },
      {
        path: 'metas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../metas/metas.module').then(m => m.MetasPageModule)
          }
        ]
      },
      {
        path: 'receita',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../receita/receita.module').then(m => m.ReceitaPageModule)
          }
        ]
      },
      {
        path: 'despesa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../despesa/despesa.module').then(m => m.DespesaPageModule)
          }
        ]
      },
      {
        path: 'ajustes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ajustes/ajustes.module').then(m => m.AjustesPageModule)
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
