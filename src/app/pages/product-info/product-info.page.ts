/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { register } from 'swiper/element';

register();
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {
  cover: any = '';
  name: any = '';
  value: any = '';
  off: any = '';
  price: any = '';
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2.2,
    spaceBetween: 10,
  };
  constructor(
    public route: ActivatedRoute,
    public util: UtilService
  ) {
    this.route.queryParams.subscribe((data: any) => {
      if (data && data.id) {
        const info = this.util.productsList[data.id];
        console.log(info);
        if (info && info.name && info.images) {
          this.cover = info.images;
          this.name = info.name;
          this.value = info.value;
          this.off = info.off;
          this.price = info.price;
        }
      }
    })
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  onProductInfo(index: number) {
    const param: NavigationExtras = {
      queryParams: {
        id: index
      }
    };
    this.util.navigateToPage('product-info', param);
  }

}
