import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SolucionesEmpresarialesProyect';

  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.userService.register(null).subscribe();
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    home(){
      this.router.navigate(['/']);
    }
}
