import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCSubBComponent } from './module-c-sub-b.component';

describe('ModuleCSubBComponent', () => {
  let component: ModuleCSubBComponent;
  let fixture: ComponentFixture<ModuleCSubBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleCSubBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCSubBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
