import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { product } from './porducts';

@Injectable({
  providedIn: 'root'
})

export class CallMakeupService {

  private availableProducts = new BehaviorSubject<product[]>([]); 
  private loaderChanges =  new BehaviorSubject <boolean>(false);

  makeUpUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json';
  

  brand: string | undefined;
  category: string | undefined;
  description: string | undefined;
  image_link: string | undefined;
  name: string | undefined;
  price: number | undefined;
  price_sign: any;
  product_type: string | undefined;
  tag_list: string[] | undefined;
  product_colors: string[] | undefined;
  data: any[] | undefined;
  searchFor: string = '';
  globalLoading: boolean = false;
  searchedMakeup: {}={} ;
  isSearched: boolean = false;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient
  ) { 
   
  }

  loadProduct(product: product[]){
    this.availableProducts.next(product);
  }

  loadLoaderChanges(isLoading: boolean){
    this.loaderChanges.next(isLoading);
  }

  getProduct(): Observable<product[]>{
    return this.availableProducts.asObservable();
  }

  getLoaderChanges():Observable<boolean> {
    return this.loaderChanges.asObservable();
  }

  getMakeup(){
    this.loaderChanges.next(true);
    this.http.get(this.makeUpUrl)
    .subscribe(res=>{
      this.loadProduct(Object.values(res));
      this.loaderChanges.next(false);
      
    })
    return this.availableProducts.asObservable();
  }

  searchMakeupByBrand(brand: string): Observable<product[]>{
    this.loaderChanges.next(true);
    this.http.get(this.makeUpUrl+'?brand='+ brand)
    .subscribe(res=>{
      console.log(res);
      this.loadProduct(Object.values(res));
      this.loaderChanges.next(false);
    })
    return this.availableProducts.asObservable();
  }

  searchMakeupByPrice(priceValue: number, priceLessThanFlag: boolean): Observable<product[]>{
    this.loaderChanges.next(true);
    let url = '';
    priceLessThanFlag ? 
      url = this.makeUpUrl+ '?price_less_than='+ priceValue 
      : url = this.makeUpUrl+ '?price_greater_than='+ priceValue
    this.http.get(url)
    .subscribe(res=>{
      // console.log(res);
      this.loadProduct(Object.values(res));
      this.loaderChanges.next(false);
    })
    return this.availableProducts.asObservable();
  }

  searchMakeupByType(type: string, category?: string): Observable<product[]>{
    this.loaderChanges.next(true);
    let url = '';
    if(category){
      url = this.makeUpUrl + '?product_type='+ type +'&product_category='+category;
    }else{
      url = this.makeUpUrl + '?product_type='+ type;
    }
    this.http.get(url).subscribe(res=>{
      this.loadProduct(Object.values(res));
      this.loaderChanges.next(false);
    })
    return this.availableProducts.asObservable();
  }

  fetchMakeupByTag(tag: any): Observable<product[]>{
    this.loaderChanges.next(true);
    let url = this.makeUpUrl + '?product_tags='+tag;
    this.http.get(url).subscribe(res=>{
      this.loadProduct(Object.values(res));
      this.loaderChanges.next(false);
    });
    return this.availableProducts.asObservable();
  }

  // initiateAProduct(){
  //   this.getMakeup().subscribe((res)=>{
  //     [res].forEach(element => {
  //       debugger;
  //       this.data = Object.values(element).slice(0,10);
  //       console.log(Object.values(element).slice(0,10));
  //       for (let i = 0; i < this.data.length; i++) {
  //         this.brand = this.data[i].brand;
          
  //       }
  //     });
  //   })
  // }

}
