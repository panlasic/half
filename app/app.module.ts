import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleQuestionComponent } from './single-question/single-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AllQuestionsComponent,
    ProfileComponent,
    SingleQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
