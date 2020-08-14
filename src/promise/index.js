const somethingWillHappen = () =>{
 return new Promise((resolve, reject) =>{
    if(true){   //Podemos cambiar de True o False
        resolve('Hey !!')
    }else{
        reject('Uppps')
    }
 });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err));

// Promesa numero 2
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('True');
            }, 4000)
        } else {
            const error = new Error('UppppSS!!!');
            reject(error)
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.log(err));


//Ejecutar varias promesas en un array
Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('array of results', response);
    })
    .catch(err =>{
        console.error(err);
    })