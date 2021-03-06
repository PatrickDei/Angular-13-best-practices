import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowcaseComponent} from "src/app/component/showcase.component";

const routes: Routes = [
  { path: '', component: ShowcaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
