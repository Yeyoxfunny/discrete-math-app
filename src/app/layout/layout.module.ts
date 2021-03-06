import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class LayoutModule { }
