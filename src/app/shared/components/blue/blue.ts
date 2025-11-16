import { Component } from '@angular/core';
import { Red } from '../red/red';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blue',
  standalone: true,
  templateUrl: './blue.html',
  styleUrl: './blue.scss',
  imports: [ CommonModule]
})
export class Blue {

}


