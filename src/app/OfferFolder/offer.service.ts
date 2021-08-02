import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  Url= 'http://localhost:8000/api/offre_emplois';
  baseUrl='http://localhost:8000/Articles'

  constructor() { }

  async getAlloffer(){
    return await axios.get(`${this.Url}`);
  }

  async getAllSArticles() {
    return await axios.get(`${this.baseUrl}`);
  }

 
}
