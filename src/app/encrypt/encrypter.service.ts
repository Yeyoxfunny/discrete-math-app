import { Injectable } from '@angular/core';

const MIN_LETTER = 32;
const MAX_LETTER = 65535;
const SHIFT = 10;

@Injectable()
export class EncrypterService {

  constructor() { }

  encrypt(plaintText: string): string {
    let encryptedText = '';
    for (let i = 0; i < plaintText.length; i++) {
      const shiftedLetter = this.shift(plaintText.charCodeAt(i));
      encryptedText += String.fromCharCode(shiftedLetter);
    }
    return encryptedText;
  }

  private shift(charCode: number): number {
    return MIN_LETTER + ((charCode - MIN_LETTER + SHIFT) % MAX_LETTER);
  }

  decrypt(encryptedText: string): string {
    let plaintText = '';
    for (let i = 0; i < encryptedText.length; i++) {
      const unshiftedLetter = this.unshift(encryptedText.charCodeAt(i));
      plaintText += String.fromCharCode(unshiftedLetter);
    }
    return plaintText;
  }

  private unshift(charCode: number): number {
    return MIN_LETTER + ((charCode - MIN_LETTER - SHIFT) % MAX_LETTER);
  }

}
