import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CallMakeupService } from '../../shared/call-makeup.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FilterMakeupComponent } from 'src/app/filter-makeup/filter-makeup.component';




@Component({
  selector: 'app-makeup-product',
  templateUrl: './makeup-product.component.html',
  styleUrls: ['./makeup-product.component.css']
})
export class MakeupProductComponent implements OnInit {

  products:any[] =[] ;
  data: any[] | undefined;
  mode: ProgressSpinnerMode = 'indeterminate';
  loading: boolean = false;
  @Input() toBeSearched: string ='';
  initial: number = 0;
  final: number = 21;
  maxLength: any;
  priceLessThanFlag: boolean = true;
  tagList: string[]=[];

  constructor(
    private makeupSrv:CallMakeupService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.getProducts();
    this.makeupSrv.getLoaderChanges().subscribe(res=>{
      this.loading = res;
    });
  }


  getProducts(){
    console.log(this.loading);
    this.makeupSrv.getMakeup().subscribe(res=>{
      this.products =  Object.values(res);
      this.maxLength = this.products.length;
      this.initiateProducts(this.initial, this.final);
      // console.log(this.products);
    })

    // this.makeupSrv.getMakeup().subscribe((res)=>{
    //   this.data = Object.values(res);
    //   if (this.data.length != 0) {
    //     this.maxLength = this.data.length;
    //     this.initiateProducts(this.initial, this.final);
    //   }
    //   this.loading = false;
    //   this.makeupSrv.loadProduct(this.data);
    //   console.log(this.maxLength);
    // })
  }

  initiateProducts(i: number, f: number){
    this.getTheTags();
    this.makeupSrv.getProduct().subscribe(res=>{
      this.products = res.slice(i,f);
    })
  }

  searchMakeup(){
    // this.loading = this.makeupSrv.isLoading;
    this.makeupSrv.searchMakeupByBrand('').subscribe(res=>{
      // this.products = res;
      // this.maxLength = res.length;
      // this.loading = this.makeupSrv.isLoading;
    })
  }

  loadMoreProducts(){
    console.log(this.final+' '+this.maxLength );
    if(this.final<=this.maxLength){
      this.final += 21;
    this.initiateProducts(this.initial, this.final);
    }else{
     this._snackBar.open("Sorry no more products!!!", "ok", {
       duration: 5000
     })
    }
    
  }

  openFilter() {
    const dialogRef = this.dialog.open(FilterMakeupComponent, {
      width: "500px"
    });
    dialogRef.afterClosed().subscribe((res) => {
      // this.loading = true;
      if (res.priceLessThan !== '' || res.priceGreaterThan !== '') {
        let priceVlaue = res.priceLessThan;
        if (priceVlaue == '') {
          priceVlaue = res.priceGreaterThan
          this.priceLessThanFlag = false;
        }
        this.makeupSrv.searchMakeupByPrice(priceVlaue, this.priceLessThanFlag)
          .subscribe(res => {
            // this.loading = false;
            console.log(res);
            this.maxLength = res.length;
          })
      } else if( res.categoryType !== '' && res.productType !== ''){
        this.makeupSrv.searchMakeupByType(res.productType, res.categoryTyp)
        .subscribe(res=>{
          // this.loading = false;
          console.log(res);
          this.maxLength = res.length;
        })
      } 
       else if (res.productType !== '' &&  res.categoryType === '' ) {
        this.makeupSrv.searchMakeupByType(res.productType).subscribe(res => {
          console.log(res);
          this.maxLength = res.length;
          // this.loading = false;
        });
      }else {
        this.makeupSrv.searchMakeupByType('').subscribe(res => {
          console.log(res);
          this.maxLength = res.length;
          // this.loading = false;
        })
      }
    })
  }

  fetchMakeupByTag(tag: any){
    this.makeupSrv.fetchMakeupByTag(tag).subscribe(res=>{
      this.maxLength = res.length;
    })
  }

  getTheTags(){
    this.products.forEach(product=>{
      this.tagList = product.tag_list;
      console.log(this.tagList);
      this.tagList.forEach(tag=>{
        this.colorTheTag(tag);
      })
    })
  }

  colorTheTag(tag: string){
    switch (tag) {
      case 'cruelty free':
        
        break;
    
      default:
        break;
    }
  }
  



}
