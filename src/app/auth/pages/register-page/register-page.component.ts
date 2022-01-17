import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/core/interfaces/login-data.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }
  register(data: LoginData) {
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
