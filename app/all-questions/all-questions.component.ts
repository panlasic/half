import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from './question.component';
import { SearchBoxComponent } from './search-box.component';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css'],

})
export class AllQuestionsComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

}
