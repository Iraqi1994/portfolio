import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplayerSection } from './teamplayer-section';

describe('TeamplayerSection', () => {
  let component: TeamplayerSection;
  let fixture: ComponentFixture<TeamplayerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamplayerSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamplayerSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
