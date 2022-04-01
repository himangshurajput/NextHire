import { Component, OnInit } from '@angular/core';
import 'animate.css';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('navslide', [
      state('open', style({})),
      state('close', style({ transform: 'translateY(0%)' })),
      transition('open <=> close', animate('200ms ease-in-out')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  state = 'open';
  check: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    if (window.innerWidth <= 640)
      this.state == 'open' ? (this.state = 'close') : (this.state = 'open');
    this.check = !this.check;
  }
}
