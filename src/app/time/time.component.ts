import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  constructor() { }

  ngOnChanges() {
    console.log('Time - ngOnChanges');
  }

  ngOnInit() {
    console.log('Time - ngOnInit');
  }

  ngDoCheck() {
    console.log('Time - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Time - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Time - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Time - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Time - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Time - ngOnDestroy');
  }

}
