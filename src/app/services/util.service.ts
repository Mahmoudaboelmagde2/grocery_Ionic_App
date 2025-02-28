/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Injectable, NgZone } from '@angular/core';
import { LoadingController, AlertController, ToastController, NavController, MenuController } from '@ionic/angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  isLoading = false;

  cateList: any[] = [
    {
      "image": "assets/images/category/vegetables.png",
      "name": "Vegetables",
    },
    {
      "image": "assets/images/category/food.png",
      "name": "Fruits",
    },
    {
      "image": "assets/images/category/barbecue.png",
      "name": "Meats",
    },
    {
      "image": "assets/images/category/seafood.png",
      "name": "Seafood",
    },
    {
      "image": "assets/images/category/proteins.png",
      "name": "Milk & Egg",
    },
    {
      "image": "assets/images/category/bakery.png",
      "name": "Bread",
    },
    {
      "image": "assets/images/category/fish.png",
      "name": "Frozen",
    },
    {
      "image": "assets/images/category/organic.png",
      "name": "Organic",
    },
  ];

  slidersList: any[] = [
    "assets/images/slider/1.png",
    "assets/images/slider/2.png",
    "assets/images/slider/3.png",
    "assets/images/slider/4.png",
    "assets/images/slider/5.png",
    "assets/images/slider/6.png",
    "assets/images/slider/7.png",
  ];

  productsList: any[] = [
    {
      "images": "assets/images/products/1.png",
      "name": "Pumpkin",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/2.png",
      "name": "Cucumber",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/3.png",
      "name": "Tomato",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/4.png",
      "name": "Eggplant",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/5.png",
      "name": "Onion",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/6.png",
      "name": "Asparagus",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/7.png",
      "name": "Arracacia",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/8.png",
      "name": "Ginger",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/9.png",
      "name": "Rutabaga",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/10.png",
      "name": "Turnip",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/11.png",
      "name": "Celeriac",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/21.png",
      "name": "Celery",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/22.png",
      "name": "Grapefruit",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/23.png",
      "name": "Hazelnut",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/24.png",
      "name": "Dragon Fruit",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/25.png",
      "name": "Chempedak",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/26.png",
      "name": "Coconut",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/27.png",
      "name": "Cherimoya",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/28.png",
      "name": "Dragonrfruit",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/29.png",
      "name": "Grapefruit",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/30.png",
      "name": "Ackee",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/31.png",
      "name": "Jenipapo",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/32.png",
      "name": "Rambutan",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/33.png",
      "name": "Strawberries",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/34.png",
      "name": "Papaya",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/35.png",
      "name": "Raspberries",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/36.png",
      "name": "Tangerine",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/37.png",
      "name": "Kiwano",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/38.png",
      "name": "Jujube",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/39.png",
      "name": "Mulberry",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/40.png",
      "name": "Nance",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/41.png",
      "name": "Oranges",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/42.png",
      "name": "Kiwano",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/43.png",
      "name": "Pear",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/44.png",
      "name": "Sapota",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/45.png",
      "name": "Ramphal",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
    {
      "images": "assets/images/products/46.png",
      "name": "Sudachi",
      "value": "100g",
      "price": 150.65,
      "desc": "Asparagus is a plant",
      "off": 10
    },
  ];

  ordersList: any[] = [
    {
      "status": "Waiting For Payment",
      "date": "06/12/2022",
      "amount": 1234.22,
      "background": "#FFA67C",
      "color": "#893A15",
      "id": this.makeid(10)
    },
    {
      "status": "Failed",
      "date": "06/12/2022",
      "amount": 1234.22,
      "background": "#ffa1a7",
      "color": "#e61409",
      "id": this.makeid(10)
    },
    {
      "status": "On Progress",
      "date": "06/12/2022",
      "amount": 1234.22,
      "background": "#76EAFC",
      "color": "#159DB2",
      "id": this.makeid(10)
    },
    {
      "status": "Delivered",
      "date": "06/12/2022",
      "amount": 1234.22,
      "background": "#94ed74",
      "color": "#329E23",
      "id": this.makeid(10)
    },
  ];
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private router: Router,
    private zone: NgZone,
  ) { }

  navigateToPage(routes: any, param?: NavigationExtras | undefined) {
    this.zone.run(() => {
      console.log(routes, param);
      this.router.navigate([routes], param);
    });
  }

  navigateToProduct(id: number, name: string) {
    this.zone.run(() => {
      this.router.navigate(['product-details', id, name]);
    });
  }

  navigateRoot(routes: any | string) {
    this.zone.run(() => {
      this.navCtrl.navigateRoot([routes]);
    });
  }

  getKeys(key: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(localStorage.getItem(key))
    });
  }

  clearKeys(key: string) {
    // this.storage.remove(key);
    localStorage.removeItem(key);
  }

  setKeys(key: string, value: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(localStorage.setItem(key, value));
    });
  }

  async show(msg?: string | null) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg && msg != '' && msg != null ? msg : '',
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  /*
    Show Warning Alert Message
    param : msg = message to display
    Call this method to show Warning Alert,
    */
  async showWarningAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showSimpleAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: '',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*
   Show Error Alert Message
   param : msg = message to display
   Call this method to show Error Alert,
   */
  async showErrorAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*
     param : email = email to verify
     Call this method to get verify email
     */
  async getEmailFilter(email: string) {
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!(emailfilter.test(email))) {
      const alert = await this.alertCtrl.create({
        header: 'Warning',
        message: 'Please enter valid email',
        buttons: ['OK']
      });
      await alert.present();
      return false;
    } else {
      return true;
    }
  }


  /*
    Show Toast Message on Screen
     param : msg = message to display, color= background
     color of toast example dark,danger,light. position  = position of message example top,bottom
     Call this method to show toast message
     */

  async showToast(msg: any, colors: any, positon: any) {


    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: colors,
      position: positon
    });
    toast.present();
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
  async shoNotification(msg: any, colors: any, positon: any) {

    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      color: colors,
      position: positon,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
    await Haptics.impact({ style: ImpactStyle.Medium });

  }

  async errorToast(msg: any, color?: string | (string & Record<never, never>) | undefined) {

    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: color ? color : 'dark'
    });
    toast.present();
    await Haptics.impact({ style: ImpactStyle.Medium });

  }

  onBack() {
    this.navCtrl.back();
  }

  makeid(length: any) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
