import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple'; 
import { FloatingconfiguratorComponent } from '../../../../core/layout/components/floatingconfigurator/floatingconfigurator.component';
import { LayoutService } from '../../../../core/services/layout/layout.service';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, FloatingconfiguratorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    username: string = '';
    password: string = '';
    checked: boolean = false;

    constructor(private authService: AuthService, private router: Router){}

    onSubmit(){
      if(this.authService.login(this.username, this.password)){
        this.router.navigate(['/dashboard']);
      } else {
        alert('Erişim reddedildi. Lütfen bilgilerinizi kontrol edip tekrar deneyin!');
      }
    }
}
