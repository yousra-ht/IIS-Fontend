import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  ArticleListe: any;

  constructor(private blogService :BlogService) { }

  ngOnInit() {
    this.blogService.getAllSArticles().then((resp) => { this.ArticleListe = resp.data; console.log(this.ArticleListe) });
  }

}
