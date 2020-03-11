import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'firstaccess',
    loadChildren: () => import('./firstaccess/firstaccess.module').then( m => m.FirstaccessPageModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./receita/receita.module').then( m => m.ReceitaPageModule)
  },
  {
    path: 'despesa',
    loadChildren: () => import('./despesa/despesa.module').then( m => m.DespesaPageModule)
  },
  {
    path: 'metas',
    loadChildren: () => import('./metas/metas.module').then( m => m.MetasPageModule)
  },
  {
    path: 'addmeta',
    loadChildren: () => import('./addmeta/addmeta.module').then( m => m.AddmetaPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
