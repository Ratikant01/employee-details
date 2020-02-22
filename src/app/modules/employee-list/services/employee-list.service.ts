import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import {RestClientService} from '../../../core/services/rest-client.service';
import {Employee} from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private readonly restService: RestClientService) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.restService.get(environment.serviceUrls.employeeList).pipe(
      pluck('data'), map(response => response));
  }
}
