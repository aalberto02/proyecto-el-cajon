import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacioFormComponent } from './reservacio-form.component';

describe('ReservacioFormComponent', () => {
  let component: ReservacioFormComponent;
  let fixture: ComponentFixture<ReservacioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
