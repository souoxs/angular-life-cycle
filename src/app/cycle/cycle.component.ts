import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {

  @Input('Info') Info: string;

  constructor() { }

  ngOnInit() {
  }

}
