import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwuComponent } from './wwu.component';

describe('WwuComponent', () => {
  let component: WwuComponent;
  let fixture: ComponentFixture<WwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
