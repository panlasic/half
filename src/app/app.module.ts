import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { QuestionComponent } from './all-questions/question.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { SearchBoxComponent } from './all-questions/search-box.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllQuestionsComponent,
    QuestionComponent,
    ProfileComponent,
    SingleQuestionComponent,
    FilterPipe,
    SearchBoxComponent
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
