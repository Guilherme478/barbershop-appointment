import { DummyComponent } from './dummy/dummy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: DummyComponent },
  {path: 'services', component: DummyComponent },
  {path: 'avaliations', component: DummyComponent },
  {path: 'about', component: DummyComponent },
  {path: 'signup', component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
