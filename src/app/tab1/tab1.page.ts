import { Component , OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page { 

  constructor(public httpClient: HttpClient,
    public nvctrl: NavController, 
    public router: Router, public alertController: AlertController) {
      this.getUsuario(1);
  }

  async alert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      message: 'Usuário editado com sucesso!',
      buttons: ['OK']
    });
    await alert.present();
  }

  getUsuario(usuario){
  
    this.httpClient.get('http://motoqr-com-br.umbler.net/public/api/getUsuario/'+usuario+'')
    .subscribe(data => {
      if(document.getElementById("id") != null &&
      document.getElementById("nome") != null &&
      document.getElementById("cpf") != null &&
      document.getElementById("endereco") != null &&
      document.getElementById("idade") != null &&
      document.getElementById("naturalidade") != null &&
      document.getElementById("email") != null &&
      document.getElementById("sangue") != null &&
      document.getElementById("convenio") != null &&
      document.getElementById("obsmed") != null &&
      document.getElementById("cont1") != null &&
      document.getElementById("cont2") != null) {
      (<HTMLInputElement>document.getElementById("id")).value = data.id;
      (<HTMLInputElement>document.getElementById("nome")).value = data.nome ;
      (<HTMLInputElement>document.getElementById("cpf")).value = data.cpf;
      (<HTMLInputElement>document.getElementById("endereco")).value = data.endereco;
      (<HTMLInputElement>document.getElementById("idade")).value = data.idade;
      (<HTMLInputElement>document.getElementById("naturalidade")).value = data.naturalidade;
      (<HTMLInputElement>document.getElementById("email")).value = data.email;
      (<HTMLInputElement>document.getElementById("sangue")).value = data.sangue;
      (<HTMLInputElement>document.getElementById("convenio")).value = data.conveniomed;
      (<HTMLInputElement>document.getElementById("obsmed")).value = data.obsmed;
      (<HTMLInputElement>document.getElementById("cont1")).value = data.nomecont1 + ' - ' + data.telcont1;
      (<HTMLInputElement>document.getElementById("cont2")).value = data.nomecont2 + ' - ' + data.telcont2; 
      }    
    }, error => {
      console.log(error);
    });
  }

  editUsuario(){
    if(document.getElementById("id") != null &&
    document.getElementById("nome") != null &&
    document.getElementById("cpf") != null &&
    document.getElementById("endereco") != null &&
    document.getElementById("idade") != null &&
    document.getElementById("naturalidade") != null &&
    document.getElementById("email") != null &&
    document.getElementById("sangue") != null &&
    document.getElementById("convenio") != null &&
    document.getElementById("obsmed") != null &&
    document.getElementById("cont1") != null &&
    document.getElementById("cont2") != null ){
    var postData = {
      id: (<HTMLInputElement>document.getElementById("id")).value,
      nome: (<HTMLInputElement>document.getElementById("nome")).value,
      cpf: (<HTMLInputElement>document.getElementById("cpf")).value,
      endereco: (<HTMLInputElement>document.getElementById("endereco")).value,
      idade: (<HTMLInputElement>document.getElementById("idade")).value,
      naturalidade: (<HTMLInputElement>document.getElementById("naturalidade")).value,
      sangue: (<HTMLInputElement>document.getElementById("sangue")).value,
      conveniomed: (<HTMLInputElement>document.getElementById("convenio")).value,
      obsmed: (<HTMLInputElement>document.getElementById("obsmed")).value,
    };
    console.log(postData);
     this.httpClient.post("http://motoqr-com-br.umbler.net/public/api/edit", postData)
     .subscribe(data => {
      }, error => {
        this.alert();
     }); 
    }
  }
  
  goBack(){
    return this.router.navigateByUrl('/login');
  }

}
