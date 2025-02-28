/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-promo-details',
  templateUrl: './promo-details.page.html',
  styleUrls: ['./promo-details.page.scss'],
})
export class PromoDetailsPage implements OnInit {
  url: any = '';
  constructor(
    public util: UtilService,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((data: any) => {
      this.url = data.img;
    })
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

}
