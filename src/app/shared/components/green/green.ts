import { Component, ViewEncapsulation } from '@angular/core';
import { Red } from '../red/red';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-green',
  standalone: true,
  templateUrl: './green.html',
  styleUrl: './green.scss',
  imports: [Red, CommonModule],
})
export class Green {

}
