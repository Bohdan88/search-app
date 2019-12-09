import {Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {GithubService} from "../services/github.service";


export interface Grid {
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.sass'],
})

export class BrowseComponent {
  constructor() {
  }

  @ViewChild('input', { static: false}) input: ElementRef;

  @Output()
  onInput = new EventEmitter<string>();

  onSearch(event: MouseEvent): void {
    // console.log(this.input.nativeElement.value)
    this.onInput.emit(this.input.nativeElement.value);
  }


  grids: Grid[] = [
    {text: 'First', cols: 4, rows: 1 },
  ];

}
