import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.component.html',
  styleUrls: ['./detailed-article.component.css']
})
export class DetailedArticleComponent implements OnInit {
  ArticleListe: any;

  constructor(private blogService : BlogService) { }

  ngOnInit() {
    this.blogService.getAllSArticles().then((resp) => { this.ArticleListe = resp.data; console.log(this.ArticleListe) });
  
  }

}
