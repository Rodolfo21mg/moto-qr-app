import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private http: HttpClient) {}

  sendPostRequest() {

    this.http.get('http://localhost/api-moto-qr/public/api/index').subscribe((response) => {
    console.log(response);
    });
  
  }

}


