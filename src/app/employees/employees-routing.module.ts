import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesIndexComponent } from './views/employees-index/employees-index.component';
import {EmployeeCreateComponent} from './views/employee-create/employee-create.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      {
        path: '',
        component: EmployeesIndexComponent
      },
      {
        path: 'new',
        component: EmployeeCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
