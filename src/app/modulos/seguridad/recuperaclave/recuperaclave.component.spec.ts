import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperaclaveComponent } from './recuperaclave.component';

describe('RecuperaclaveComponent', () => {
  let component: RecuperaclaveComponent;
  let fixture: ComponentFixture<RecuperaclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperaclaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
