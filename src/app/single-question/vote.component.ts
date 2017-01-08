import { Component, OnInit } from '@angular/core';

@Component({

})
export class VoteComponent implements OnInit {

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
