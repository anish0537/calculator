
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
    case 'plusOp':
    var operator = document.getElementById('numtxt')
    operator.value += '+'
    break;
  }
}
function operation(button){
  // var numbers = [0,1,2,3,4,5,6,7,8,9]
  // var inputElement = document.getElementById('numtxt').value
  // for(i=0;i>=inputElement.length;i++){
  //   if(inputElement[i]=='+'){
  //     var pos = inputElement.search('+')
  //     var num1 = inputElement(0,pos)
  //     var num2 = inputElement(pos,inputElement[-1])
  //     var nums1 = parseFloat(num1)
  //     var nums2 = parseFloat(num2)
      
  //   }
    
  // }
  var addition
  var operator = '+'
  var inputElement = document.getElementById('numtxt').value
  var newInpElement = inputElement.split(operator)
  console.log(typeof(newInpElement))
  // console.log(newInpElement[newInpElement.length-1])
  if(newInpElement[newInpElement.length-1]==''){
    var a = newInpElement.pop()
    // console.log(a)
    var nums1 = parseFloat(newInpElement[0])
    var nums2 = parseFloat(newInpElement[1])
    addition = nums1 + nums2
    // console.log(addition)
    answer.innerHTML = addition
    // console.log(answer.innerHTML)
  }else{
    var nums1 = parseFloat(newInpElement[0])
    var nums2 = parseFloat(newInpElement[1])
    addition = nums1 + nums2
    answer.innerHTML = addition
  }
}

















