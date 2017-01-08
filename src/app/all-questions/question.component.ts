import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./all-questions.component.css'],
})
export class QuestionComponent implements OnInit {
questions: any[];
@Input() term;
  constructor() {
  this.questions = [
      {'name': 'Eva',
        'title': 'Will insulin make my patient gain weight?',
        'relatedDis': '5',
        'peers': '1',
        'conversation': '3',
      },
      {'name': 'Andrew',
        'title': 'Vegan diet diabetes treatment?',
        'relatedDis': '5',
        'peers': '1',
        'conversation': '3',
      },
      {'name': 'Joseph',
        'title': 'Vegan diet to stop diabetes progress?',
        'relatedDis': '5',
        'peers': '1',
        'conversation': '3',
      }
    ]; 
    
    }
  ngOnInit() {
  }
}
