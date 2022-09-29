import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface Gif {
  id: number;
  gifRoute: string;
  gifTag: string;
}

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {
  baseUrl = environment.HOST

  constructor(private http: HttpClient) { }

  postGif(gif:any){
    return this.http.post(`${this.baseUrl}/GifAdd/`, gif);
  }

  getGif(){
    return this.http.get<Gif>(`${this.baseUrl}/GetGifs`);
  }

  getGifByTag(tag:any){
    return this.http.get<any>(`${this.baseUrl}/GetGifsByTag/` + tag);
  }

  getGifById(id:number){
    return this.http.get<any>(`${this.baseUrl}/GetGifById/` + id);
  }
}
