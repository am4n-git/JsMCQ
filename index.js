var read = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
var score =0;

var user = read.question("What's ur name? ")
log("Hey "+ chalk.cyanBright(user.toLocaleUpperCase()));
read.question("\nPress any key to start..\n")
function play(question, answer)
{

    var useranswer = parseInt(read.question(question))
    
    if (typeof useranswer === 'number')
    {
        if(useranswer == answer)
        {
            log(chalk.bold.blueBright("CORRECT !\n"));
            score++;
        }
        else
        {
            log(chalk.bold.redBright("WRONG !! \n"));
        }

    }
    else{
        log(chalk.bgRedBright("Enter valid option!!!!! \n"))
        main();
    }


}


var mcq = [
    {
        question: `1. Which type of JavaScript language is ___

1.Object-Oriented
2.Object-Based
3.Assembly-language
4.High-level ` ,
        answer: 2
    },
    {
        question: `2. Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":

1. if(a!==null)
2. if (a!)
3. if(a!null)
4. if(a!=null) `,
        answer: 1
    },
    {
        question: `3. Suppose we have a text "human" that we want to convert into string without using the "new" operator. Which is the correct way from the following to do so:

1.toString()
2.String(human)
3.String newvariable="human"
4.Both human.toString() and String(human) ` ,
        answer: 4       
    },
    {
        question: "4. What will be the output? " +
 chalk.bgBlackBright(`
 functioncomparing()  
{  
    intx=9;  
    chary=9;  
    if(x==y)  
    returntrue;  
    else  
    returnfalse;  
}  \n`) +

`
1. compilation error
2. false
3. runtime error
4. true ` ,
        answer: 4
    },
    {
        question: "5. What will be the output?" +
        chalk.bgBlackBright(`
var string1 = "40";  
varvalueinit=50;  
alert( string1 +intvalue); `) + 
`
1. 4090
2. 90
3. 4050
4. Exception ` ,
        answer: 3
    },
    {
        question: "6. Which one of the following is correct output :" +
        chalk.bgBlackBright(`
var  obj=  
{  
    length:20,  
    height:35,  
}  
    if('breadth' in obj === false)   
{  
    obj.breadth = 12;  
}  
           
console.log(obj.breadth); `) +
`  

1. Error
2. Undefined
3. 12
4. 20 ` ,
        answer: 3
    },
    {
        question: "7. Which one of the following is correct output :"+
        chalk.bgBlackBright(`
functionheight()  
{     
    var  height=123.56;  
    var type =(height>=190)?"Taller":"Little short";  
    return type;  
}`)+

`
1. 123.56
2. Taller
3. 190
4. Little shorter ` ,
        answer: 2
    },
    {
        question: "8. Which of the following is the correct output :"+
        chalk.bgBlackBright(`
varx=5,y=1  
var obj ={ x:10}  
with(obj)  
{  
     alert(y)  
}`)+
`
1. 1
2. Error
3. 10
4. 5 ` ,
        answer: 1
    },
    {
        question: `9. Which one of the following also known as Conditional Expression: 

1. Alternative to if-else
2. Switch statement
3. If-then-else statement
4. immediate if ` ,
        answer: 4
    },
    {
        question: "10. Among the following given JavaScript snipped codes, which is "+
        
chalk.blue("\nCode A ") +

chalk.bgBlackBright(`
for(var number=10;number>=1;number--)  
{  
    document.writeln(number);  
}`)+

chalk.magenta("\nCode B ")+
        
chalk.bgBlackBright(`
var number=10;  
while(number>=1)  
{  
    document.writeln(number);  
    number++;  
} `)+
`

1. Code 1
2. Code 2
3. Both Code 1 and Code 2
4. Cannot Compare ` ,
        answer: 1
    }

]

function main()
{
    for(var i = 0; i<mcq.length; i++)
    {
        play(mcq[i].question, mcq[i].answer);
    }

}


main();
log("Your final Score "+ score + " out of 10")
