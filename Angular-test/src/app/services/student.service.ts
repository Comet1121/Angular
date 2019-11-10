import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private list: Array<any>;

  constructor() {
    this.list =  [
      {
        name: 'Aung Aung',
        phone: '0923452345',
        email: 'aung@gamil.com',
        address: 'kamayut yangon'
      },
      {
        name: 'Maung',
        phone: '0957294857',
        email: 'maung@gamil.com',
        address: 'kamayut yangon'
      },
      {
        name: 'Thu Zar',
        phone: '0946583823',
        email: 'thuzar@gamil.com',
        address: 'Haltan Yangon'
      }
    ];
  }

  save(s: any) {
    this.list.push(s);
  }

  getAll() {
    return this.list;
  }
}
