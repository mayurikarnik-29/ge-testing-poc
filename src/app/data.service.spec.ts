import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DataService } from './data.service';
import { mockPosts } from './models/post.mock';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    })
      .compileComponents();
  }));

  afterEach(() => {
    httpMock.verify();
  })
  beforeEach(() => {

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(DataService);
  });

  it('should retrieve posts', () => {
    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(3);
      expect(posts).toEqual(mockPosts);
    });
    const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);
    expect(request.request.method).toBe('GET');
    request.flush(mockPosts);
  });
});
