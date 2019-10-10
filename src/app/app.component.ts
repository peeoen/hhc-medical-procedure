import { Component, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cursors: Cursor[] = [
    {
      cx: 25,
      cy: 25,
      top: '10%',
      left: '10%',
    }
  ];

  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  @ViewChild('downloadLink', {static: false}) downloadLink: ElementRef;

  print() {
    html2canvas(document.querySelector('#main')).then(canvas => {
      console.log(canvas);
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      a.download = 'somefilename.jpg';
      a.click();

  });
  }

  addCursor() {
    this.cursors.push({
      cx: 25,
      cy: 25,
    });
  }

  remove(c: Cursor) {
    this.cursors = this.cursors.filter(x => x !== c);
  }
}

export class Cursor {
  top?: string;
  left?: string;
  cx?: number;
  cy?: number;
}
