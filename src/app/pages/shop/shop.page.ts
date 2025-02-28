/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras } from '@angular/router';
import { SearchPage } from '../search/search.page';
import { register } from 'swiper/element';
import { ModalController } from '@ionic/angular';

register();
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true
  };
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onProductList(name: string) {
    const param: NavigationExtras = {
      queryParams: {
        name: name
      }
    }
    this.util.navigateToPage('product-list', param);
  }

  onRecommendList() {
    this.util.navigateToPage('recommend-list');
  }

  onProductInfo(index: number) {
    const param: NavigationExtras = {
      queryParams: {
        id: index
      }
    };
    this.util.navigateToPage('product-info', param);
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

  onNotification() {
    this.util.navigateToPage('notifications');
  }

  onPromos() {
    this.util.navigateToPage('promo-codes');
  }

}
