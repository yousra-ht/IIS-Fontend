import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from '../contact.service';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    
   
  </div>
  <div class="modal-body">
    <h3> votre mail est bien enrigistré dans notre base </h3>

    
  </div>
  <div class="modal-footer">

    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalContact {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  focusFirst: NgbdModalContact,

};
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  isDataLoading = true;
  submited = true;
  constructor(private _contactService: ContactService, private formBuilder: FormBuilder, private _modalService: NgbModal) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }
  get f() { return this.form.controls; }


  submit(e) {
    e.stopPropagation()
    this._contactService.createContact({
      'nom': this.form.get('nom').value,
      'prenom': this.form.get('prenom').value,
      'mail': this.form.get('mail').value,
      'message': this.form.get('message').value,
      'Date': new Date()
    }).then(() => {
      console.log("succes")
      //this.open('focusFirst')
    })
  }


  open(name: string) {
    this._modalService.open(MODALS[name]);
  }

}
