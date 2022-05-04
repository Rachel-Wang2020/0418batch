const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Q1-1
function double(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push({ quantity: arr[i].quantity * 2, price: arr[i].price * 2 });
  }
  return newArr;
}
console.log("---Q1-1-----");
console.log(double(itemsObject));

//Q1 -2

function double2(arr) {
  return arr.map(doubleMap);
}

const doubleMap = ({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
};
console.log("---Q1-2-----");
console.log(double2(itemsObject));

//Q2 - 1
function filterData(arr) {
  const newArr = [];
  l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr[i].quantity > 2 && arr[i].price > 300) {
      newArr.push({ quantity: arr[i].quantity, price: arr[i].price });
    }
  }
  return newArr;
}
console.log("---Q2-1-----");
console.log(filterData(itemsObject));

//Q2 -2

function filterData2(arr) {
  return arr.filter(filterArray);
}
const filterArray = (obj) => {
  return obj.quantity > 2 && obj.price > 300;
};

console.log("---Q2-2-----");
console.log(filterData2(itemsObject));

//Q3 - 1
function calcu(arr) {
  result = 0;
  l = arr.length;
  for (let i = 0; i < l; i++) {
    result += arr[i].quantity * arr[i].price;
  }
  return result;
}
console.log("---Q3-1-----");
console.log(calcu(itemsObject));

//Q3-2
function calculate(arr) {
  let total = 0;
  return arr.reduce(function(total, obj){
    return total + obj.quantity * obj.price;
  },total);

}
console.log("---Q3-2-----");
console.log(calculate(itemsObject));

//Q4
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

function arrange(str) {

  const newStr = str.toLowerCase().trim().split(/[ -]+/).join(" ");
  return newStr;
}
console.log("---Q4-----");
console.log(arrange(string));
