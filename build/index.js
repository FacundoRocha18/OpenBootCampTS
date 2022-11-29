"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./design-patterns/creationals/singleton");
// * Creational design patterns
const singleton = singleton_1.Singleton.getInstance();
const singleton2 = singleton_1.Singleton.getInstance();
// * Check if singleton works
if (singleton === singleton2) {
    console.log('Singleton works, both variables contain the same instance');
}
else {
    console.log('Singleton failed, variables contain different instances');
}
/* import express from 'express'

const api = express()

api.use(express.json())

api.get('/', (req, res) => {
    res.send('Hello world!')
})

api.listen(8000, () => {
    console.log(`Server running at: http://localhost:8000 at: ${new Date().toLocaleTimeString()}`)
}) */
//# sourceMappingURL=index.js.map