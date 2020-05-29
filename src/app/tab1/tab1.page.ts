import { Component , OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoginPage } from '../login/login.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page { 

  constructor(public httpClient: HttpClient,
    public nvctrl: NavController, 
    public router: Router) {

  }

  getUsuario(){

    this.httpClient.get("http://localhost/api-moto-qr/public/api/getUsuario/1")
    .subscribe(data => {
      //(<HTMLInputElement>document.getElementById("nome")).value = data[0].nome ;
      //(<HTMLInputElement>document.getElementById("cpf")).value = data[0].cpf;
      //(<HTMLInputElement>document.getElementById("endereco")).value = data[0].endereco;
      //(<HTMLInputElement>document.getElementById("idade")).value = data[0].idade;
      //(<HTMLInputElement>document.getElementById("naturalidade")).value = data[0].naturalidade;
      //(<HTMLInputElement>document.getElementById("email")).value = data[0].email;
      //(<HTMLInputElement>document.getElementById("sangue")).value = data[0].sangue;
      //(<HTMLInputElement>document.getElementById("convenio")).value = data[0].conveniomed;
      //(<HTMLInputElement>document.getElementById("obsmed")).value = data[0].obsmed;
      //(<HTMLInputElement>document.getElementById("cont1")).value = data[0].nomecont1;
      //(<HTMLInputElement>document.getElementById("cont2")).value = data[0].nomecont1;

      (<HTMLInputElement>document.getElementById("nome")).value = 'José Augusto Nascimento' ;
      (<HTMLInputElement>document.getElementById("cpf")).value = '123.456.897-21';
      (<HTMLInputElement>document.getElementById("endereco")).value = 'Rua Um, 250 - Centro - Belo Horizonte';
      (<HTMLInputElement>document.getElementById("idade")).value = '25';
      (<HTMLInputElement>document.getElementById("naturalidade")).value = 'Sete Lagoas - MG';
      (<HTMLInputElement>document.getElementById("email")).value = 'jose.8181@aluno.una.br';
      (<HTMLInputElement>document.getElementById("sangue")).value = 'AB+';
      (<HTMLInputElement>document.getElementById("convenio")).value = 'SUS';
      (<HTMLInputElement>document.getElementById("obsmed")).value = 'Não tenho nenhuma doença crônica. Não posso tomar cloroquina pois tenho reação alérgica.';
      (<HTMLInputElement>document.getElementById("cont1")).value = 'Maria - 31 99658-7856';
      (<HTMLInputElement>document.getElementById("cont2")).value = 'José - 31 99658-7896';
     }, error => {
      console.log(error);
    });
  
  }
  
  goBack(){
    return this.router.navigateByUrl('/login');
  }

}
