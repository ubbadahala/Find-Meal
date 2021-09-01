class FoodItem extends HTMLElement {

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="flex justify-center px-6 my-auto">
            <div class="max-w-2xl my-8 mx-auto bg-white rounded-3xl shadow2xl md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full rounded-3xl object-cover md:h-full md:w-48" src="${this._food.strMealThumb}" alt="Man looking at item at a store">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-tighter text-3xl text-green-500 font-black">${this._food.strMeal}</div>
                        <div class="pt-4 pb-2 content-between">
                            <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Area: ${this._food.strArea}</span>
                            <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Category: ${this._food.strCategory}</span>
                        </div>
                        <div class="m-0">
                            <span class="inline-block bg-red-100 hover:bg-red-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="${this._food.strYoutube}" target=”_blank”>Watch on Youtube</a></span>
                        </div>
                        <p class="mt-2 text-gray-700 font-bold">How to make:</p>
                        <p class="mt-2 text-gray-500 max-h-40 overflow-auto">${this._food.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("food-item", FoodItem);