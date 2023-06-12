import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastilloPage } from './castillo.page';

describe('CastilloPage', () => {
  let component: CastilloPage;
  let fixture: ComponentFixture<CastilloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CastilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
