import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public httpClient: HttpClient,public nvctrl: NavController, public router: Router
    ,public alertController: AlertController) { }

  ngOnInit() {
  }

  cadastro(){
    return this.router.navigateByUrl('/cadastro');
  }

  async alert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      message: 'Usuário ou Senha inválidos!',
      buttons: ['OK']
    });
    await alert.present();
  }

  validateLogin() {

    var postData = {
       email: (<HTMLInputElement>document.getElementById("usuario")).value,
       senha: (<HTMLInputElement>document.getElementById("senha")).value,
    };
      this.httpClient.post("http://motoqr-com-br.umbler.net/public/api/login", postData)
      .subscribe(data => {
          this.router.navigateByUrl('/');
       }, error => {
          this.alert();
      });
    
  }

}
