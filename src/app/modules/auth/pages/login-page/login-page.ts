import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Router, RouterLinkWithHref} from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Auth } from '../../services/auth';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  imports: [
    RouterLinkWithHref,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit{
  errorMessage: string = "";
  isError: boolean = false;

  form = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })

  constructor (
    private router: Router,
    private TitleService: Title,
    private Auth: Auth,
    private cdr: ChangeDetectorRef
  ) {
    // this.TitleService.setTitle("Авторизация");
  }

  ngOnInit(): void {
    if (localStorage.getItem("Bearer")) {
      this.router.navigate(['/']);
    }
  }

  OnSubmit(): void {
    this.Auth.authorizationUser(this.form.value.email!, this.form.value.password!).subscribe({
      next: (loginData) => {
        localStorage.setItem("Bearer", loginData.token);
        localStorage.setItem("userId", loginData.data.id);
        localStorage.setItem("role", loginData.data.role);
        console.log('login successful');

        this.router.navigate(['/']);
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
