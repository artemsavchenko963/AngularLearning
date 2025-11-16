import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Blue } from '../blue/blue';

@Component({
  selector: 'app-red',
  standalone: true,
  templateUrl: './red.html',
  styleUrl: './red.scss',
  imports: [Blue],
})
export class Red {

}
