import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogeleMapComponent } from './googele-map/googele-map.component';

const routes: Routes = [
  {path:'',component:GoogeleMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
