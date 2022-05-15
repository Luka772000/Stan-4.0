import { Apartment, ApartmentClass, RentApartmentClass } from '../../../_models/apartment';
import { Member } from '../../../_models/member';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfo} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from 'src/app/modals/photo-modal/photo-modal.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css']
})
export class ApartmentCardComponent implements OnInit {

AdressShow = false;
AdressMode=false

// @Output() public apartmentt= new EventEmitter<any>();
@Input() public apartment: Apartment;
bsModalRef: BsModalRef;
  constructor(private router: Router,public accService:AccountService, public memberService:MembersService,private toastr:  ToastrService,private modalService:BsModalService) {library.add(faInfo); }

  ngOnInit( ): void {
  }
  openDialog(apartment: Apartment){
    const config={
      class: 'modal-dialog-centered',
      initialState: {
        apartment
      }
    }
    this.bsModalRef = this.modalService.show(PhotoModalComponent, config);
  }
   


  printPage() {
    window.print();
  }
  adressToggle(){
    
    this.AdressShow = !this.AdressShow;
  }
  cancelAddressMode(event: boolean) {
    this.AdressShow = !this.AdressShow;
  }
  updateApartment(form:NgForm){
    this.memberService.apformData.id=this.apartment.id
    this.memberService.updateApartment().subscribe(
      res =>{
        this.memberService.apformData = new ApartmentClass();
        this.toastr.success('Stan je uspješno izmijenjen')
        // window.location.reload();
        
      },
      err =>{console.log(err);
     
      });
      
  }
}
