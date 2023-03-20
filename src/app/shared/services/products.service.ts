import { Injectable } from '@angular/core';
import { Iproducts } from '../model/services/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productArray : Iproducts[] = [
  {
    pName: 'Samsung',
    pId: 1,
    pStatus: 'In progress',
    editStatus: 1
  },  
  {
    pName: 'Redme note 8 pro',
    pId: 2,
    pStatus: 'Delivered',
    editStatus: 0
  },
  {
    pName: 'Iphone',
    pId: 3,
    pStatus: 'Dispatched',
    editStatus: 1
  }
]
  constructor() { }
  getAllproducts(): Iproducts[]{
    return this.productArray;
  }
  getSingleproduct(id:number){
    return this.productArray.find(prod=>prod.pId==id)
  }
}
