import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continuar',
  templateUrl: './continuar.page.html',
  styleUrls: ['./continuar.page.scss'],
})
export class ContinuarPage implements OnInit {

  constructor(private router: Router) { }
  go_to(path_to_go) { this.router.navigate([path_to_go],); }

  ngOnInit() {
  }

}
