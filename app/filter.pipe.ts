import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FilterPipe implements PipeTransform {

  transform(questions: any, term: any): any {
    if (term === undefined) return questions;
    return questions.filter(function(question){
    	return question.title.toLowerCase().includes(term.toLowerCase())
    	 });
   
  }

}
