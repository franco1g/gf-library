import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionTitleComponent } from './section-title.component';

describe('SectionTitleComponent', () => {
  let component: SectionTitleComponent;
  let fixture: ComponentFixture<SectionTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionTitleComponent]
    });
    fixture = TestBed.createComponent(SectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
