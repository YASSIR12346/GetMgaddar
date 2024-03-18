import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexercicesComponent } from './listexercices.component';

describe('ListexercicesComponent', () => {
  let component: ListexercicesComponent;
  let fixture: ComponentFixture<ListexercicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListexercicesComponent]
    });
    fixture = TestBed.createComponent(ListexercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
