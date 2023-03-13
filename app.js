console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:Ignore Even\n==========\n");
for (let i =0; i < 100; i++)
{
    if (i % 2 == 0)
    {
    continue;
    }
    else
    {
      console.log(i)  
    }
}

// Exercise 2 Section
console.log("EXERCISE 2: FIZZBUZZ\n==========\n");
for (let i = 1; i <= 100; i++)
{
    if (i % 15 == 0)
    {
        console.log(i,"FizzBuzz")
    }
    else
    {
        if (i % 3 == 0 )
            {
            console.log(i,"Fizz")
            }
        
        else if(i % 5 == 0)
            {
                console.log(i,"Buzz")
            }
        else
            {
                console.log(i)
            }
        }
}
// Exercise 3 Section
console.log("EXERCISE 3: part 1  Repeat with While and Do/While\n==========\n\n \nPart 1");

let i=0;
do
{
    for (i=0; i < 100; i++)
{
    if (i % 2 != 0)
    {
    console.log(i) 
    i++
    }
}
}while (i <= 100)

console.log("EXERCISE 3:Repeat with While and Do/While\n==========\n\n \nPart 2");
let x=1
do
{
    let output = ""
    if (x % 15 == 0)
    {
        console.log(x,"FizzBuzz")
    }
    else
    {
        if (x % 3 == 0 )
            {
            console.log(x,"Fizz")
            }
        
        else if(x % 5 == 0)
            {
                console.log(x,"Buzz")
            }
        else
            {
                console.log(x)
            }
        }
x++    
}while(x <= 100)

console.log("EXERCISE 4: Find Value\n==========\n\n \n");

let numberToFind = Math.round(Math.random() *500);

let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i=1; i <= n; i++) {
    if(i == numbertofind) {
    console.log(`Found ${numberToFind}!`);
    break;
    }
    if(i ==n){
    console.log(`Did not find ${numberToFind} within 1-${n}.`);
    }
}
console.log("EXERCISE 5: Custom FizzBuzz\n==========\n\n \n");
let fizzDivisor = Math.round(Math.random() * (10-1) + 1);
let buzzDivisor = Math.round(Math.random() * (10-1) + 1);
let end = Math.round(Math.random() * (1000-1) + 1);
let start = Math.round(Math.random() * (10-1) + 1);

for (let i = start; i <= end; i++){
    let output = "";

    if(i % fizzDivisor == 0){
        output += "FIZZ"
    }

    if(i % buzzDivisor == 0){
        output += "BUZZ"
    }
    console.log(`${i} ${output}`);
}
console.log (fizzDivisor, buzzDivisor)