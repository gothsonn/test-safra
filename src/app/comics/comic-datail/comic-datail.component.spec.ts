import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDatailComponent } from './comic-datail.component';

describe('ComicDatailComponent', () => {
  let component: ComicDatailComponent;
  let fixture: ComponentFixture<ComicDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
