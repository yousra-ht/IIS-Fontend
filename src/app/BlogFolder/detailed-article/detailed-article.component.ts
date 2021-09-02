import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }
}
@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.component.html',
  styleUrls: ['./detailed-article.component.css']
})

export class DetailedArticleComponent implements OnInit {
  form: FormGroup;
  Article: any;
  ArticleListe: any;
  CommentaireListe: any;
  member: any;

  display: any;
  constructor(private blogService: BlogService, private route: ActivatedRoute, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.blogService.getArticle(id).then((resp) => { this.Article = resp.data; console.log(this.Article) });
    this.blogService.getAllSArticles().then((resp) => { this.ArticleListe = resp.data; console.log(this.ArticleListe) });
    this.blogService.getCommentaire(id).then((resp) => { this.CommentaireListe = resp.data; console.log(this.CommentaireListe) });


    this.form = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contenu: new FormControl('', [Validators.required]),
      publier: new FormControl(''),
    });

  }

  get f() { return this.form.controls; }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  submit(e) {



    console.log(this.form.value)
    e.stopPropagation()
    {
      this.blogService.AjoutMember({
        'nom': this.form.get('nom').value,
        'prenom': this.form.get('prenom').value,
        'email': this.form.get('email').value,
        'telephone': "null",
        'password': "null",
  
      }).then(() => {

        this.blogService.getMember(this.form.get('email').value).then((resp) => {





          console.log(resp.data.id)

          const id_mem = resp.data.id;
          const id = this.route.snapshot.paramMap.get("id");
          this.blogService.AjoutArticle({
            'date': new Date(),
            'prenom': this.form.get('prenom').value,
            'nom': this.form.get('nom').value,
            'contenu': this.form.get('contenu').value,
            "article": "/api/articles/" + id,
            "membre": "/api/membres/1",
            'publier': false,
          }).then(() => {

            this.display = true;
            alert(" votre commentaire est bien enrigistré dans la base")


          })


        })

      })
    }
  }
}



