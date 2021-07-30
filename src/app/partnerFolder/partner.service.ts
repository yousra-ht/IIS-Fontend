import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private BaseUrl = 'http://localhost:8000/api/partenaires';

  constructor() { }
  
  async getAllPartenaire() {
    return await axios.get(`${this.BaseUrl}`);
  }
  }