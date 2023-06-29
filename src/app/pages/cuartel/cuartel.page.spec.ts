import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuartelPage } from './cuartel.page';

describe('CuartelPage', () => {
  let component: CuartelPage;
  let fixture: ComponentFixture<CuartelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuartelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
