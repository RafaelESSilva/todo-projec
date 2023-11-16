import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudoBottonDeleteAlllComponent } from './tudo-botton-delete-alll.component';

describe('TudoBottonDeleteAlllComponent', () => {
  let component: TudoBottonDeleteAlllComponent;
  let fixture: ComponentFixture<TudoBottonDeleteAlllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TudoBottonDeleteAlllComponent]
    });
    fixture = TestBed.createComponent(TudoBottonDeleteAlllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
