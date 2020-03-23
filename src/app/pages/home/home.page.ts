import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UserService]
})
export class HomePage {
  image = new Image();
  user: User;
  constructor(
    public userService:UserService,
    private router:Router
  ) {
    this.image.src = "../../assets/icon/logo.png";
    this.user = new User('','');
  }

  login(){
    this.userService.login(this.user)
    .then(response => {

        console.log('Response recieved:');
        console.log(response);

        let data = response.data;
        if(data == 'failed'){
          console.log('Error contraseña o usuario incorrecto');
        }else{
          console.log('Login exitoso');
          this.router.navigateByUrl('/menu');
        }
      }
    );
  }
  
}
