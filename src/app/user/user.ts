import { Component, EventEmitter, Input, Output , output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  
@Input({required:true}) user!:{
 id:string;
 avatar: string;
 name: string;
};
@Output() select = new EventEmitter<string>();
//select = output<string>();

get imagePath(){
  return '/users/' + this.user.avatar;
}

onSelectUser() {
  this.select.emit(this.user.id);}
}