import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'params: ' + JSON.stringify(this.route.snapshot.queryParamMap);
  }

}
