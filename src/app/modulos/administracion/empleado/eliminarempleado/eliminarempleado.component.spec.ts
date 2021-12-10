import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarempleadoComponent } from './eliminarempleado.component';

describe('EliminarempleadoComponent', () => {
  let component: EliminarempleadoComponent;
  let fixture: ComponentFixture<EliminarempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
