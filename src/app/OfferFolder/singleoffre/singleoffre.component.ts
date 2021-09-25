import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { OfferService } from '../offer.service';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    
   
  </div>
  <div class="modal-body">
    <h3> votre candidature est bien enrigistré dans notre base </h3>

    
  </div>
  <div class="modal-footer">

    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalOffre2 {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  focusFirst: NgbdModalOffre2,

};
@Component({
  selector: 'app-singleoffre',
  templateUrl: './singleoffre.component.html',
  styleUrls: ['./singleoffre.component.css']
})
export class SingleoffreComponent implements OnInit {

  OffreListe = [];
  Candidature: any;
  elem;
  showMsg: boolean = false;
  submitted = false;
  form: FormGroup;
  constructor(private _offerService: OfferService, private route: ActivatedRoute, private formBuilder: FormBuilder, private _modalService: NgbModal) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cv: new FormControl(null, [Validators.required]),
    });



    this._offerService.getAlloffer().then((resp) => {
      this.OffreListe = resp.data;
    });
    const id = this.route.snapshot.paramMap.get("id");
    this._offerService.getoffer(id).then((resp) => {
      this.Candidature = resp.data
    });
  }
  get f() { return this.form.controls; }



  uploadFile(event) {
    this.elem = event.target;
    console.log(this.elem.files[0]);
    this.form.patchValue({
      cv: this.elem.files[0]
    });
    this.form.get('cv').updateValueAndValidity()
  }

  simpleAlert() {
    Swal.fire('Hi Welcome! This is Simple Alert');
  }


  successAlertNotification() {

  }


  submit(e) {

    e.stopPropagation()

    const id = this.route.snapshot.paramMap.get("id");
    this._offerService.getoffer(id).then((resp) => {
      var formData: any = new FormData();
      formData.append("cv", this.elem.files[0]);
      formData.append("nom", this.form.get('nom').value);
      formData.append("prenom", this.form.get('prenom').value);
      formData.append("email", this.form.get('email').value);
      formData.append("offreEmplois", "/api/offre_emplois/" + id);
      console.log(formData.values())
      this._offerService.createcandidature(
        formData, id
      ).then(() => {
        this.open('focusFirst')

        console.warn("success");

      })
    });

  }
  // }

  open(name: string) {
    this._modalService.open(MODALS[name]);
  }


}
