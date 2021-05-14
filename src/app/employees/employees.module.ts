import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesIndexComponent } from './views/employees-index/employees-index.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeCreateComponent } from './views/employee-create/employee-create.component';
import { FormsModule } from '../shared/forms/forms.module';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesIndexComponent,
    EmployeesTableComponent,
    EmployeeFormComponent,
    EmployeeCreateComponent
  ],
    imports: [
        CommonModule,
        EmployeesRoutingModule,
        FormsModule
    ]
})
export class EmployeesModule { }
