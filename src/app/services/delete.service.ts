import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../models/Request/request';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  deleteUserProfile(requestParamModel: Request) {
    const path = environment.api + "delete-user-profile";
    return this.http.post(path, requestParamModel);
  }
}
