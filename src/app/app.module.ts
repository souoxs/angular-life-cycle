import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { LifeComponent } from './life/life.component';
import { CycleComponent } from './cycle/cycle.component';
import { TimeComponent } from './time/time.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    IndexComponent,
    AboutComponent,
    LifeComponent,
    CycleComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
