import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebanuevoPage } from './pruebanuevo.page';

describe('PruebanuevoPage', () => {
  let component: PruebanuevoPage;
  let fixture: ComponentFixture<PruebanuevoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruebanuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
