import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-hello4',
  templateUrl: './hello4.component.html',
  styleUrls: ['./hello4.component.css'],
  providers: [MycheckService],
})
export class Hello4Component implements OnInit {
  title: string;
  message: string;


  constructor(private service: MycheckService) {
    service.push('hello data');
  }

  ngOnInit() {
    this.title = 'Hello-app';
    //this.message = this.service.hello();
    //this.message = 'data size; ' + this.service.size;
    this.message = this.service.json;
  }

}
