import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList : any;
  employee : Employee;
  abc : String;
  fullname : String = 'sss';
  
  constructor(private EmployeeApi : EmployeeService) { }
    
  ngOnInit(): void {
    this.listEmployeeApi();    
  }

  listEmployeeApi(){
    this.EmployeeApi.getAll().subscribe(
      data => {
        console.log(data);
        this.employeeList = data;
      },
      error => {
        console.log(error);
      })
  }

  editEmp(data){
    this.employee = new Employee();
    this.employee.name = data.name;
    this.employee.dept = data.dept;
  }
  deleteEmp(data){
    console.log(data);
  }
  updateEmp(data){    
    this.EmployeeApi.update(this.employee._id,data).subscribe(
      data => {
        console.log('res');
        console.log(data);
      },
      error => {
        console.log('error');
      }
    )
  }

}
