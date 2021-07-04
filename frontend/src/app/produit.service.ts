import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {

private SERVER_URL = environment.SERVER_URL; 
  constructor(private  http :HttpClient) { }


  grtAllproduit(numberOfResults:number=10){
      return this.http.get(this.SERVER_URL+'/produit', {
        params:{
          limit : numberOfResults.toString()
        }
      })
       
        
     
  }



}
