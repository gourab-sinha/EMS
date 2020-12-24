import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { PageEvent } from '@angular/material/paginator';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  totalCount = 0;
  employeesPerPage = 1;
  currentPage = 1;
  pageSizeOptions = [1,2,5,10];

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  onChangedPage(pageData: PageEvent){
    this.currentPage = pageData.pageIndex + 1;
    this.employeesPerPage = pageData.pageSize;
  }

}
