import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(environment.baseUrl);
  }

  update(id,data){ 
    return this.http.put(environment.baseUrl+id,data);
  }
}
