import { TestingDirective } from './testing.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
    template : "<div><p color>Hello World!!!</p></div>"
})
class TestComponent
  {

  }

describe('TestingDirective', () => {

  let component : TestComponent;
  let fixture : ComponentFixture<TestComponent>

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations : [TestComponent, TestingDirective]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it("Should load component", ()=>{
    expect(component).toBeTruthy();
  })

  it("should be in red color", ()=>{
    const debug : HTMLElement = fixture.debugElement.nativeElement;
    const p : HTMLElement = debug.querySelector("p");
    fixture.detectChanges()
    expect(p.style.color).toEqual("red");
  })

  // it('should create an instance', () => {
  //   const directive = new TestingDirective();
  //   expect(directive).toBeTruthy();
  // });
});
