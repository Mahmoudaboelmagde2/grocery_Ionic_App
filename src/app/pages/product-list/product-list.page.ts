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

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  name: any = '';
  constructor(
    private route: ActivatedRoute,
    public util: UtilService
  ) {
    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data && data.name) {
        this.name = data.name;
      }
    });
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
