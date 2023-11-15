import { TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { StoriesFeedListComponent } from '../components/stories-feed-list/stories-feed-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoriesFeedModule } from '../stories-feed.module';

describe('MainPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoriesFeedModule
      ],
      declarations: [
        MainPageComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(StoriesFeedListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Stories Feed'`, () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Stories Feed');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Stories Feed');
  });
});
