import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSweetComponent } from './new-sweet.component';

describe('NewSweetComponent', () => {
  let component: NewSweetComponent;
  let fixture: ComponentFixture<NewSweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
