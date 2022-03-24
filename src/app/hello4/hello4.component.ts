import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MycheckService } from '../mycheck.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello4',
  templateUrl: './hello4.component.html',
  styleUrls: ['./hello4.component.css'],
  providers: [MycheckService],
})
export class Hello4Component implements OnInit {
  title: string;
  message: string;


  constructor(private client: HttpClient) {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'wait...';
    setTimeout(() => this.getData(), 5000)
  }

  getData() {
    this.client.get('/assets/data.json')
    .subscribe((result: MyData) => {
      this.message = 'data: ' + result.data;
    });
  }

}

class MyData {
  data: string;
}
