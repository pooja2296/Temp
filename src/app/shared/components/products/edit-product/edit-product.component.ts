import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/services/data';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
productId : number = 1;
productDetails !: Iproducts;
canEdit:number=1;
  constructor(private productService :ProductsService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params
      .subscribe((params : Params)=>{
        this.productId = +params['id'];
        this.productDetails = this.productService.getSingleproduct(this.productId)!;
      })
      this.route.queryParams
          .subscribe((param:Params)=>{
            console.log(param);
            this.canEdit =+ param['canEdit']
            
          })
  }

}
