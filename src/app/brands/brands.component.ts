import { Component } from '@angular/core';
import { Brands } from '../brands';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
    allBrands:Brands[]=[];
    constructor(private _productsService:ProductsService){
  
  }
  
  ngOnInit(): void {
      this.getAllBrands();
  }
  
  getAllBrands(){
    this._productsService.getBrands().subscribe({
      next:(res)=>{
        this.allBrands=res.data
        console.log("Brands result=",res);
      },
      error:(err)=>{
          console.log("Product error=");
  
      }
    });
  
  }
}
