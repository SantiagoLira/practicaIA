import { Component } from '@angular/core';
import { UserInsertService } from './createusers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nick_name = '';
  full_name = '';

  constructor(private userInsertService: UserInsertService) {}

  public onSubmit() {
    if (this.nick_name === '' || this.full_name === '') {
      alert('Por favor, rellene todos los campos');
    } else {
      const formData = new FormData();
      formData.append('nick_name', this.nick_name);
      formData.append('full_name', this.full_name);
      let body = {'full_name':this.full_name,'nick_name':this.nick_name}

      this.userInsertService.postFormData(body).subscribe(
        (error) => {
          console.log(error);
        },
        (success) => {
          console.log(success);
        }
      );
    }
  }
}
