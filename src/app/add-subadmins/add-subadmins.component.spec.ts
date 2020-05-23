import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubadminsComponent } from './add-subadmins.component';

describe('AddSubadminsComponent', () => {
  let component: AddSubadminsComponent;
  let fixture: ComponentFixture<AddSubadminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubadminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
