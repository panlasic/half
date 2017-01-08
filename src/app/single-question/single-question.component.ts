import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
  public voteValue = 0;
  voteDown(voteValue)
  {
  	this.voteValue--;
  } 
  voteUp(voteValue)
  {
  	this.voteValue++;
  }
}
