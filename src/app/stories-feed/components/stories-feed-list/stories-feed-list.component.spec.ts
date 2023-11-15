import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesFeedListComponent } from './stories-feed-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { By } from '@angular/platform-browser';
import { Story } from '../../interfaces/story';

describe('StoriesFeedListComponent', () => {
  let component: StoriesFeedListComponent;
  let fixture: ComponentFixture<StoriesFeedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TableModule
      ],
      declarations: [ StoriesFeedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesFeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render search bar', () => {
    const fixture = TestBed.createComponent(StoriesFeedListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.p-inputtext')?.getAttribute('placeholder')).toContain('Search story');
  });

  it('should render paginator', () => {
    const fixture = TestBed.createComponent(StoriesFeedListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.p-paginator-current')?.textContent).toContain('Showing');
  });

  it('should render table headers', () => {
    const fixture = TestBed.createComponent(StoriesFeedListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.p-datatable-thead')?.childNodes.item(0).textContent).toContain('Title');
    expect(compiled.querySelector('.p-datatable-thead')?.childNodes.item(0).textContent).toContain('Link');
  });

  it('should render one or more stories', () => {
    const fixture = TestBed.createComponent(StoriesFeedListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.p-datatable-tbody')?.childNodes.length).toBeGreaterThan(0);
  });

  it('should render no stories found message', () => {

    const fixture = TestBed.createComponent(StoriesFeedListComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();

    const nameInput: HTMLInputElement = compiled.querySelector('.p-inputtext')!;
    nameInput.value = 'Test story title';
    nameInput.dispatchEvent(new Event('input'));

    expect(compiled.querySelectorAll('.p-datatable-tbody tr > td').item(0).textContent).toContain('No stories found.');
    expect(compiled.querySelector('.p-paginator-current')?.textContent).toContain('Showing 0 to 0 of 0 entries');
  });
});
