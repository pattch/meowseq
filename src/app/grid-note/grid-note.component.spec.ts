import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNoteComponent } from './grid-note.component';

describe('GridNoteComponent', () => {
  let component: GridNoteComponent;
  let fixture: ComponentFixture<GridNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
