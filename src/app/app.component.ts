import { Component } from '@angular/core';
import ngForm from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-forms';

  handleSubmit(details: any) {
    alert("Details submitted successfully!");
    console.log(details.value);
    details.reset();
  }
}