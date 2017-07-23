import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCSubAComponent } from './module-c-sub-a.component';

describe('ModuleCSubAComponent', () => {
  let component: ModuleCSubAComponent;
  let fixture: ComponentFixture<ModuleCSubAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleCSubAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCSubAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
