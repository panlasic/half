import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'search',
  styleUrls: ['./search-box.component.css'],
  template: '<input placeholder="Search questions"  #input type="text" (input)="update.emit(input.value)">'
})
export class SearchBoxComponent {
@Output() update = new EventEmitter();
ngOnInit()
{
	this.update.emit('');
}
}
