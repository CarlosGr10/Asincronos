const doSomethingAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve('do Something Async', 3000))
        : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const Something = await doSomethingAsync();
    console.log(Something);
}

console.log('Before');
doSomething();
console.log('Afther');


const anotherFunction = async () => {
    try{
        const Something = await doSomethingAsync();
        console.log(Something);
    } catch(error){
        console.error(error);
    }
}

console.log('Before two call');
anotherFunction();
console.log('Afther two call');