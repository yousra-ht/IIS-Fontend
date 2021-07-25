import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ServiceIISService {
  private BaseUrl = 'https://localhost:8000/api/services';

  constructor() { }

  async getAllService() {
    return await axios.get(`${this.BaseUrl}`);
  }
}