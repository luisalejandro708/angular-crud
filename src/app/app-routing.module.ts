import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se importa los componentes

import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { ShowComponent } from './component/show/show.component';

const routes: Routes = [
  {path: '', component: ShowComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
