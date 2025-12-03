import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  user: User = {
    name: '',
    lastName: '',
    email: '',
    gender: 'male',
    country: 'pl',
    comment: '',
    agree: true,
  }
}



