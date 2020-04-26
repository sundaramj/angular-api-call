import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employee',component:EmployeeComponent},
  {path:'employee/:id',component:EmployeeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
