import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewRecipe=()=>{
    return this.http.get("http://localhost:8080/viewrecipe")
  }
  
    addRecipe=(data:any)=>{
      return this.http.post("http://localhost:8080/addrecipe",data)
    }


}
