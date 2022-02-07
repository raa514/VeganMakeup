import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { gsap } from "gsap";
import { CallMakeupService } from '../../shared/call-makeup.service';



@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{

  loading: boolean | undefined;
  duration: number = 4;

  constructor(
    private makeupSrv:CallMakeupService
  ) { }

  ngOnInit(): void {
    this.makeupSrv.getLoaderChanges().subscribe(res => {
      this.loading = res;
    });
    // while (true) {
      // setTimeout(() => {
        // gsap.to('.halo', { duration: 2.5 , ease: "Bounce.easeOut", y: +200 });
        // gsap.to('.halo', { duration: 2.5 , ease: "Bounce.easeOut", y: -200 });
      // }, 50);
    // }
    
  }


}
