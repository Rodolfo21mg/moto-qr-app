import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public httpClient: HttpClient,public nvctrl: NavController, public router: Router) { }

  ngOnInit() {
  }

  cadastro(){
    return this.router.navigateByUrl('/cadastro');
  }

  validateLogin() {

    var postData = {
       email: (<HTMLInputElement>document.getElementById("usuario")).value,
       senha: (<HTMLInputElement>document.getElementById("senha")).value,
    };

    return this.router.navigateByUrl('/tabs/tab1');

    /*
      this.httpClient.post("http://localhost/api-moto-qr/public/api/login", postData)
      .subscribe(data => {
          return this.router.navigateByUrl('/tabs');
       }, error => {
        return this.router.navigateByUrl('/tabs');
      });
      */
  }

}
