import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  @Output() cancelRegister = new EventEmitter(); 
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register2(){
    this.accountService.register2(this.model).subscribe(response => {
      
      this.cancel();
      window.location.reload();
    }, error => {
      console.log(error);
      this.toastr.error("Neispravno korisnicko ime ili lozinka");
    })
  }

  cancel (){
    this.cancelRegister.emit(false);
  }

}
