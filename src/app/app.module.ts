import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShoppinListComponent } from './shoppin-list/shoppin-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ListServiceService } from './list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinListComponent,
    ItemDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
