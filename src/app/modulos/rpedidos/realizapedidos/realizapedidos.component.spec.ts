import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizapedidosComponent } from './realizapedidos.component';

describe('RealizapedidosComponent', () => {
  let component: RealizapedidosComponent;
  let fixture: ComponentFixture<RealizapedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizapedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizapedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
