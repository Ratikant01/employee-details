import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import PAGE_TITLE from '../../config/page-title.json';
import {Employee} from './models/employee.model';
import {EmployeeListService} from './services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  employees: Employee[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title,
              private employeeListService: EmployeeListService) {
    // Set page title
    this.titleService.setTitle(PAGE_TITLE.employeeList);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  /**
   * Get employee list
   */
  getEmployees(): void {
    this.employeeListService.getEmployees().pipe(
      takeUntil(this.destroyed$)
    ).subscribe(response => {
      this.employees = response;
    }, error => {
      // Handle error properly
      console.log('Error: ', error);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
