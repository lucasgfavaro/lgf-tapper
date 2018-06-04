
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapperNavComponent } from './tapper-nav.component';

describe('TapperNavComponent', () => {
  let component: TapperNavComponent;
  let fixture: ComponentFixture<TapperNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TapperNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapperNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
