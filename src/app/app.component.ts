import { Component } from '@angular/core';
import ngForm from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'template-forms';

  userdetails: any = {
    fname: '',
    email: '',
    pwd: '',
    cpwd: '',
  };

  handleSubmit(details: any) {
    console.log(details.value);
    this.userdetails = {
      fname: details.value.fname,
      email: details.value.email,
      pwd: details.value.pwd,
      cpwd: details.value.cpwd,
    };
    details.reset();
  }
}
