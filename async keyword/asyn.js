//async keyword = makes a function return  promise 

async function isfileLoaded(){
    let fileLoaded = false;

    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "File NOT Loaded";
    }
}


isfileLoaded().then(value => console.log(value))
              .catch(error => console.log(error)); 