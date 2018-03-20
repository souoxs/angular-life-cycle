import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  info: string;

  showCycle: boolean;

  constructor() { 
    this.info = 'World';
    this.showCycle = true;
  }

  ngOnChanges() {
    console.log('Life - ngOnChanges');
  }

  ngOnInit() {
    console.log('Life - ngOnInit');
  }

  ngDoCheck() {
    console.log('Life - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Life - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Life - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Life - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Life - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Life - ngOnDestroy');
  }

  toggle() {
    this.showCycle = !this.showCycle;
  }

}
