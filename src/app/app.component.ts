import {Component, OnInit} from '@angular/core';
import {GithubService, IRepository} from "./services/github.service";
import {Observable} from 'rxjs';
import {InitialNavigation} from "@angular/router/src/router_module";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {

  public items: IRepository[] = [];
  public madeSearch: boolean = false;
  public emptyValue: boolean = false;
  public searchedItem: '';
  public spinnerOnInit: boolean = true;
  public found: boolean = true;

  constructor(
    private githubService: GithubService
  ) {
  }

  public search(value) {
    this.emptyValue = value === '' ? true : false
    this.searchedItem = value;
    this.items = [];
    this.githubService.search(value).subscribe(data => {
      this.madeSearch = true;
      this.items = data.items;
      this.found = data.items.length === 0 ? false : true;
    });
  }

  ngOnInit(): void {
    setTimeout( ()=> this.spinnerOnInit = false, 1000)
  }
}
