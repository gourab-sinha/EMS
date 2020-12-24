import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: "root"})
export class EmployeeService{
    private employees: Employee[] = [];
    private employeeUpdated = new Subject<{employees: Employee[], totalCount: number}>();
    constructor(private http: HttpClient) { }

    getEmployees(employeesPerPage: number, currentPage: number){
        console.log(employeesPerPage);
        console.log(currentPage);
        const queryParam = `?pagesize=${employeesPerPage}&page=${currentPage}`;
        this.http.get<{
            message: string,
            employees: any,
            totalCount: number
        }>("http://localhost:3000/api/employees/" + queryParam).pipe(
            map(employeeData =>{
                return { employees: employeeData.employees.map(employee=>{
                    return {
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                        role: employee.role,
                        email: employee.email
                    };
                }), totalCount: employeeData.totalCount
                };
            })
        ).subscribe(transformedEmployeeData => {
            console.log(transformedEmployeeData);
            this.employees = transformedEmployeeData.employees;
            this.employeeUpdated.next({
                employees: [...this.employees], totalCount: transformedEmployeeData.totalCount
            });
        });
    }
    ngOnInit(): void {
    }
}