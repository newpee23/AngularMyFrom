import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFunctionComponent } from './btn-function.component';

describe('BtnFunctionComponent', () => {
  let component: BtnFunctionComponent;
  let fixture: ComponentFixture<BtnFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnFunctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
