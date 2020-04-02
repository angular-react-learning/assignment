import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing"
import { FormsModule } from "@angular/forms"
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser"


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let username  : DebugElement;
  let password  : DebugElement;
  let submit    : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule, FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    username = fixture.debugElement.query(By.css(".username"))
    password = fixture.debugElement.query(By.css(".password"))
    submit = fixture.debugElement.query(By.css(".submit"))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button', () => {
    username.nativeElement.value = "praveen";
    password.nativeElement.value = "praveen";
    fixture.detectChanges();
    expect(submit.nativeElement.disabled).toBeFalsy();
  });

  it('should not enable button', () => {
    username.nativeElement.value = "praveen";
    password.nativeElement.value = "";
    fixture.detectChanges();
    expect(submit.nativeElement.disabled).toBeFalsy();
  });
});
