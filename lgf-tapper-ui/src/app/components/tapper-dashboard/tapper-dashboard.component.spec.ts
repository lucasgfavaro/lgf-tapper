
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapperDashboardComponent } from './tapper-dashboard.component';

describe('TapperDashboardComponent', () => {
  let component: TapperDashboardComponent;
  let fixture: ComponentFixture<TapperDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TapperDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapperDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
