import {Component, OnInit} from '@angular/core';
import {IProduct} from '../IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {
  }

  keyword = '';
  title = 'Product List';
  imageSize = 150;

  products: IProduct[] = [
    {
      id: 1,
      name: 'Lenovo',
      price: 2000,
      desc: 'moi',
      image: 'assets/images/lenovo.jpeg'
    },
    {
      id: 2,
      name: 'Dell',
      price: 3000,
      desc: 'moi',
      image: 'assets/images/lenovo.jpeg',
    },
    {
      id: 3,
      name: 'Aser',
      price: 2000,
      desc: 'moi',
      image: 'assets/images/lenovo.jpeg',
    }
  ];
  statusImage = false;
  filteredProduct: IProduct[];

  setStatus() {
    this.statusImage = !this.statusImage;
  }

  onChange(value) {
    this.imageSize = value;
  }

  ngOnInit() {
    this.filteredProduct = this.products;
  }

  getFilter() {
    return this.keyword;
  }

  setFilter(value: string) {
    this.keyword = value;
    this.filteredProduct = this.keyword ? this.filter(this.keyword) : this.products;
  }

  filter(filterBy: string): IProduct[] {
    console.log(filterBy);
    return this.products.filter((product: IProduct) =>
      product.name.indexOf(filterBy) !== -1
    );
  }
}
