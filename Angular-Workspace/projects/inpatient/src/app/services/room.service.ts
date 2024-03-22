import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Department } from '../../Model/department.model';
import { Room } from '../../Model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8083/admin-service/room';
  getAllRoomTypes():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/admin-service/roomType/getAll`);
  }
  getAllByWard():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/admin-service/ward/getAll`);
  }
 
  addRoom(roomDetails: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8083/admin-service/room/save`, { roomDetails});
  }
  updateRoom(room : Room): Observable<Room> {
    return this.http.put<Room>(`http://localhost:8083/admin-service/room/update/${room.id}`, room);
  }
  deleteRoom(room: Room): Observable<void> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<void>('http://localhost:8083/admin-service/room/updateStatus',room,{headers});
      }
  getAllDetails(pageSize:number,currentPage:number):Observable<any[]>{
    const params = new HttpParams()
      .set('_page', currentPage.toString())
      .set('_limit', pageSize.toString());
   return this.http.get<any[]>(`http://localhost:8083/admin-service/room/getAll`,{params});
  }
  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('http://localhost:8083/admin-service/department/getAll');
  }
  roomDetailsById(roomId:any[]):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/admin-service/room/getByRoomId/${roomId}`).pipe(tap(data=>JSON.stringify("edit data"+data)))
  }

}
