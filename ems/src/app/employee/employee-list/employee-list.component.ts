import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { PageEvent } from '@angular/material/paginator';

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
  isLoading = true;

  employees: Employee[] = [
    {firstName: 'Gourab', lastName: 'Sinha', email: 'g@g.com', role: 'Software Developer'},
    {firstName: 'Sourab', lastName: 'Sinha', email: 'g@g.com', role: 'Software Developer'},
    {firstName: 'Rahul', lastName: 'Sinha', email: 'g@g.com', role: 'Software Developer'},
  ];
  constructor() { }

  ngOnInit(): void {
    this.isLoading = false;
  }

  onChangedPage(pageData: PageEvent){
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.employeesPerPage = pageData.pageSize;
    
  }

}
