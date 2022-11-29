import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaADComponent } from './PessoaAD.component';

describe('PessoaADComponent', () => {
  let component: PessoaADComponent;
  let fixture: ComponentFixture<PessoaADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaADComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
