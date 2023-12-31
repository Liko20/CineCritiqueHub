import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:5000/"
  constructor( private http: HttpClient) { 
   }

   registerUser(user:any)
   {
     return this.http.post<any>(this.url + 'register',user ,{withCredentials:true});
   }

   LoginUser(user:any)
   {
     return this.http.post<any>('http://localhost:5000/login',user,{withCredentials:true});
   }

   getUser()
   {
    return this.http.get<any>(this.url+'user',{withCredentials:true});
   }

  
}
