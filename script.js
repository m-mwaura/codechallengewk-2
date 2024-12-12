let shoppingList = []; // array to hold shopping items

const form = document.getElementById('shopping-form'); //DOM elements
const container = document.getElementById('container');
const clearButton = document.querySelector('.clear-list');


function displayItems(){      // function to display all items
    container.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const itemCard= createItemCard(item,index);
        container.insertAdjacentHTML('beforeend', itemCard)
    });

}    

    function createItemCard(item, index) { //function to create items on html
        return `
            <div class="d-inline-flex p-3">
            <div class="tick">
                <input type="checkbox" id="mark-${index}" onclick="togglePurchased(${index})"/>
                <label for="mark-${index}"></label>
                </div>
                <div class="item">
            <div id="details-${index}">
          <p class="title">${item.name} <span class="price">ksh${item.price}</span></p>

              </div>
        </div>
</div>`;
    }
    
    function togglePurchased(index) {
        const details = document.getElementById(`details-${index}`);
        const checkbox = document.getElementById(`mark-${index}`);
        details.classList.toggle('purchased', checkbox.checked);
    }

    function toggleClearButtonVisibility(){
        if (shoppingList.length > 0) {
            clearButton.classList.remove('hidden');

        } else {
            clearButton.classList.add('hidden'); 
        }

    }

    clearButton.addEventListener('click', () => { //event listener to clear shopping list
        shoppingList = [];
        container.innerHTML = '';
        toggleClearButtonVisibility();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const itemName = e.target.product.value.trim();
        const itemPrice = e.target.price.value.trim();

        if (itemName && itemPrice) {
            shoppingList.push({name: itemName, price: itemPrice});
            form.reset();
            displayItems();

        }
    });
    