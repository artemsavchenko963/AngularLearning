import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { User } from './interface/user';


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

  checkFieldStatus(field: NgModel) {
    return field.invalid && (field.dirty || field.touched);
  }
}



