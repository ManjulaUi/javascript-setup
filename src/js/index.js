import app from './app'
import emp from './emp'
import Main from './main'
import { Student } from './person'
import {my ,a,bye} from './es6/arrow'

console.log(my())
console.log(app)
console.log(emp())
console.log("srinivas")

let main = new Main()
const stu = new Student()
console.log(main.name)
console.log(stu.name)
console.log(a,bye())
