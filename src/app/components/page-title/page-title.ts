import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable()
export class ComponentPageTitle {
  _title = 'Medical Mision';

  get title(): string { return this._title; }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | `;
    }
    this.bodyTitle.setTitle(`${title}MINDO FUTURES`);
  }

  constructor(private bodyTitle: Title) { }

}
