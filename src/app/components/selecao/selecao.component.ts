import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.scss'],
})
export class SelecaoComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 1;

  selectedItems: Set<string> = new Set();

  constructor() {}

  ngOnInit(): void {}

  disable(option: string) {
    return (
      this.selectedItems.size >= this.escolhaAte &&
      !this.selectedItems.has(option)
    );
  }

  onSelectItem(item: string, event: any) {
    if (event.target!.checked) {
      this.selectedItems.add(item);
    } else {
      this.selectedItems.delete(item);
    }
  }
}
