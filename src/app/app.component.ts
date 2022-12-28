import { Component, OnInit } from '@angular/core';
import { PasswordService, PasswordScoreInterface } from './services/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'password-checker';
  password = '';
  minPasswordLength = 8;
  passwordStrength: PasswordScoreInterface = {
    hint: '',
    colors: []
  };

  constructor(private passwordService: PasswordService) {  }

  ngOnInit(): void {
    this.updatePasswordStrength();
  }

  onPasswordChanged(newValue: string): void {
    this.password = newValue;
    this.updatePasswordStrength();
  }

  updatePasswordStrength(): void {
    this.passwordStrength = this.passwordService.evaluateStrength(this.password, this.minPasswordLength);
  }
}
