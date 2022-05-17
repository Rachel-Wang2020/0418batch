//Q1

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
//row 1- table head
let tr1 = document.createElement("tr");
thlength = tableInfo.tableHeader.length;
for (let i = 0; i < thlength; i++) {
  let th = document.createElement("th");
  th.textContent = tableInfo.tableHeader[i];
  tr1.appendChild(th);
}
thead.appendChild(tr1);

//row 2-5
tbodylength = tableInfo.tableContent.length;
l = Object.keys(tableInfo.tableContent[0]).length;
for (let i = 0; i < tbodylength; i++) {
  let tr = document.createElement("tr");
  student_info = tableInfo.tableContent[i];
  //console.log(student_info);
  for (let key in student_info) {
    let td = document.createElement("td");
    //console.log(student_info[key]);
    td.textContent = student_info[key];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

//Q2
function createMenuItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

//ordered list - 1
const olTitle = document.createElement("p");
olTitle.style.marginBottom = "20px";
olTitle.style.fontSize = "22px";
olTitle.textContent = "An ordered technologies list";
document.body.appendChild(olTitle);

const ol = document.createElement("ol");
ol.id = "olMenu";
document.body.appendChild(ol);

const olMenu = document.querySelector("#olMenu");
// -1
list.forEach((ele) => {
  olMenu.appendChild(createMenuItem(ele));
});

// -2
// let olNodes = list.map((lst) => {
//   let li = document.createElement("li");
//   li.textContent = lst;
//   return li;
// });
// olMenu.append(...olNodes);

//unordered list
const ulTitle = document.createElement("p");
ulTitle.style.marginBottom = "20px";
ulTitle.style.fontSize = "22px";
ulTitle.textContent = "An unordered technologies list";
document.body.appendChild(ulTitle);

const ul = document.createElement("ul");
ul.id = "ulMenu";
document.body.appendChild(ul);

const ulMenu = document.querySelector("#ulMenu");
// -1
// list.forEach((ele) => {
//   ulMenu.appendChild(createMenuItem(ele));
// });
//-2
let ulNodes = list.map((lst) => {
  let li = document.createElement("li");
  li.textContent = lst;
  return li;
});
ulMenu.append(...ulNodes);

//Q3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.createElement("select");
select.className = "select";
select.id = "select";
document.body.appendChild(select);

l = dropDownList.length;
for (let i = 0; i < l; i++) {
  let option = document.createElement("option");
  option.className = "op";
  option_info = dropDownList[i];
  //console.log(option_info);
  //console.log(option_info.value);
  option.value = option_info.value;
  option.textContent = option_info.content;
  select.appendChild(option);
}
