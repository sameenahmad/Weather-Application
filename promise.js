const sayHello = (name) => {

    return new Promise((resolve, reject)=>{
            resolve(`Hello, ${name}!`);
    })


}