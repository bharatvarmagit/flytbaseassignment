import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogeleMapComponent } from './googele-map.component';

describe('GoogeleMapComponent', () => {
  let component: GoogeleMapComponent;
  let fixture: ComponentFixture<GoogeleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogeleMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogeleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
