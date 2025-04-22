/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.ToDo = [];
  }
  add(task){
     this.ToDo.push(task);
  }
  remove(indexOfTodo){
    this.ToDo = this.ToDo.filter((task) => (task !== this.ToDo[indexOfTodo]));
  }
  update(index, updatedTodo){
    if(!this.ToDo[index]){
      return ;
    }
    this.ToDo[index] = updatedTodo;
  }
  getAll(){
    return this.ToDo
  }
  get(indexOfTodo){
    if(this.ToDo[indexOfTodo] === undefined){
      return null
    }
    return this.ToDo[indexOfTodo]
  }
  clear(){
    this.ToDo = [];
  }

}

const tasks = new Todo();
tasks.add("Eat");
tasks.add("food");
tasks.add("code");
console.log(tasks.getAll());
tasks.remove(1);
console.log(tasks.getAll());
tasks.update(3, "Sleep");
console.log(tasks.getAll());
console.log(tasks.get(0));
tasks.clear();
console.log(tasks.getAll());

module.exports = Todo;
