let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const list = document.getElementById("list");
const balance = document.getElementById("balance");

function updateUI(){

list.innerHTML="";

let total = 0;

transactions.forEach((t)=>{

total += t.amount;

const li = document.createElement("li");

li.innerHTML = `
${t.text} : ₹${t.amount}
<button onclick="deleteTransaction(${t.id})">X</button>
`;

list.appendChild(li);

});

balance.innerText = total;

localStorage.setItem("transactions",JSON.stringify(transactions));
}

function addTransaction(){

const text = document.getElementById("text").value;
const amount = Number(document.getElementById("amount").value);

if(text==="" || amount===0){
alert("Enter valid details");
return;
}

const transaction={
id:Date.now(),
text,
amount
};

transactions.push(transaction);

document.getElementById("text").value="";
document.getElementById("amount").value="";

updateUI();
}

function deleteTransaction(id){

transactions = transactions.filter(t => t.id !== id);

updateUI();
}

updateUI();