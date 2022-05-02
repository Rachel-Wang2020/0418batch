const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

// Q1
function double(arr){
    const newObj = [];
    for(let i = 0; i < arr.length; i++){
        newObj.push({quantity: arr[i].quantity * 2, price:arr[i].price * 2});
    }
    return newObj;
    
}

console.log(double(itemsObject));

//Q2
function filterData(arr){
    const newObj = []
    l = arr.length;
    for (let i = 0; i < l; i++){
        if(arr[i].quantity > 2 && arr[i].price > 300 ){
            newObj.push({quantity:arr[i].quantity,price:arr[i].price});
            
        }
        
    }
    return newObj;
}

console.log(filterData(itemsObject));

//Q3
function calcu(arr) {
    result = 0;
    l = arr.length;
    for (let i = 0; i < l; i++) {
      result += arr[i].quantity * arr[i].price;
    }
    return result;
  }
  
  console.log(calcu(itemsObject));

//Q4
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

function arrange(str) {
  const regex = /[^A-Za-z]/g;
  const newStr = str.replace(regex, "");
  return newStr.toLowerCase();
}

console.log(arrange(string));

