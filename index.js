/* IIFE */

// console.log(mondayWork())

// const val = (function(val){
//     return val+3
// })(2)

// console.log(val)

/* FUNCTION LEVEL SCOPES* and SCOPE CHAINS/

// function outer(greeting, msg="It's a fine day to learn"){
//     return function (name, lang="Python"){
//         return function (mode){
//             return `${greeting}, ${name}! ${msg} ${lang} ${mode}`
//         }
//     }
// }

// console.log(outer('Hello')('student', 'Javascript')('online'))

/* CLOSURE */

// const array = (function(valToAdd){
//     const base = 3
//     return [
//         function(){
//            return base + valToAdd
//         },
//         function(){
//             return base
//         }
//     ]
// })(2)

// /*The two functions being returned in array are closures; they have access to the base variable because it's defined in their parent 
// function. When they're executed, they "let out" the values of the sum and the original base number, allowing us to see them. */

// console.log(array[0]())

const saturdayFun = function(activity = 'roller-skate'){
    switch(activity){
        case 'roller-skate':
            return `This Saturday, I want to ${activity}!`
        default:
            return `This Saturday, I want to ${activity}!`
    }
}

const mondayWork = function (activity = 'go to the office'){
    switch(activity){
        case 'work from home':
            return `This Monday, I will ${activity}.`
        default:
            return `This Monday, I will ${activity}.`
    }
}

/* SCOPE CHAINING*/

const wrapAdjective = function(flair='*'){
    return function(adjective='special'){
        return `You are ${flair}${adjective}${flair}!`
    }
}


