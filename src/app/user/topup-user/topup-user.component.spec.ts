import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupUserComponent } from './topup-user.component';

describe('TopupUserComponent', () => {
  let component: TopupUserComponent;
  let fixture: ComponentFixture<TopupUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
