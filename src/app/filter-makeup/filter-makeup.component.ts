import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  FormControl,
  Validator,
  FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-makeup',
  templateUrl: './filter-makeup.component.html',
  styleUrls: ['./filter-makeup.component.css']
})
export class FilterMakeupComponent implements OnInit {

  filterForm: any;
  isSelected: boolean = false;
  byPrice: boolean = false;
  byType: boolean = false;
  disableFlag: boolean = true;
  productType: string[] = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lipliner', 'Lipstick', 'Mascara', 'Nail Polish']
  categoryType: any[] = [
    { 'type': 'Blush',
      'subcategory': [
        { 'name': 'powder',
          'id': '1'
        }
      ]
    },
    {
      'type': 'Bronzer',
      'subcategory': [
        {
          'name': 'powder',
          'id': '1'
        }
      ]
    },
    { 'type': 'Eyebrow',
    'subcategory':[
      {
        'name': 'pencil',
        'id': '1'
      }
    ]
    },
    { 'type': 'Eyeliner',
    'subcategory': [
      {
        'name': 'liquid',
        'id': '1'
      },
      {
        'name': 'pencil',
        'id': '2'
      },
      {
        'name': 'gel',
        'id': '2'
      },
      {
        'name': 'cream',
        'id': '3'
      }
    ]
    },
    // { 'type': 'Eyeshadow',
    // 'subcategory': ['Palette', 'Pencil', 'Cream', 'powder']
    // },
    // { 'type': 'Foundation',
    // 'subcategory': ['Concealer', 'Liquid','Contour','Bb cc','Cream', 'Mineral', 'Powder', 'Highlighter' ]
    // },
    // { 'type': 'Lipliner',
    // 'subcategory': ['pencil']
    // },
    // { 'type': 'Lipstick',
    // 'subcategory': ['Lipstick','Lip gloss', 'Liquid', 'Lip stain']
    // }
  ];
  subcategoryList: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FilterMakeupComponent>

  ) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      priceGreaterThan : new FormControl(''),
      priceLessThan: new FormControl(''),
      productType: new FormControl(''),
      categoryType: new FormControl('')
    });
  }

  submit(){
    // console.log(this.filterForm.value);
    sessionStorage.setItem("curr state", this.filterForm.value);
    this.dialogRef.close(this.filterForm.value);
  }

  toDisable(event: Event, type: string){
    if(type === 'priceGreaterThan' || type === 'priceLessThan'){
      if((event.target as HTMLInputElement).value){
        console.log('value present');
        this.byType = true;
      }else{
        console.log('value not present');
        this.byType = false;
      }
      
    }else if(type === 'productType'){
      console.log((event.target as HTMLInputElement).innerHTML);
      if((event.target as HTMLInputElement).innerHTML){
        console.log('value present');
        this.populateSubcategorylist((event.target as HTMLInputElement).innerHTML);
        this.byPrice = true;
        this.disableFlag = false;
      }else{
        console.log('value not present');
        this.byPrice = false;
        this.disableFlag = true;
      }
    }
  }


  populateSubcategorylist(producttype: any){
    for (let i = 0; i < this.categoryType.length; i++) {
      if(producttype.trim() ===  this.categoryType[i].type){
        this.subcategoryList = this.categoryType[i].subcategory;
        console.log('both are same');
      }else{
        console.log('both are not same');

      }
      console.log(this.categoryType[i].subcategory);
      
    }
    // this.categoryType.forEach(element => {
    //   console.log(element.subcategory);
    //   if(element.type === producttype.trim()){
    //     this.subcategoryList = element.subcategory;
    //   }
    // });
    console.log(this.subcategoryList);
  }

  clearFilter(){
    this.filterForm.reset();
    let formData = {
      priceGreaterThan: '',
      priceLessThan: '',
      productType: ''
    }
    this.dialogRef.close(formData);
  }

}
