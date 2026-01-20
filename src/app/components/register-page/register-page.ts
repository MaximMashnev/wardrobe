import { UserService } from './../../service/user-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Title } from '@angular/platform-browser';
import {Router, RouterLinkWithHref} from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [
    RouterLinkWithHref,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage implements OnInit {
  errorMessage: string = "";
  isError: boolean = false;

  form = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    repeatedPassword: new FormControl(""),
  })

  constructor (
    private router: Router,
    private TitleService: Title,
    private UserService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    // this.TitleService.setTitle("Регистрация");
  }

  ngOnInit(): void {
    if (localStorage.getItem("Bearer")) {
      this.router.navigate(['/']);
    }
  }

  checkingPasswordMatch(): boolean {
    if (this.form.value.password == this.form.value.repeatedPassword) {
      this.isError = false;
      this.errorMessage = "";
      return true;
    }
    else {
      this.isError = true;
      this.errorMessage = "Пароли не совпадают";
      return false;
    }
  }

  OnSubmit(): void {
    console.log(this.form.value);
    this.UserService.registrationUser(this.form.value.username!, this.form.value.email!, this.form.value.password!).subscribe({
      next: (loginData) => {
        console.log('Register successful');

        this.router.navigate(['/authorization']);
      },
      error: (error) => {
        this.isError = true;
        this.errorMessage = error.error.message;
        this.cdr.detectChanges();

        console.error('Login failed', error);
      }
    })
  }
}
