import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: 'user',component: UserComponent},
  {path: 'display',component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
