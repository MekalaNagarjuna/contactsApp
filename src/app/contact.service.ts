import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {Contact} from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http:Http) { }

  //Retrieving contacts
  getContacts(){

    return this.http.get('http://localhost:8282/api/rContacts').map(res=>res.json());
  }


  //Add contacts
  addContact(newContact){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8282/api/pContacts',newContact,{headers:headers}).map(res=>res.json());

  }

  //Delete contact

  deleteContact(id){

    return this.http.delete('http://localhost:8282/api/dContacts/' + id).map(res=>res.json());
  }



}
