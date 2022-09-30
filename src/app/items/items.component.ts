import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  img!: string;
  name!: string;
  count!: number;
  label!: string;
  type!: string;

  ngOnInit(): void {
    this.img = "../assets/images/items/cartecredit.png";
    this.name = "Carte de crédit";
    this.count = 1;
    this.label = "cartecredit";
    this.type = "items"
  }
}
