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
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  id: any = '';
  tracking: any[] = [
    {
      "status": 1,
      "value": "Order Created",
      "time": "Mar 24, 2021 5:44 PM"
    },
    {
      "status": 1,
      "value": "Order accepted by Grocery",
      "time": "Mar 24, 2021 2:40 PM"
    },
    {
      "status": 1,
      "value": "Order ongoing by Grocery",
      "time": "Mar 25, 2021 7:20 AM"
    },
    {
      "status": 1,
      "value": "Order delivered by Grocery",
      "time": "Mar 24, 2021 9:24 PM"
    },
  ];
  constructor(
    public util: UtilService,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data && data.id) {
        this.id = data.id;
      }
    });
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

}
