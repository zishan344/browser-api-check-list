/* ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 
console.log(procuctName, procuctPrice);
*/

//id {procuct-name procuct-price }
const showing = () => {
  const totlaPrduct = localCart();
  const ul = document.getElementById("ul");
  ul.textContent = "";
  for (const total in totlaPrduct) {
    const li = document.createElement("li");
    li.innerText = total + " " + totlaPrduct[total];
    ul.appendChild(li);
  }
};
const addedProduct = () => {
  const procuctName = idgenerator("procuct-name");
  const procuctPrice = idgenerator("procuct-price");

  //  added the cart
  addCart(procuctName, procuctPrice);
  showing();
  // show the ui

  // clear the input
};

const idgenerator = (id) => {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  inputField.value = "";
  return inputFieldValue;
};

const localCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};
const addCart = (name, price) => {
  const cart = localCart();
  if (cart[name]) {
    cart[name] = parseFloat(cart[name]) + parseFloat(price);
    console.log(cart[name]);
  } else {
    cart[name] = price;
  }
  const str = JSON.stringify(cart);
  localStorage.setItem("cart", str);
};

showing();
