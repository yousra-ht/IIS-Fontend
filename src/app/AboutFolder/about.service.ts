import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

private BaseUrl = 'http://localhost:8000/api/services';

constructor() { }

async getAllService() {
  return await axios.get(`${this.BaseUrl}`);
}
}