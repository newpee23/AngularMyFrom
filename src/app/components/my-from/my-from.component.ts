import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'app-my-from',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './my-from.component.html',
  styleUrl: './my-from.component.scss'
})

export class MyFromComponent {

  constructor(private user: UsersService) { }

  onSubmit(form: NgForm) {
    // debugger;
    const isFormValid = form.form.valid;
    if (isFormValid) {
      this.user.setUser(form.form.value);
      form.resetForm();
    }
  }

  onClickClearData() {
    this.user.users = [];
  }
}
