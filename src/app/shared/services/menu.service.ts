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
    ];

    const transformacion = [
      new MenuItem('map', '/map'),
      new MenuItem('mapTo', '/mapTo'),
      new MenuItem('buffer', '/buffer'),
      new MenuItem('concatMap', '/concatMap'),
      new MenuItem('mergeMap', '/mergeMap'),
      new MenuItem('swicthMap', '/switchMap'),
      new MenuItem('scan', '/scan'),
      new MenuItem('pluck', '/pluck'),
    ];

    const filtrado = [
      new MenuItem('filter', '/filter'),
      new MenuItem('distinct', '/distinct')
    ];
    const combinacion = [new MenuItem('concatAll', '/concatAll')];
    const gestionErrores = [new MenuItem('catchError', '/catchError')];
    const difusion = [new MenuItem('multicast', '/multicast')];
    const operacionales = [new MenuItem('tap', '/tap')];

    this._menu = [
      ...creacionales,
      ...transformacion,
      ...filtrado,
      ...combinacion,
      ...gestionErrores,
      ...difusion,
      ...operacionales];

    this._sections = [
      new SectionItem('Creación', creacionales),
      new SectionItem('Transformación', transformacion),
      new SectionItem('Filtrado', filtrado),
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
