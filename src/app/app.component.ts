import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'User UI';
  private apiUrl = 'https://randomuser.me/api/';
  data: any = {};
  faCoffee = faCoffee;

  constructor(private http: Http) {
    console.log('Hello');
    this.getUserInfo();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getUserInfo() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
