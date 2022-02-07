import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CallMakeupService } from '../shared/call-makeup.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = new FormControl('');
  @Output() searchedValue = new EventEmitter<string>();

  constructor(
    private makeupSrv: CallMakeupService
  ) { }

  ngOnInit(): void {
  }

  searchMakeup(){
    console.log(this.search.value);
    this.makeupSrv.searchMakeupByBrand(this.search.value);
  }

}
