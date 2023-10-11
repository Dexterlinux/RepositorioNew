import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  user = {
    usuario: '',
    password: '',
  };
  public campo = '';
  public recordarContrasena = false;

  async iniciarSesion() {
    console.log(this.user);
    if (this.user.usuario !== '' && this.user.password !== '') {
      this.campo = 'Usuario Existente';
      if (this.recordarContrasena) {
        console.log('Contraseña recordada');
        // Agrega aquí la lógica para recordar la contraseña, como almacenarla en una cookie o localStorage
      }
    } else {
      this.campo = 'Usuario no Existe';
    }
  }

  public alertButtons = ['OK'];

  GoPagmaqueta() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/pagmaqueta'], navigationExtras);
  }
}
