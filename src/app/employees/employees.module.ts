import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesIndexComponent } from './views/employees-index/employees-index.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesIndexComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
