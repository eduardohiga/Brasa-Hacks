import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  constructor(private router: Router) { }
  go_to(path_to_go) { this.router.navigate([path_to_go],); }

  ngOnInit() {
  }

}
