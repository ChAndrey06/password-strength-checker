import { Injectable } from '@angular/core';

export interface PasswordScoreInterface {
  colors: Array<string>,
  hint: string
}

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  evaluateStrength(password: string, minLength: number): PasswordScoreInterface {
    const scoreTemplates = {
      'empty': {
        colors: ['gray', 'gray', 'gray'],
        hint: 'No password'
      },
      'short': {
        colors: ['red', 'red', 'red'],
        hint: `Too short, at least ${minLength} characters` 
      },
      'easy': {
        colors: ['red', 'gray', 'gray'],
        hint: 'Easy, include at least two character types (letters, digits, symbols)'
      },
      'medium': {
        colors: ['yellow', 'yellow', 'gray'],
        hint: 'Medium, better include all three character types (letters, digits, symbols)'
      },
      'strong': {
        colors: ['green', 'green', 'green'],
        hint: 'Strong'
      }
    }

    password = password.trim();

    if (password.length == 0) return scoreTemplates.empty;
    if (password.length < minLength) return scoreTemplates.short;
    
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const letters = /[A-z]/;
    const digits = /[0-9]/;

    const level = [specialChars, letters, digits].reduce((a, b) => {
      return a + (b.test(password) ? 1 : 0);
    }, 0);

    return level == 1 ? 
      scoreTemplates.easy : level == 2 ? 
      scoreTemplates.medium : scoreTemplates.strong;
  }
}