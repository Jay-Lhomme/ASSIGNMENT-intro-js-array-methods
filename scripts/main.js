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
   const [, id] = event.target.id.split('--');
   
   const index  = referenceList.findIndex(item => item.id === Number(id))

   referenceList[index].inCart = !referenceList.inCart
   cartTotal();
   renderCards(referenceList);
  }
}

// SEARCH
// .filter()
const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  const searchResult = referenceList.filter(item => 
    item.title.toLowerCase().includes(userInput) ||
    item.author.toLowerCase().includes(userInput) ||
    item.description.toLowerCase().includes(userInput)
  );
  renderCards(searchResult);
}

// BUTTON FILTER
// .filter() & .reduce() &.sort() - chaining
const buttonFilter = (event) => {
  if(event.target.id.includes('free')) {
    const free = referenceList.filter(item => item.price <= 0)
    renderCards(free);
  }

  if(event.target.id.includes('cartFilter')) {
    const wishlist = referenceList.filter(item => item.inCart);
    renderCards(wishlist)
  }

  if(event.target.id.includes('books')) {
    const books = referenceList.filter(item => item.type.toLowerCase() === 'book');
    renderCards(books);
  }

  if(event.target.id.includes('clearFilter')) {
   renderCards(referenceList)
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
    
    productList().sort((value1, value2) => value1.type.localeCompare(value2.type)).forEach(item => {
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
  const total = cart.reduce((value1, value2) => value1 + value2.price, 0);
  const free = cart.some(item => item.price <= 0);
  document.querySelector("#cartTotal").innerHTML = total.toFixed(2);

  if (free) {
    document.querySelector("#includes-free").innerHTML = 'INCLUDES FREE ITEMS';
  } else {
    document.querySelector("#includes-free").innerHTML = '';
  }
}

// RESHAPE DATA TO RENDER TO DOM
// .map()
const productList = () => {
  return referenceList.map(item => ({ 
    title: item.title, 
    price: item.price, 
    type: item.type 
  }))
}


const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(referenceList)

  // PUT CART TOTAL ON DOM
  cartTotal();

  // SELECT THE CARD DIV
  document.querySelector('#cards').addEventListener('click', toggleCart);

  // SELECT THE SEARCH INPUT
  document.querySelector('#searchInput').addEventListener('keyup', search)

  // SELECT BUTTON ROW DIV
  document.querySelector('#btnRow').addEventListener('click', buttonFilter);
}

startApp();
