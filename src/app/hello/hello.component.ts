import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
  nowStyle: any;
  //now: Date;
  //styleClass: string;
  text1: string;
  myControl: FormControl;
  myGroup: FormGroup;
  myGroup2: FormGroup;
  myGroup3: FormGroup;
  myGroup4: FormGroup;
  myGroup5: FormGroup;

  constructor(private fb: FormBuilder) {
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
    this.nowStyle = {
      'border-style': '',
      'border-width': '',
      'border-color': '',
    }
    //this.message = 'This is My First Component!!';
    //this.styleClass = 'red';
    this.text1 = '';
    this.myControl = new FormControl('ok.');
    this.myGroup = this.fb.group({
      name: [''],
      mail: [''],
      age: [0]
    });
    this.myGroup2 = new FormGroup({
      control: new FormControl()
    });
    this.myGroup3 = new FormGroup({
      control: new FormControl()
    });
    this.myGroup4 = new FormGroup({
      control: new FormControl()
    });
    this.myGroup5 = new FormGroup({
      control: new FormControl()
    });
  }

  doClick() {
    //this.message = ++this.count + "times clicked";
    //this.visible = !this.visible;
    this.message = 'You wrote ' + this.myControl.value;
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

  checkStyle(in1, in2, in3) {
    this.nowStyle['border-style'] = in1;
    this.nowStyle['border-width'] = in2 + "px";
    this.nowStyle['border-color'] = in3;
    this.message = JSON.stringify(this.nowStyle);
  }

  onSubmit() {
    let result = this.myGroup.value;
    this.message = JSON.stringify(result);
  }

  onSubmit2() {
    let result = this.myGroup2.value;
    this.message = JSON.stringify(result);
  }

  onSubmit3() {
    let result = this.myGroup3.value;
    this.message = JSON.stringify(result);
  }

  onSubmit4() {
    let result = this.myGroup4.value;
    this.message = JSON.stringify(result);
  }

  onSubmit5() {
    let result = this.myGroup5.value;
    this.message = JSON.stringify(result);
  }

  onSubmit6(val) {
    this.message = JSON.stringify(val);
  }

  /*
  today() {
    return this.now.toLocaleString();
  }
  */

}
