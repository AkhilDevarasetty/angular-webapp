import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-webapp';
  loginForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
    this.router.navigate(["login"]);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    togglePassword.addEventListener('click', (ele) => {
      let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      let src = togglePassword.getAttribute("src") === '/assets/images/eye.svg' ? '/assets/images/eye-clicked.svg' : '/assets/images/eye.svg';
      togglePassword.setAttribute('src', src);
    });
  }

  submittLoginForm(form) {
    console.log(form.value.username);
  }


}
