import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.sass']
})
export class UserItemComponent implements OnInit {
  @Input() name: string; // <-- Added name property

  constructor() {
    
  }

  ngOnInit() {
  }

}
