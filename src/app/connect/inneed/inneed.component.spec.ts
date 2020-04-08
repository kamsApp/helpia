import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InneedComponent } from './inneed.component';

describe('InneedComponent', () => {
  let component: InneedComponent;
  let fixture: ComponentFixture<InneedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InneedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InneedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
