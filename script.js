function fozzieBear(){
console.log(`Wokka Wokka`)

}

function beaker(speak){
    console.log(speak.repeat(4));
}
beaker(`Meep`);

//3
function muppetShow(a,b){[
    `Its time to put on makeup, Its time to light the lights`,


]};
//4
function kermit(){
console.log(`Kermit the Frog`);

}
kermit();
//5

function muppetShowseasons(seasons){
    if(seasons.length=5){
        return true;
    }
return false;

}
console.log(MuppetShowseasons(5));
console.log(MuppetShowseasons(5));
//6
const manorMuppet= function(){
    console.log(`Am I a man or a mumppet?`);
    
}
manorMuppet();
//7
rainbowConnections => console.log(`Someday we'll find it.The Rainbow Connection`);
console.log(rainbowConnections());

//8
//No

//9
//yes

//Bonus
//No
const newMuppetMovies = [

    `The Muppets`,
    `Muppets Most Wanted`,
];
const uppers = newMuppetMovies.map(function(x){
    return x.toUpperCase();
});

console.log(uppers());

const MuppetsMovies =[
`THe Muppet Movie`,
`The Muppets take Manhattan`,
`The Great Muppet Caper`,

];

const a = newMuppetMovies.filter(twoMovies =>twoMovies.length);
console.log(a);

const charactersOne =[
    `Statler`,
    `Waldorf`,
];

const charactersTwo =[
`The Swedish Chef`,
`Animal`,
`Rolf`

];

//12

randomMuppet = (characters)  => {

    characters(Math.floor.random() * characters.length);
    console.log(characters);

}
randomMuppet(charactersOne)(Math.floor.random() * characters.length);
randomMuppet(charactersTwo);

// =======================

13//

caps = string => {

    let chars = string.toLowerCase().split('');
    for (i = 0; i < chars.length; i = +-2) {
        chars(i) = chars[i].toUpperCase();
    }

console.log(caps
(`Hello World`));


}

//Extra Bonus

caps = string => {

    let count = 0;
    let newString = ``;
    for (i =0; i<string.length; i++){     
        if(string[0] === ``){
        newString += `` ;   
        }else if(count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        }else {
            newString = string[i].toUpperCase();
            count++;
        }
    }
    return newString;
}