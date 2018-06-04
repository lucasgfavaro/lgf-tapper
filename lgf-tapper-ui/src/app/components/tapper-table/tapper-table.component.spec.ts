
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapperTableComponent } from './tapper-table.component';

describe('TapperTableComponent', () => {
  let component: TapperTableComponent;
  let fixture: ComponentFixture<TapperTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TapperTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapperTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
