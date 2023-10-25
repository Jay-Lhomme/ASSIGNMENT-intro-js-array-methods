import { card } from "../components/card.js";
import { tableRow } from "../components/table.js";
import { referenceList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";

// Reusable function to get the cards on the DOM
// .forEach()
const renderCards = (array) => {
  let refStuff = "";
  array.forEach((item) => {
    refStuff += card(item);
  });

  renderToDom("#cards", refStuff);
}

// UPDATE/ADD ITEMS TO CART
// .findIndex() & (.includes() - string method)
const toggleCart = (event) => {
  if (event.target.id.includes("fav-btn")) {
    // GOOGLE: Destructuring assignment
    const [,id] = event.target.id.split('--');

    const index = referenceList.findIndex(item => item.id === Number(id));

    // Toggle/Update the value of inCart
    referenceList[index].inCart = !referenceList[index].inCart
    cartTotal();
    renderCards(referenceList);
  }
}

// SEARCH
// .filter()
const search = (event) => {
  const eventLC = event.target.value.toLowerCase();
  const searchResult = referenceList.filter(item => 
    item.title.toLowerCase().includes(eventLC) || 
    item.author.toLowerCase().includes(eventLC) || 
    item.description.toLowerCase().includes(eventLC)
  );
  
  renderCards(searchResult);
}

// BUTTON FILTER
// .filter() & .reduce() &.sort() - chaining
const buttonFilter = (event) => {
  if(event.target.id.includes('free')) {
    const free = referenceList.filter(item => item.price <= 0);
    renderCards(free);
  }

  if(event.target.id.includes('cartFilter')) {
    const cart = referenceList.filter(item => item.inCart);
    renderCards(cart);
  }
  if(event.target.id.includes('books')) {
    const books = referenceList.filter(item => item.type.toLowerCase() === 'book');
    renderCards(books);
  }
  if(event.target.id.includes('clearFilter')) {
    renderCards(referenceList);
  }
  if(event.target.id.includes('productList')) {
    let table = `<table class="table table-dark table-striped" style="width: 600px">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Type</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
    `;
    productList().sort((a, b) => a.type.localeCompare(b.type))
    .forEach(item => {
      table += tableRow(item);
    })
    table += `</tbody></table>`

    renderToDom('#cards', table);
  }
}

// CALCULATE CART TOTAL
// .reduce() & .some()
const cartTotal = () => {
  const cart = referenceList.filter(item => item.inCart);
  const total = cart.reduce((a,b) => a + b.price, 0);
  const freeItems = cart.some(item => item.price <= 0)
  document.querySelector("#cartTotal").innerHTML = total.toFixed(2);

  if (freeItems) {
    document.querySelector("#includes-free").innerHTML = 'INCLUDES FREE ITEMS';
  } else {
    document.querySelector("#includes-free").innerHTML = '';
  }
}

// .map()
const productList = () => {
  return referenceList.map(item => ({ title: item.title, price: item.price, type: item.type }));
}


// ******* SAVE FOR CONNECTING IT ALL TOGETHER ******
const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(referenceList)
  cartTotal();
  // SELECT THE CARD DIV
  document.querySelector('#cards').addEventListener('click', toggleCart);

  // SELECT THE SEARCH INPUT
  document.querySelector('#searchInput').addEventListener('keyup', search)

  // SELECT BUTTON ROW DIV
  document.querySelector('#btnRow').addEventListener('click', buttonFilter);
}
startApp();
