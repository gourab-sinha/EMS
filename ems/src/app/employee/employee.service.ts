import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: "root"})
export class EmployeeService{
    private employees: Employee[] = [
        {firstName: 'Gourab', lastName: 'Sinha', email: 'g@g.com', role: 'Software Developer', status: true},
        {firstName: 'Sourab', lastName: 'Sinha', email: 'g@g.com', role: 'Software Developer', status: true},
        {firstName: 'Rahul', lastName: 'Sinha', email: 'g@g.com', role: 'Software Developer', status: true},
    ];
    
    getEmployees(){
        return [...this.employees];
    }
}