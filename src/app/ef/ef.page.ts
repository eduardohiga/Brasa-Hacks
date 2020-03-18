import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ef',
  templateUrl: './ef.page.html',
  styleUrls: ['./ef.page.scss'],
})
export class EfPage implements OnInit {

  constructor(private router: Router) { }
  go_to(path_to_go) { this.router.navigate([path_to_go],); }

  ngOnInit() {
  }

}
