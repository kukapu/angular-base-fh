import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from '../pages/basics/basics.component';
import { NumbersComponent } from '../pages/numbers/numbers.component';
import { UncommonComponent } from '../pages/uncommon/uncommon.component';
import { CustomComponent } from '../pages/custom/custom.component';


const ChildRoutes: Routes = [
  { path: '', component: BasicsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'uncommon', component: UncommonComponent },
  { path: 'custom', component: CustomComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(ChildRoutes)],
  exports: [RouterModule],
})
export class ChildModule { }
