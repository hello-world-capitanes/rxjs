import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { SectionItem } from '../models/section-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _menu: MenuItem[];
  private _sections: SectionItem[];

  constructor() {



    const creacionales = [
      new MenuItem('of',         '/of'),
      new MenuItem('from',       '/from'),
      new MenuItem('fromEvent',      '/fromEvent'),
      new MenuItem('EMPTY',      '/empty'),
      new MenuItem('defer',      '/defer'),
      new MenuItem('throwError', '/throwError'),
    ];

    const filtrado = [
      new MenuItem('filter', '/filter'),
      new MenuItem('distinct', '/distinct')
    ]
    const transformacion = [new MenuItem('map', '/map')]
    const combinacion = [new MenuItem('concatAll', '/concatAll')];
    const gestionErrores = [new MenuItem('catchError', '/catchError')];
    const difusion = [new MenuItem('multicast', '/multicast')];
    const operacionales = [new MenuItem('tap', '/tap')]

    this._menu = [
      ...creacionales,
      ...filtrado,
      ...transformacion,
      ...combinacion,
      ...gestionErrores,
      ...difusion,
      ...operacionales];

    this._sections = [
      new SectionItem('Creación', creacionales),
      new SectionItem('Filtrado', filtrado),
      new SectionItem('Transformación', transformacion),
      new SectionItem('Combinación', combinacion),
      new SectionItem('Gestión errores', gestionErrores),
      new SectionItem('Difusión', difusion),
      new SectionItem('Operacionales', operacionales)
    ]
  }

  get menu(): MenuItem[] {
    return this._menu;
  }

  get sections(): SectionItem[] {
    return this._sections;
  }

}
