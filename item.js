const { NotFoundError } = require("./expressError");
const db = require("./fakeDb");

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    // keep track of all items
    // push all items into fakeDb array
  }

  static addNewItem() {
    // name?
    // price?
  }

  static listAll() {
    // return db items
  }
  

  static searchItem(name) {
    // find item by name 
    // if not found throw error
  }

  static updateItem(name, data?) {
    // find item by name 
    // if not found throw error
    // reassign name
    // reassign price
    // return updated item
  }

  static deleteItem(name) {
    // find item by name
    // if not found throw error
    // delete item 
  }


  module.exports = Item;  