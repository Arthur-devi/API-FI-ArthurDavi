import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosADsComponent } from './DadosADs.component';

describe('DadosADsComponent', () => {
  let component: DadosADsComponent;
  let fixture: ComponentFixture<DadosADsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosADsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosADsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
