console.log('another');

// let greet = () =>{
//     console.log('hello, World');
    
// }

let greet : Function; 

greet = () =>{
    
}


const add = (a: number, b: number, c: number | string = 10 ) =>{
    console.log(a + b);
    console.log(c);
    
}

add(20, 90, "20")

const minus = (a: number, b: number,)=>{
    return a + b
}

let result = minus(10, 7)

console.log(minus);

//  type 
 type StringOrNum = string | number
 type objWithName = { name: string, uid: StringOrNum}

const logDetails = (uid : StringOrNum, item: string) =>{
    console.log(`${item} has uid of ${uid}`);
    
} 
logDetails(23, "Elisha")


const greetAgain = (user: objWithName)=>{
    console.log(`${user.name} says hello`);
    
}

greetAgain({
    name : 'ZION',
    uid : 45
})


// example 1 

let great : (x: string, y: string) => void

great = (name : string, greeting: string) =>{
    console.log(`${name} says ${greeting}`);
    
}
// example 2

let calc: (a: boolean, b: number, c:string) => boolean;

calc = (numberOne: boolean, numberTwo: number, add: string) =>{
    if (add === "hello") {
          
        // console.log(numberOne + numberTwo  );
        // return numberOne + numberTwo 
        console.log(`Adding because add is "hello":`, numberTwo + (numberOne ? 1 : 0));
        return true;
    }
    else{
    //     console.log(numberTwo - numberOne);
    //    return numberTwo - numberOne

    console.log(`Subtracting because add is not "hello":`, numberTwo - (numberOne ? 1 : 0));
    return false;
    }

}



    calc(true, 20, 'helljo')


   
    

// example 3 

let logDetails2: (obj: { name: string, age: number}) => void; 
 
 type person = { name: string, age: number}

logDetails2 = (details: person) => {
    console.log(`${details.name} is ${details.age} years old`);
    
}

logDetails2({
    name: 'Semilore' ,
    age : 15
})

