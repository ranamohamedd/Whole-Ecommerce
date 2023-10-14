import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:10,
    responsive: {
      0: {
        items: 8
      },
     
    },
    nav: true
  }


  allCategories: Category[] =[]
  constructor(private _productsService: ProductsService){

  }
  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories(){
  this._productsService.getCategory().subscribe(
    {
      next:(res)=>{
        console.log("getCategories=",res.data);
        this.allCategories=res.data
      }
    }
  )
  }

}
