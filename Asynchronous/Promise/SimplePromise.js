console.log('Hello Start');
//callback
setTimeout(() => console.log('Asysnchro'), 0);
//goes to microtask
Promise.resolve('Resolve promise in 1').then(res => console.log(res));
console.log('End');
