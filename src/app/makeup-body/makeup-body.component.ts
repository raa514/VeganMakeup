import { Component, OnInit } from '@angular/core';
import { CallMakeupService } from '../shared/call-makeup.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-makeup-body',
  templateUrl: './makeup-body.component.html',
  styleUrls: ['./makeup-body.component.css']
})

export class MakeupBodyComponent implements OnInit {


  
  search = new FormControl('');
  constructor(
    private callMakeup:CallMakeupService
  ) { }

  ngOnInit(): void {

  }

}
