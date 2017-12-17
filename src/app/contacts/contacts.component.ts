import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts:Contact[]=[];
  contact:string;
  firstName:string;
  lastName:string;
  phone:string;
  constructor(public contactService:ContactService) { }


  ngOnInit() {


  }
  addContact(){
    const newContact={
      firstName:this.firstName,
      lastName:this.lastName,
      phone:this.phone
    };

    this.contactService.addContact(newContact)
      .subscribe(contact=> {
        this.contacts.push(contact);
        this.contactService.getContacts()
          .subscribe(contacts=>this.contacts=contacts)
      })
    this.firstName='';
    this.lastName='';
    this.phone='';

  }
  deleteContact(id:any){
    //var contacts=this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data=>{
        if(data.n==1){
          for(var i=0;i<this.contacts.length;i++){
            if(this.contacts[i]._id == id){
              this.contacts.splice(i,1);
            }
          }
        }
      })
  }


}
