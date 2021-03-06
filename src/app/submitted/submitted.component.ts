import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css'],
})
export class SubmittedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.onclick = (args: any): void => {
      window.location.reload();
    };
  }
}
