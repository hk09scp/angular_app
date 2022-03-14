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
    this.message = 'please type...';
    this.count = 0;
    this.input = '';
    this.visible = true;
    //this.message = 'This is My First Component!!';
    //this.styleClass = 'red';
  }

  doClick() {
    //this.message = ++this.count + "times clicked";
    this.visible = !this.visible;
  }

  doType(val:string){
    this.input =  val;
    this.message = 'you type: ' + this.input;
  }

  /*
  today() {
    return this.now.toLocaleString();
  }
  */

}
