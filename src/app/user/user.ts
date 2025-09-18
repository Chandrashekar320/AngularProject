import { Component, EventEmitter, Input, Output , output} from '@angular/core';
import { UserI} from './user.model';
// import { type UserI} from './user.model';//to tell that we are importing type only


// We can use type to define object structure and also define other types like union, intersection, primitive etc.
// type User1 = {
//   id:string;
//   avatar: string;
//   name: string;
// };


//  we can use interface instead of type,
// but only objects can be defined using interface unlike type
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  
//using type/Interface User instead of simple object user
@Input({required:true}) user!:UserI;


// @Input({required:true}) user!:{
//  id:string;
//  avatar: string;
//  name: string;
// };
@Output() select = new EventEmitter<string>();
//select = output<string>();

get imagePath(){
  return '/users/' + this.user.avatar;
}

onSelectUser() {
  this.select.emit(this.user.id);}
}