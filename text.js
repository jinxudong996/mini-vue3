class ref {
  get value() {
    return "123123";
  }
  set(value) {
    console.log(value);
  }
}

let a = new ref();
console.log(a.value);
