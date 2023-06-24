import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private dishes = [
    {
      name: 'Smashed Avo',
      image: 'assets/menu/1.png'
    },
    {
      name: 'Yin & Yang',
      image: 'assets/menu/2.png'
    },
    {
      name: 'Pancakes',
      image: 'assets/menu/3.png'
    },
    {
      name: 'Huevos Rancheros',
      image: 'assets/menu/4.png'
    },
    {
      name: 'Rancheros (Tofu)',
      image: 'assets/menu/5.png'
    },
    {
      name: 'Breakkie Roll',
      image: 'assets/menu/6.png'
    },
    {
      name: 'Breakkie Roll',
      image: 'assets/menu/7.png'
    },
    {
      name: 'Burrito',
      image: 'assets/menu/8.png'
    }
  ];

  constructor() { }

  getDishes(): Observable<any[]> {
    return of(this.dishes);
  }

}
