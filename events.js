import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('hello', () => {
  console.log("hello");
  setTimeout(()=>{console.log("hello again")}, 3000);
});
myEmitter.emit('hello');