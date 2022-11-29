import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosADComponent } from './DadosAD.component';

describe('DadosADComponent', () => {
  let component: DadosADComponent;
  let fixture: ComponentFixture<DadosADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosADComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
