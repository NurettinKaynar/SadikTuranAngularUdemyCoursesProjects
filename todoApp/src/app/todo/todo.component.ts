import { Component, OnInit } from '@angular/core';
import { Model } from '../model/model';
import { TodoItem } from '../model/todoitem';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  displayAll: boolean = false;
  inputText: string = '';
  model = new Model();

  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  ngOnInit(): void {}

  // message = '';
  //addItem(txtItem:any){
  //console.log(txtItem.value)
  //}
  getName() {
    return this.model.name;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  addItem() {
    // this.message = value;
    if (this.inputText != '') {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);
      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem('items', JSON.stringify(items));
      this.inputText = '';
    } else alert('bilgi gir');
  }
  getItemsFromLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem('items');
    if (value != null) {
      items = JSON.parse(value);
    }
    return items;
  }
  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }
  getBtnClasses() {
    return {
      disabled: this.inputText.length === 0,
      'btn-secondary': this.inputText.length === 0,
      'btn-primary': this.inputText.length !== 0,
    };
  }
  onActionChange(item: TodoItem) {
    let items = this.getItemsFromLS();
    localStorage.clear();

    items.forEach((i) => {
      if (i.description == item.description) {
        i.action = item.action;
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
}
