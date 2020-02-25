import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import PAGE_TITLE from '../../config/page-title.json';
import {EmployeeDetailsService} from './services/employee-details.service';
import {Employee} from '../employee-list/models/employee.model';
import { FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  employeeId: string;
  employee: Employee = {} as Employee;  

  employeeDetailsForm = this.formBuilder.group({
    employeeId: new FormControl(''),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, this.emailDomainValidator('domain.com')])
  });
  
  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title,
              private employeeDetailsService: EmployeeDetailsService, private formBuilder: FormBuilder) {
    // Set page title
    this.titleService.setTitle(PAGE_TITLE.employeeDetails);
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  /**
   * Get employee list
   */
  getEmployee(): void {
    this.employeeDetailsService.getEmployee(this.employeeId).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(response => {
      this.employee = response;
      if(this.employee){
        this.employeeDetailsForm.patchValue({  
          firstName: this.employee.firstName,  
          lastName:this.employee.lastName,  
          email: this.employee.email,
          employeeId: this.employee.employeeId
        }); 
      }
    }, error => {
      // Handle error properly
      console.log('Error: ', error);
    });
  }

  goToEmployeeListPage() {
    this.router.navigateByUrl('/employee-list').then();
  }

  saveAndGoToEmployeeListPage() {
    this.router.navigateByUrl('/employee-list').then();
  }

  emailDomainValidator(domain: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value !== null) {
        const [_, eDomain] = control.value.split('@'); // split the email address to get the domain name
        return eDomain !== domain // check if the domain name matches the one inside the email address
          ? { emailDomain: true } // return in case there is not match
          : null; // return null if there is a match
      }
      return null; // no error, since there was no input
    };
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
