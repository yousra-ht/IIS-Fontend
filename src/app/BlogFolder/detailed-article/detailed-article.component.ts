import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { NgbActiveModal ,  NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.component.html',
  styleUrls: ['./detailed-article.component.css']
})

export class DetailedArticleComponent implements OnInit {

  Article: any;
  ArticleListe: any;
  CommentaireListe: any;


  constructor(private blogService: BlogService, private route: ActivatedRoute,private modalService: NgbModal) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.blogService.getArticle(id).then((resp) => { this.Article = resp.data; console.log(this.Article) });
    this.blogService.getAllSArticles().then((resp) => { this.ArticleListe = resp.data; console.log(this.ArticleListe) });
    this.blogService.getCommentaire(id).then((resp) => { this.CommentaireListe = resp.data; console.log(this.CommentaireListe) });

  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  submit(e) {
    alert('nn');
  }

}
