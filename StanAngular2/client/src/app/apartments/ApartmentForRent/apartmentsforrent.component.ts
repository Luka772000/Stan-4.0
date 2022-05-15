import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MembersService } from '../../_services/members.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { Apartment } from 'src/app/_models/apartment';
import { RentApComponent } from 'src/app/modals/rent-ap/rent-ap.component';

@Component({
  selector: 'app-members-list',
  templateUrl: './apartmentsforrent.component.html',
  styleUrls: ['./apartmentsforrent.css']
})
export class MembersListComponent implements OnInit {
  users: any;
  members: Member[];
  apartments: Apartment[];
  bsModalRef: BsModalRef;
  constructor(private http: HttpClient, private memberService: MembersService,public modalService:BsModalService) { }

  ngOnInit(): void {
    
    this.loadMembers();
    this.loadApartments();
  }

  getUsers(){
    this.http.get('https://localhost:44329/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
  
  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }
  
  loadApartments(){
    this.memberService.getApartments().subscribe(apartments => {
      this.apartments  = apartments ;
    })
    
  }
 

  

   
   
}
