import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CiudadPage } from './ciudad.page';

describe('CiudadPage', () => {
  let component: CiudadPage;
  let fixture: ComponentFixture<CiudadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CiudadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
