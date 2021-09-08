import { Component, Input, OnInit, TemplateRef, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS: {[name: string]: Type<any>} = {
  focusFirst: NgbdModalConfirm,
  autofocus: NgbdModalConfirmAutofocus
};



@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.component.html',
  styleUrls: ['./detailed-article.component.css'] ,

})

export class DetailedArticleComponent implements OnInit {
  
  form: FormGroup;
  Article: any;
  ArticleListe: any;
  CommentaireListe: any;
  member: any;

  display: any;
  closeResult = '';
  constructor(private blogService: BlogService, private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal , private _modalService: NgbModal) { }

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
            // alert(" votre commentaire est bien enrigistré dans la base")

            // this.open(" ")
          })


        })

      })
    }
  }
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;

// constructor(private _modalService: NgbModal) {}

open(name: string) {
this._modalService.open(MODALS[name]);
}
  // open(content) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}



