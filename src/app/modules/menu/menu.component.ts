import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu!: any;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getDishes().subscribe(menu => {
      this.menu = menu;
      console.log(menu);
    })
  }
}
