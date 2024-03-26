import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Department } from '../../Model/department.model';
import { Ward } from '../../Model/ward.model';
@Injectable({
    providedIn: 'root'
  })
  export class WardService {
    constructor(private http: HttpClient) {}
    private apiUrl = 'http://13.48.82.196:8101/ward';

    getAllDepartments(): Observable<Department[]> {
      
      return this.http.get<Department[]>('http://13.48.82.196:8101/department/getAll');
    }
  
    getAllWards(): Observable<Ward[]> {
        return this.http.get<Ward[]>('http://13.48.82.196:8101/ward/getAll');
      }
    
      addWard(ward: Ward): Observable<Ward> {
        return this.http.post<Ward>('http://13.48.82.196:8101/ward/save', ward);
      }
    
      updateWard(ward: Ward): Observable<Ward> {
        return this.http.put<Ward>(`http://13.48.82.196:8101/ward/update/${ward.id}`, ward);
      }
    
      deleteWard(ward:Ward): Observable<void> {
        return this.http.put<void>(`http://13.48.82.196:8101/ward/updateStatus`,ward);
      }
  }
