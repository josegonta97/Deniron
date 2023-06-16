import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaderaPage } from './madera.page';

describe('MaderaPage', () => {
  let component: MaderaPage;
  let fixture: ComponentFixture<MaderaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
