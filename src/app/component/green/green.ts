import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-green',
  imports: [],
  standalone: true,
  templateUrl: './green.html',
  styleUrl: './green.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Green {
  color: string = "red";

  onAfterViewInit() {
    this.color = 'pink';
  }
}
