import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoginPage } from '../login/login.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public httpClient: HttpClient,public nvctrl: NavController, public router: Router) { }

  ngOnInit() {
  }

  goBack(){
    return this.router.navigateByUrl('/login');
  }

  store() {

    var postData = {
       nome: (<HTMLInputElement>document.getElementById("nome")).value,
       cpf: (<HTMLInputElement>document.getElementById("cpf")).value,
       endereco: (<HTMLInputElement>document.getElementById("endereco")).value,
       idade: (<HTMLInputElement>document.getElementById("idade")).value,
       naturalidade: (<HTMLInputElement>document.getElementById("naturalidade")).value,
       sangue: (<HTMLInputElement>document.getElementById("sangue")).value,
       conveniomed: (<HTMLInputElement>document.getElementById("conveniomed")).value,
       obsmed: (<HTMLInputElement>document.getElementById("obsmed")).value,
       nomecont1: (<HTMLInputElement>document.getElementById("nomecont1")).value,
       telcont1: (<HTMLInputElement>document.getElementById("telcont1")).value,     
       nomecont2: (<HTMLInputElement>document.getElementById("nomecont2")).value,
       telcont2: (<HTMLInputElement>document.getElementById("telcont2")).value,
       email: (<HTMLInputElement>document.getElementById("email")).value,
       senha: (<HTMLInputElement>document.getElementById("senha")).value,
    };

      this.httpClient.post("http://localhost/api-moto-qr/public/api/store", postData)
      .subscribe(data => {
        console.log(data);
       }, error => {
        return this.router.navigateByUrl('/login');
      });
  }

}


