import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nutricionista } from '../interfaces/nutricionista';
import {environment} from '../../environments/environment';
import {URLS_ADMINISTRADOR} from '../shared/constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {


listNutricionistas: Nutricionista[] = []

  constructor(private http: HttpClient) { }

   getAllNutricionistas() : Observable<Nutricionista[]> {
      const url = `${environment.URL_BASE}${URLS_ADMINISTRADOR.GET_ALL_NUTRICIONISTAS}`;
      return this.http.get<Nutricionista[]>(url, httpOptions);
  } 
  
  

/*  getNutricionista(id_nutricionista: Number) : Observable<Object> {
      const url = `${environment.URLS_ADMINISTRADOR}/${GET_ALL_NUTRICIONISTAS}/${id}';
      return this.http.get(url, httpOptions);
 */ 

/*  postNutricionista(nutricionista: Nutricionista) : Observable<Object>{
      const url = `${environment.URLS_ADMINISTRADOR}/${POST_NUTRICIONISTA}';
      return this.http.put<Nutricionista>(url, nutricionista, httpOptions);
 } 

*/
/*  putNutricionista(nutricionista: Nutricionista) : Observable<Object> {
      const url = `${environment.URLS_ADMINISTRADOR}/${PUT_NUTRICIONISTA}';
      return this.http.put(url, httpOptions);
}

*/
/*  deleteNutricionista(id_nutricionista: number) : Observable<Object>{} 
      const url = `${environment.URLS_ADMINISTRADOR}/${DELETE_NUTRICIONISTA}/${id}';
      return this.http.delete(url, httpOptions);
}
*/


  /*getNutricionista() {
    return this.listNutricionistas.slice();
  }

  eliminarNutricionista(index: number) {
    this.listNutricionistas.splice(index, 1);
  }

  addNutricionista(nutricionista: Nutricionista) {
    this.listNutricionistas.unshift(nutricionista);
  }*/
}
