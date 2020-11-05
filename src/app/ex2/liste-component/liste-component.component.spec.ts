import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComponentComponent } from './liste-component.component';

describe('ListeComponentComponent', () => {
  let component: ListeComponentComponent;
  let fixture: ComponentFixture<ListeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
