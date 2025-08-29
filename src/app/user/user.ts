import { Component, Input , input, computed} from '@angular/core';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  

// @Input({required:true}) avatar!: string;
// @Input({required:true}) name!: string;
avatar = input.required<string>();
name = input.required<string>();

//computed signal for imagePath
imagePath = computed(() => {
return '/users/' + this.avatar();
});

// get imagePath(){
// return '/users/' + this.avatar;
// }


onSelectUser() {}
}
