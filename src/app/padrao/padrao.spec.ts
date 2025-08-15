import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padrao } from './padrao';

describe('Padrao', () => {
  let component: Padrao;
  let fixture: ComponentFixture<Padrao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Padrao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Padrao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
