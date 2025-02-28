/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendListPage } from './recommend-list.page';

describe('RecommendListPage', () => {
  let component: RecommendListPage;
  let fixture: ComponentFixture<RecommendListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecommendListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
