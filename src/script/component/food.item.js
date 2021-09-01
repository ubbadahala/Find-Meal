class FoodItem extends HTMLElement {

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
        <body class="font-mono bg-gray-400">
            <!-- Container -->
            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">
                    <!-- Row -->
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                        <!-- Col -->
                        <div class="w-full h-auto hidden bg-gray-400 lg:block lg:w-1/2 bg-cover rounded-2xl" style="background-image: url('${this._food.strMealThumb}')"></div>
                        <!-- Col -->
                        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-2xl">
                            <div class="px-8 mb-4 text-center">
                                <h3 class="pt-4 mb-2 text-3xl font-bold">${this._food.strMeal}</h3>
                                <p class="mb-4 text-sm text-gray-700">
                                    <div class="px-4 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Area: ${this._food.strArea}</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Category: ${this._food.strCategory}</span>
                                    </div>
                                    <div class="mb-6 text-center">
                                        <a target="_blank" href="${this._food.strYoutube}" class="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-full hover:bg-red-800 focus:outline-none focus:shadow-outline">
									        Watch on Youtube
								        </a>
                                    </div>
                                </p>
                            </div>
                            <div class="px-8 pt-3 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        How to make it:
                                    </label>
                                </div>
                                <div class="text-center">
                                    <p class="inline-block text-sm">
                                        ${this._food.strInstructions}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        `;
    }
}

customElements.define("food-item", FoodItem);