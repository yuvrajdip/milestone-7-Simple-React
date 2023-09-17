Javascript Modules : 

Type 1 :
Encapsulation :
// utils.js
function privateFunction(){
}

export function publicFunction(){
}

Type 2 :
// moduleA.js
import {something} from './moduleB.js'

// moduleB.js
export const something = 'Hello from Module B'

