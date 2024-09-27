// tsk-1
const oddNums = [1, 3, 5, 7, 9];

let evenNums = [];
for (let i = 0; i < oddNums.length; i++) {
    const element = oddNums[i] + 1;
    evenNums.push(element);
};
// console.log(evenNums);

const evenNums2 = oddNums.map(odd => odd + 1);
// console.log(evenNums2);



// tsk-2

const numbers = [33, 50, 79, 78, 90, 101, 30];
const divTen = numbers.filter(num => num % 10 === 0);
// console.log(divTen);

const divTen2 = numbers.find(num => num % 10 === 0);
// console.log(divTen2);


// tsk-3
const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akhil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
];

let name = [];
for (const ins of instructor) {
    const insPosition = ins.position;
    if (insPosition.toLowerCase() === 'Senior'.toLowerCase()) {
        name.push(ins.name);
    }
};
// console.log(name);

const insPosition = instructor.filter(n => n.position === 'Senior').map(n => n.name);
for(let ins of insPosition){
    console.log(ins);
}


// tsk-4

const peoples = [
    {name:'Meena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22}
];
let sum = 0;
for(const people of peoples){
    const age = people.age;
    sum+=age;
}
// console.log(sum);

const peopleAge = peoples.reduce((priValue,nextValue)=>priValue+nextValue.age,0);
console.log(peopleAge);










