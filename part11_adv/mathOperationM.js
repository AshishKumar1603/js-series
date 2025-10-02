export function add(a,b){
    return a+b;
}

export function subtract(a,b){
    return a-b;
}


export default function multiply(a,b){
    return a*b;
}


/* --> JavaScript me Modules

JavaScript modules ka matlab hota hai code ko todna aur alag-alag files me likhna, taaki code reusable aur manageable ho.

2 popular module systems hote hain:

.CommonJS (CJS)
.ES6 Modules (ESM)


1. CommonJS (CJS)

.Ye Node.js ka purana module system hai.
.Isme require aur module.exports use hota hai.
.Ye synchronous hota hai (line by line load hota hai).


2. ES6 Modules (ESM)

.Ye modern JavaScript ka standard module system hai (2015 ke baad).
.Isme import aur export use hota hai.
.Ye asynchronous hota hai (parallel load hota hai, performance better hoti hai).
.Browser aur Node (v12+ with "type":"module") dono support karte hain.


Eassy Explain:
.CommonJS → Jaise ek dabba (object) bhejna aur dusri file us dabbe ko kholkar cheezein use kare.
.ES6 Modules → Jaise ek delivery service jisme tum directly bol sakte ho ki mujhe ye item chahiye (named exports), ya mujhe main item chahiye (default export).



CommonJS = purana system (Node.js only, require / module.exports).
.ES6 Modules = modern standard (Browser + Node.js, import / export)
.Future projects me mostly ES6 modules prefer kiye jate hain kyunki ye fast, clean aur tree-shaking support karte hain. */