import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = 'http://localhost:8000/Articles';
  UrlArticle = 'http://localhost:8000/api/articles/';
  UrlCommentaire=' http://localhost:8000/Avis/' ;

  constructor() { }

  async getAllSArticles() {
    return await axios.get(`${this.baseUrl}`);
  }

  async getArticle(id) {
    return await axios.get(`${this.UrlArticle}` + id);
  }

  async getCommentaire(id) {
    return await axios.get(`${this.UrlCommentaire}` + id);
  }

  
}
