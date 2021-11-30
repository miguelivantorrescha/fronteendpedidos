import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionpersonasComponent } from './creacionpersonas.component';

describe('CreacionpersonasComponent', () => {
  let component: CreacionpersonasComponent;
  let fixture: ComponentFixture<CreacionpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionpersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
