/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewAddressPage } from './new-address.page';

describe('NewAddressPage', () => {
  let component: NewAddressPage;
  let fixture: ComponentFixture<NewAddressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
