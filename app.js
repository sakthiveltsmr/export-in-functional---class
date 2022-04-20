// //Named export
// import { Employee, demo } from "./export.js";

// Employee("sakthi");

// let p = new demo(24);

// p.display();

//default export

// import { Employee1 as e } from "./export.js";
import { demo as d } from "./export.js";
// Employee1("sadeesh");
// e("sakthi");

let p = new d(23);

p.display();
