import app from './app'
import emp from './emp'
import Main from './main'
import { Student } from './person'
import {my ,a,bye} from './es6/arrow'
import  * as test from './es6/const'
import '../data/data.json'
import {a} from './es6/scope'

console.log(my())
console.log(app)
console.log(emp())
console.log("srinivas")

let main = new Main()
const stu = new Student()
console.log(main.name)
console.log(stu.name)
console.log(a,bye())
console.log(test.PI)
console.log(test.Hack())