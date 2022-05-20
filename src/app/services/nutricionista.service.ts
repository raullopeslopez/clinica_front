import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nutricionista } from '../interfaces/nutricionista';
import { environment } from '../../environments/environment';
import { URLS_ADMINISTRADOR } from '../shared/constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
<<<<<<< HEAD
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  }),
=======
<<<<<<< HEAD
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  }),
=======
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' 
  })
>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
};

@Injectable({
  providedIn: 'root',
})
export class NutricionistaService {
  listNutricionistas: Nutricionista[] = [];

  constructor(private http: HttpClient) {}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
  getAllNutricionistas(): Observable<Nutricionista[]> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_NUTRICIONISTAS}`;
    return this.http.get<Nutricionista[]>(url, httpOptions);
  }

  getNutricionista(idNutricionista: number){
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_NUTRICIONISTAS}/${idNutricionista}`;
    console.log('URL: ' + url);
    return this.http.get(url, httpOptions);
  }

   postNutricionista(nutricionista: Nutricionista) {
     const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.POST_NUTRICIONISTA}`;
     return this.http.post(url, nutricionista, { responseType: 'text' });
   }


  putNutricionista(nutricionista: Nutricionista): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.PUT_NUTRICIONISTA}`;
    return this.http.put(url, nutricionista, { responseType: 'text' });
  }

  deleteNutricionista(idNutricionista: number): Observable<Object> {
    const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.DELETE_NUTRICIONISTA}/${idNutricionista}`;
    return this.http.delete(url, { responseType: 'text' });
  }
<<<<<<< HEAD
=======
=======
listNutricionistas: Nutricionista[] = []

constructor(private http: HttpClient) { }

getAllNutricionistas() : Observable<Nutricionista[]> {
   const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_NUTRICIONISTAS}`;
   return this.http.get<Nutricionista[]>(url, httpOptions);
} 

getNutricionista(idNutricionista: Number){
   const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_NUTRICIONISTAS}/${idNutricionista}`;
   console.log ('URL: ' + url)
   return this.http.get<Nutricionista>(url, httpOptions);
}

postNutricionista(nutricionista: Nutricionista){
   const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.POST_NUTRICIONISTA}`;
   return this.http.post(url, nutricionista, httpOptions);
} 


putNutricionista(nutricionista: Nutricionista) : Observable<Object> {
   const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.PUT_NUTRICIONISTA}`;
   return this.http.put(url, nutricionista, httpOptions);
}


deleteNutricionista(idNutricionista: number) : Observable<Object>{ 
   const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.DELETE_NUTRICIONISTA}/${idNutricionista}`;
   return this.http.delete(url, {responseType: 'text'});
}

>>>>>>> d692c596356868c2e7493ab63bd6a840fa45bad2
>>>>>>> 60e95e9b6e9c63591b124d480fbad0747fb0efc2
}
