import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { ChoiceComponent } from './choice/choice.component';
import { SubscribeHelperComponent } from './subscribe/helper/helper.component';
import { SubscribeInneedComponent } from './subscribe/inneed/inneed.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { ConnectInneedComponent } from './connect/inneed/inneed.component';
import { ConnectHelperComponent } from './connect/helper/helper.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";

const appRoutes: Routes = [
  { path: '', redirectTo:'/choice', pathMatch: 'full' },
  { path: 'choice', component: ChoiceComponent},
  { path: 'subscribe/inneed', component: SubscribeInneedComponent},
  { path: 'subscribe/helper', component: SubscribeHelperComponent},
  { path: 'connect/inneed', component: ConnectInneedComponent},
  { path: 'connect/helper', component: ConnectHelperComponent},
  { path: '**', redirectTo:'/choice' },
];

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    SubscribeHelperComponent,
    SubscribeInneedComponent,
    ConnectInneedComponent,
    ConnectHelperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
