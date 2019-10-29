import { Component } from "@angular/core";
import { Model, ToDoItems } from "./model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  model = new Model();
  isDisplay: boolean = false;

  getItemSize() {
    return this.model.items.length;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    } else {
      return this.model.items.filter(a => !a.action);
    }
  }

  addNewItem(value: string) {
    if (value != "") {
      this.model.items.push(new ToDoItems(value, false));
    }
  }
}
