

var number1 = '' 
var number2 = ''
var addop = ''
var result
var inputElement, lastindex
var operands = ['-', '+', '*', '/', '%', '.'];
var numbers  = ['1','2','3','4','5','6','7','8','9','0']

//get the input and print for numbers
function number(input){
    var button = input.id;
    switch(button){
      case 'one':
      var numOne = document.getElementById('numtxt')
      numOne.value += 1
      console.log(typeof(numOne.value))
      console.log(1)
      break;
      case 'two':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 2
      console.log(2)
      break;
      case 'three':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 3
      console.log(3)
      break;
      case 'four':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 4
      console.log(4)
      break;
      case 'five':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 5
      console.log(5)
      break;
      case 'six':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 6
      console.log(6)
      break;
      case 'seven':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 7
      console.log(7)
      break;
      case 'eight':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 8
      console.log(8)
      break;
      case 'nine':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 9
      console.log(9)
      break;
      case 'zero':
      var numTwo = document.getElementById('numtxt')
      numTwo.value += 0
      console.log(0)
      break;
    }
  }

//get the input and print for operator
function operator(opinput){
  var opbutton = opinput.id
  switch(opbutton){
    case 'plusOp':
      var operator = document.getElementById('numtxt')
      operator.value += '+'
      break;
    case 'multiplyOp':
      var operator = document.getElementById('numtxt')
      operator.value += '*'
      break;
    case 'minusOp':
      var operator = document.getElementById('numtxt')
      operator.value += '-'
      break;
    case 'divisionOp':
      var operator = document.getElementById('numtxt')
      operator.value += '/'
      break;
  }
}
  
  //function to store the value and operator
  function store(){
    //getting input string from text field of html
    inputElement = document.getElementById('numtxt').value
    //last position of the input string
    lastindex = inputElement.length-1
    /* comparing the input string to operands and storing the value to
       global variable 'addop' which is operator, 'number1' which stores
       the value of string before the operator and 'number2' which stores the 
       value of string which comes after the operator.
    */
    for(var i=0;i<lastindex;i++){
      for(var j=0;j<operands.length;j++){
        if(inputElement.charAt(i)==operands[j]){
          //addop(global varialble) to store the operator of input string
          addop = inputElement.charAt(i)
          //number1(global variable) to store number which comes before the
          //operator of input string
          number1 = inputElement.substring(0,i)
          //number2(global variable) to store number which comes after the
          //operator of input string
          number2 = inputElement.substr(i+1,lastindex)
          console.log(number1)
          console.log(addop)
          console.log(number2)
          console.log(typeof(number2))
        }
      }
    }  
  }


    /*This function will call the store() function to get the values and 
      convert(parse) the 'number1'&'number2'(which is string) to actual numbers.
      By using switch statment to check what is the operator and perform the
      operation between 'number1' & 'number2' and store the result value
      inside the global variable 'result' and print the result in html tag
      by using the id of it.
    */
    function calculation(){
      /*calling the store() function to get values of 'number1' 'number2'
        & 'addop'
      */
      store()
      console.log(number1)
      console.log(number2)
          console.log(typeof(number2))
      for(var k=0;k<number1.length;k++){
        for(var l=0;l<operands.length;l++){
          if(number1.charAt(k)==operands[l]){
            var abc = 'Invalid input or only two values and one operator accepted and performed.'
            return answer.innerHTML = abc
          }
        }
      }
      for(var x=0;x<operands.length;x++){
        if(number2.charAt(number2.length-1)==operands[x]){
          var abc = 'Invalid input or only two values and one operator accepted and performed.'
          return answer.innerHTML = abc
        }
      }
      console.log(number1)
      console.log(number2)
          console.log(typeof(number2))
      //converting the number2(string) into actual number
      number2 = parseFloat(number2)
      //converting the number1(string) into actual number
      number1 = parseFloat(number1)
      console.log(number2)
      console.log(number1)
      //checking the what is the type of operator and perform the operation
      //according to it
      switch(addop){
        //condition for addition operator and perform addition
        case '+':
        result = number1+number2
        break;
        case '-':
        result = number1-number2
        break;
        case '/':
        result = number1/number2
        break;
        case '*':
        result = number1*number2
        break;
      }
      //display the value of addition operation on html tag by refrencing 
        //through id('answer')
      // console.log(answer.innerHTML = result)
      //this will update the value of operation performed inside the
      //input text field refrencing through id('numtxt') 
      document.getElementById('numtxt').value = result

    }

//function to clear the values
function Clear(){
  document.getElementById('numtxt').value = ''
  answer.innerHTML = ''
}

function Check() {
  var lastChar = document.querySelector('#result').text().slice(-1);
  for (var i = 0; i < operands.length; i++) {
    if (operands[i] == lastChar) {
      
    }
  }
}

  
  
  
  
  
  
  
  
  
  
  