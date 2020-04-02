import { TestBed } from '@angular/core/testing';

import { UserInfoService } from './user-info.service';

describe('UserInfoService', () => {
  let service: UserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 + 2 and return 4', () => {
    expect(service.calculate(2, 2)).toEqual(4);
  });

  it("should add item to list", ()=>{
    const user = { username : "praveen", email : "praveen@example.com", phone : 3424424234 }
    service.add(user);
    const observe = service.getList();
    observe.subscribe((response : any)=>{
      expect(response[0]).toEqual(user);
    })
    
  })

});
