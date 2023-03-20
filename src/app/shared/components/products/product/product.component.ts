import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/services/data';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId:number = 1;
  productDetails!: Iproducts;

  constructor(private productsService:ProductsService,
    private route:ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
    this.productDetails = this.productsService.getSingleproduct(this.productId)!;
      this.route.params
            .subscribe((param:Params)=>{
              this.productId = +param['id'];
              this.productDetails = this.productsService.getSingleproduct(this.productId)!;
            })
  }
  gotoEditproducts(){
      // this.router.navigate(['/products', this.productId, 'edit'])
      this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling :'preserve'})
  }
  
}
