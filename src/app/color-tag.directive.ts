import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorTag]'
})
export class ColorTagDirective implements OnInit {


  constructor(
    private elementRef: ElementRef,
    private rendere: Renderer2
  ) { }

  @Input() tag: string = '';

  ngOnInit(): void {
    switch (this.tag) {
      case 'Vegan':
        this.colorTheTag('#FFE162');
        break;
      case 'cruelty free':
        this.colorTheTag('#FF6464');
        break;
      case 'Organic':
        this.colorTheTag('#BB6464');
        break;
      case 'Chemical Free':
        this.colorTheTag('#91C483');
        break;
      case 'water free':
        this.colorTheTag('#CDB699');
        break;
      case 'alcohol free':
        this.colorTheTag('#C3DBD9');
        break;
      case 'oil free':
        this.colorTheTag('#C8F2EF');
        break;
      case 'silicone free':
        this.colorTheTag('#9C51E0');
        break;
      case 'Gluten Free':
        this.colorTheTag('#ECC488');
        break;
      case 'cruelty free':
        this.colorTheTag('#F9D371');
        break;
      case 'purpicks':
        this.colorTheTag('#B762C1');
        break;
      case 'EcoCert':
        this.colorTheTag('#F14A16');
        break;
      case 'EWG Verified':
        this.colorTheTag('#9AE66E');
        break;
      case 'Hypoallergenic':
        this.colorTheTag('#FF6D6D');
        break;
      case 'No Talc':
        this.colorTheTag('#B97A95');
        break;
      case 'CertClean':
        this.colorTheTag('#00C1D4');
        break;
      case 'USDA Organic':
        this.colorTheTag('#DE8971');
        break;
      case 'Canadian':
        this.colorTheTag('#FB3640');
        break;
      case 'Non-GMO':
        this.colorTheTag('#D97642');
        break;
      case 'Fair Trade':
        this.colorTheTag('#726A95');
        break;
      case 'Sugar Free':
        this.colorTheTag('#83A95C');
        break;
      case 'Dairy Free':
        this.colorTheTag('#C56183');
        break;
      default:
        break;
    }

  }
  colorTheTag(color: string) {
    this.rendere.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }

}
