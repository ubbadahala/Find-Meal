import './food.item.js';

class FoodList extends HTMLElement {

    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._foods.forEach(food => {
            const foodItemElement = document.createElement("food-item");
            foodItemElement.food = food;
            this.appendChild(foodItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <div class="modal text-white px-6 py-4 border-0 rounded-2xl absolute top-3 left-3 mb-4 bg-red-500">
            <span class="text-xl inline-block mr-5 align-middle">
                <i class="fas fa-bell" />
            </span>
            <span class="inline-block align-middle mr-8">
                <b class="capitalize">Error!</b> ${message}!
            </span>
        </div>
        `;
    }
}

customElements.define("food-list", FoodList);