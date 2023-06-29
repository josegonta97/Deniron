import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarreraPage } from './barrera.page';

describe('BarreraPage', () => {
  let component: BarreraPage;
  let fixture: ComponentFixture<BarreraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BarreraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
