import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagmaqueta',
  templateUrl: './pagmaqueta.page.html',
  styleUrls: ['./pagmaqueta.page.scss'],
})
export class PagmaquetaPage implements OnInit {
  state: any;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.user = this.state.user;
      console.log(this.user);
    });
  }

  ngOnInit() {
    // Aquí puedes agregar código adicional que se ejecutará cuando se inicie la página.
  }
}
