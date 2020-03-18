import { Component} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage {

  private item: any = [];
  private item1: any = [];
  private item2: any = [];
  private item3: any = [];
  private item4: any = [];
  private item5: any = [];
  private item6: any = [];
  private item7: any = [];
  private item8: any = [];
  private item9: any = [];
  go_to(path_to_go) { this.router.navigate([path_to_go],); }
  constructor(private router: Router) {

    this.item = [
      { expanded: false },
    ];
    this.item1 = [
      { expanded: false },
    ];
    this.item2 = [
      { expanded: false },
    ];
    this.item3 = [
      { expanded: false },
    ];
    this.item4 = [
      { expanded: false },
    ];
    this.item5 = [
      { expanded: false },
    ];
    this.item6 = [
      { expanded: false },
    ];
    this.item7 = [
      { expanded: false },
    ];
    this.item8 = [
      { expanded: false },
    ];
    this.item9 = [
      { expanded: false },
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      item.expanded = true;
    }
  }

}