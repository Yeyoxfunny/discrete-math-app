import { Component, OnInit } from '@angular/core';
import { EncrypterService } from './encrypter.service';

@Component({
  selector: 'app-encrypt',
  templateUrl: 'encrypt.component.html',
  providers: [EncrypterService]
})

export class EncryptComponent implements OnInit {

  input: string;
  output = '';

  constructor(private encrypterService: EncrypterService) { }

  ngOnInit() {
  }

   cifrar() {
     this.output = this.encrypterService.encrypt(this.input);
   }

   descifrar() {
     this.output = this.encrypterService.decrypt(this.input);
   }
}
