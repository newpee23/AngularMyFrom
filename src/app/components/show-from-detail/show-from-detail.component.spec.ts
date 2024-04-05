import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFromDetailComponent } from './show-from-detail.component';

describe('ShowFromDetailComponent', () => {
  let component: ShowFromDetailComponent;
  let fixture: ComponentFixture<ShowFromDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFromDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFromDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
