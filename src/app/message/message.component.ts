import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})
export class MessageComponent implements OnInit {
  //@Input() content: string[];
  //@Output() action = new EventEmitter<MouseEvent>();
  content: string[];

  constructor(private service: MycheckService) {
    //this.content = [];
    service.push('message data');
  }

  ngOnInit() {
    //this.content.push(this.service.hello());
    this.content = this.service.list;
  }

  doAction(event) {
    this.action.emit(event);
  }
  /*
  push(item: string) {
    this.service.name = item;
    this.content.push(this.service.hello());
  }
  pop() {
    this.content.pop();
  }
  */

}
