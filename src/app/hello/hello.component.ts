import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  /*
  template: `
    <div id="body">
      <h1>{{title}}</h1>
      <p>{{message}}</p>
    </div>
    `
  */
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  count: number;
  input: string;
  visible: boolean;
  data: string[];
  switch: string;
  nowClass: any;
  //now: Date;
  //styleClass: string;

  constructor() {
    /*
    setInterval(
      () => { 
        this.styleClass = this.styleClass == 'red' ? '' : 'red';
        console.log(this.styleClass);
        this.now = new Date();
      }, 1000);
    */
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'Font size';
    this.count = 0;
    this.input = '';
    this.visible = true;
    this.data = [
      'first thing.',
      'second thing.',
      'third thing',
    ];
    this.switch = 'one';
    this.nowClass = {
      'thin':false,
      'large':false,
      'frame':false,
    };
    //this.message = 'This is My First Component!!';
    //this.styleClass = 'red';
  }

  doClick() {
    //this.message = ++this.count + "times clicked";
    this.visible = !this.visible;
  }

  doType(val:string) {
    this.input =  val;
    this.message = 'you type: ' + this.input;
  }

  doSelect(val:string) {
    this.switch = val;
  }

  check(c1, c2, c3) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
    this.message = c1 + ',' + c2 + ',' + c3;
  }

  /*
  today() {
    return this.now.toLocaleString();
  }
  */

}
