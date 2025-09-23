import { Component, EventEmitter, Input, Output , output} from '@angular/core';
import { UserI} from './user.model';
import { Card } from "../shared/card/card";
// import { type UserI} from './user.model';//to tell that we are importing type only


//  we can use interface instead of type,
// but only objects can be defined using interface unlike type
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  
//using type/Interface User instead of simple object user
@Input({required:true}) user!:UserI;
@Input({required:true}) selected!:boolean;

@Output() select = new EventEmitter<string>();
//select = output<string>();

get imagePath(){
  return '/users/' + this.user.avatar;
}

onSelectUser() {
  this.select.emit(this.user.id);}
}