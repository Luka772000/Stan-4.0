import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Popups/register/register.component';
import { MembersListComponent } from './apartments/ApartmentForRent/apartmentsforrent.component';
import { MembersDetailComponent } from './apartments/apartmentEditPage/apartmentdetail.component';
import { ListsComponent } from './Registration/registration.component';
import { SharedModule } from './_modules/shared.module';
import { HasRoleDirective } from './_directives/has-role.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Register2Component } from './Popups/register2/register2.component';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { MemberCardComponent } from './apartments/ApartmentForRent/ApartmentForRentcard/apartmentforrentcard.component';
import { ApartmentCardComponent } from './apartments/apartmentEditPage/apartment-card/apartment-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddingAdressComponent } from './Popups/adding-adress/adding-adress.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { CreateApModalComponent } from './modals/create-ap-modal/create-ap-modal.component';
import { MyapartmentsComponent } from './apartments/myapartments/myapartments.component';
import { RentApComponent } from './modals/rent-ap/rent-ap.component';
import { PhotoModalComponent } from './modals/photo-modal/photo-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MyApartmentCardComponent } from './apartments/myapartments/my-apartment-card/my-apartment-card.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MembersListComponent,
    MembersDetailComponent,
    ListsComponent,
    HasRoleDirective,
    UserManagementComponent,
    Register2Component,
    RolesModalComponent,
    MemberCardComponent,
    ApartmentCardComponent,
    AddingAdressComponent,
    CarouselComponent,
    CreateApModalComponent,
    MyapartmentsComponent,
    RentApComponent,
    PhotoModalComponent,
    MyApartmentCardComponent,


  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    TabsModule,
    MatButtonModule,
    FontAwesomeModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RolesModalComponent,CreateApModalComponent]
})
export class AppModule { }
