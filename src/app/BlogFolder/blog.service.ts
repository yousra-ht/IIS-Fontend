import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
baseUrl='https://localhost:8000/Articles'
  constructor() { }

  async getAllSArticles() {
    return await axios.get(`${this.baseUrl}`);
  }
}
