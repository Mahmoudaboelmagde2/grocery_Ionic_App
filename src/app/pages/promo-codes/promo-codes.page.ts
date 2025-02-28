/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-promo-codes',
  templateUrl: './promo-codes.page.html',
  styleUrls: ['./promo-codes.page.scss'],
})
export class PromoCodesPage implements OnInit {

  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  onNavigate(url: string) {
    const param: NavigationExtras = {
      queryParams: {
        img: url
      }
    };
    this.util.navigateToPage('promo-details', param);
  }

}
