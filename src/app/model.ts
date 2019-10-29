export class Model {
  user: string;
  items: ToDoItems[];

  constructor() {
    this.user = "Sinan Kaya";
    this.items = [
        new ToDoItems("Not 1",true),
        new ToDoItems("Not 2",false),
        new ToDoItems("Not 3",true),
        new ToDoItems("Not 4",false),
        new ToDoItems("Not 5",false),

    ];
  }
}

export class ToDoItems {
  description: string;
  action: boolean;

  constructor(description: string, action: boolean) {
    this.action = action;
    this.description = description;
  }
}
