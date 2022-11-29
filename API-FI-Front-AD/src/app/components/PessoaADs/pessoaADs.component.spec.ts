import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaADsComponent } from './pessoaADs.component';

describe('PessoaADsComponent', () => {
  let component: PessoaADsComponent;
  let fixture: ComponentFixture<PessoaADsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaADsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaADsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
