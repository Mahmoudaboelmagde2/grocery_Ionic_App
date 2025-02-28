/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { SearchPage } from '../search/search.page';
import { NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onPromocode() {
    this.util.navigateToPage('promo-codes');
  }

  async onSearch() {
    const modal = await this.modalController.create({
      component: SearchPage,
    });
    modal.onDidDismiss().then((data) => {
      if (data && data.role == 'ok') {
        this.onProductInfo(data.data);
      }
    });
    await modal.present();

  }

  onProductInfo(index: number) {
    const param: NavigationExtras = {
      queryParams: {
        id: index
      }
    };
    this.util.navigateToPage('product-info', param);
  }

  onNotification() {
    this.util.navigateToPage('notifications');
  }

  onPromos() {
    this.util.navigateToPage('promo-codes');
  }

  onAddress() {
    this.util.navigateToPage('saved-address');
  }

  onHelp() {
    this.util.navigateToPage('help');
  }

}
