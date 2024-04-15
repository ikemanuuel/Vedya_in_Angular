import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './elements/header/header.component'; // Adjust the path as necessary
import { AppComponent } from './app.component';
import { Section1Component } from './elements/section-1/section-1.component';
import { RouterModule } from '@angular/router';
import { Section2Component } from './elements/section-2/section-2.component';
import { Section3Component } from './elements/section-3/section-3.component';
import { Section4Component } from './elements/section-4/section-4.component';
import { Section5Component } from './elements/section-5/section-5.component';
// import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component // Declare the AppHeaderComponent here
  ],
  imports: [
    BrowserModule,
    RouterModule
    // Other necessary imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
