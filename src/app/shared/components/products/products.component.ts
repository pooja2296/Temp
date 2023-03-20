import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/services/data';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productsData! : Iproducts [];
seletctedProducts :number = 1;
  constructor(private ProductsService : ProductsService) { }

  ngOnInit(): void {
    this.productsData = this.ProductsService.getAllproducts();   
  }

}
