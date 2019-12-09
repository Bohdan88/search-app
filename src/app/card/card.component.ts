import {Component, Input} from '@angular/core';
import {IRepository} from "../services/github.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input()
  public item: IRepository;

}
