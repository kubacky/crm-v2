import { Component, OnInit } from '@angular/core';
import { WorkingPositionsService } from '../../services/working-positions.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { WorkingPosition } from '../../interfaces/working-position';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  private sub: Subscription = new Subscription();
  workingPositions: WorkingPosition[] = [];

  constructor(
    private wps: WorkingPositionsService
  ) { }

  ngOnInit(): void {
    const sub = this.wps.getAll().subscribe(
      workingPositions => this.workingPositions = workingPositions
    );
  }

}
