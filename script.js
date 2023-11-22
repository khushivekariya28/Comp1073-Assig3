class Pizza {
    constructor(size,breadType, toppings, extraCheese, customerName) {
        this.size = size;
        this.breadType = breadType;
        this.toppings = toppings;
        this.extraCheese = extraCheese;
        this.customerName = customerName;
    }

    getDescription() {
        return `${this.customerName}'s ${this.size} pizza with ${this.toppings.join(', ')}${this.extraCheese ? ' and extra cheese' : ''} on ${this.breadType} crust.`;
    }
}

function submitOrder() {
    const size = document.getElementById('pizzaSize').value;
    const toppings = [];
    const toppingCheckboxes = document.querySelectorAll('input[name="topping"]:checked');
    toppingCheckboxes.forEach(checkbox => {
        toppings.push(checkbox.value);
    });
    const breadType = document.getElementById('breadType').value; 
    const extraCheese = document.getElementById('extraCheese').checked;
    const customerName = document.getElementById('customerName').value;

    const pizzaOrder = new Pizza(size, breadType, toppings, extraCheese, customerName);

    const pizzaOutput = document.getElementById('pizzaOutput');
    pizzaOutput.innerHTML = `<p>${pizzaOrder.getDescription()}</p>`;
}
