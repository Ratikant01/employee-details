import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import {RestClientService} from '../../../core/services/rest-client.service';
import {EmployeeDetails} from '../models/employee-details.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private readonly restService: RestClientService) {
  }

  getEmployee(employeeId: string): Observable<EmployeeDetails> {
    return this.restService.get(environment.serviceUrls.employeeDetails, employeeId).pipe(
      pluck('data'), map(response => response));
  }
}
