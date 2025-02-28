/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedAddressPage } from './saved-address.page';

describe('SavedAddressPage', () => {
  let component: SavedAddressPage;
  let fixture: ComponentFixture<SavedAddressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SavedAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
