import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.scss']
})
export class PasswordStrengthBarComponent implements OnInit {
  @Input() sectionColors: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
