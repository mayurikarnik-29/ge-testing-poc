import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Post } from './models/post.model';
import { DataService } from './data.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture;
  let component;
  let dataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    dataService = TestBed.get(DataService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should get posts'`, async(() => {
    const response: Post[] = [];
    spyOn(dataService, 'getPosts').and.returnValue(of(response))
    component.getPosts();
    fixture.detectChanges();
    expect(component.posts).toEqual(response);
  }));

});
