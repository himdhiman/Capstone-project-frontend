import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-account-number',
  templateUrl: './show-account-number.component.html',
  styleUrls: ['./show-account-number.component.css']
})
export class ShowAccountNumberComponent implements OnInit {
  @Input() accountNumber: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
