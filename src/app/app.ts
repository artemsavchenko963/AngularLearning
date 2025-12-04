import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { User } from './interface/user';
import { UserService } from './services/users';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  initialUser: User = {
    name: '',
    lastName: '',
    email: '',
    gender: 'male',
    country: 'pl',
    comment: '',
    agree: true,
  }
  user: User = structuredClone(this.initialUser);

  constructor(private userService: UserService) {

  }

  checkFieldStatus(field: NgModel) {
    return field.invalid && (field.dirty || field.touched);
  }

  onSubmit(userForm: NgForm) {
    this.userService.createUser(userForm.value).subscribe();
  }
}



