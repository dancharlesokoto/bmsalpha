import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupSubadminComponent } from './topup-subadmin.component';

describe('TopupSubadminComponent', () => {
  let component: TopupSubadminComponent;
  let fixture: ComponentFixture<TopupSubadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupSubadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupSubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
