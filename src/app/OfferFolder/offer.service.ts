import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  Url= 'http://localhost:8000/api/offre_emplois';
  constructor() { }

  async getAlloffer(){
    return await axios.get(`${this.Url}`);
  }

 
}
