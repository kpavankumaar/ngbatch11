import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {
  @Input() data;
  constructor() { 
    console.log("construtor",this.data)
  }

  ngOnInit() {
    console.log("ngOnInit",this.data)
  }

}
