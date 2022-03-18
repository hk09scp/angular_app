import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-hello3',
  templateUrl: './hello3.component.html',
  styleUrls: ['./hello3.component.css']
})
export class Hello3Component implements OnInit {
  title: string;
  message: string[];
  lastTarget: any;
  lastColor: string;
  input1: string;
  @ViewChild(MessageComponent)
  private msgComponent: MessageComponent;

  constructor() { }

  ngOnInit() {
    this.title = "Hello-app";
    this.message = ['First item.', 'Second item.', 'Third item.'];
    this.input1 = '';
  }

  push() {
    if(this.input1 == '') {
      alert('input only text.');
      return;
    }
    this.msgComponent.push(this.input1);
    this.input1 = '';
  }
  pop(){
    this.msgComponent.pop();
  }

  doClick(event) {
    if(this.lastTarget != null) {
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.style.backgroundColor = 'white';
    }
    console.log('lastTarget is null');
    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
  }

}
