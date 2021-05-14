import {Component, OnDestroy, OnInit} from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { EmployeesService } from '../../services/employees.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit, OnDestroy {
  employees: Employee[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    private es: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  trackByFn(index: any, item: Employee): number {
    return item.id;
  }

  private getEmployees(): void {
    const sub = this.es.getAll().subscribe(
      employees => this.employees = employees
    );
    this.sub.add(sub);
  }
}
