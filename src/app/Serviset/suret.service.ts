import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuretService {

  constructor(public http: HttpClient ) { }
  merriSuret(){
    return this.http.get('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/index.json');
  }
  suretArabisht(id: number){
    return this.http.get('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/' + id + '.json');
  }
}
