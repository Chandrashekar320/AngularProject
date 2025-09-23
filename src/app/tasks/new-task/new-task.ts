import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();

//how we can use Two-way binding with signals
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  // enteredTitle = '';
  // enteredSummary = '';
  // enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }
}
