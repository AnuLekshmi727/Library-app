import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchbookComponent,
    ViewbookComponent,
    DeletebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
