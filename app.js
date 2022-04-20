//Named export
import { Employee, demo } from "./export.js";

Employee("sakthi");

let p = new demo(24);

p.display();

//default export

import Employee1 from "./export.js";
import demo from "./export.js";

Employee1("sadeesh");

let p1 = new demo(23);

p1.display();
