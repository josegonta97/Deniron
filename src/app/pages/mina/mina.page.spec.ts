import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinaPage } from './mina.page';

describe('MinaPage', () => {
  let component: MinaPage;
  let fixture: ComponentFixture<MinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
