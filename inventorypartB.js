var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
        ]
    }
];
console.log(calculateAveragePricePerDesigner(currentInventory)
)
function calculateAveragePricePerDesigner(inventory) {
    let resultObj = {}
    let designersArr = []
    for (let item = 0; item < inventory.length; item++) {
        let newObj = {}
        let name = inventory[item].name
        //get new object and add name and average price
        newObj['averagePrice'] = average(inventory, item)
        newObj['name'] = name
        designersArr.push(newObj)
    }
        resultObj['designers'] = designersArr
    return resultObj
}
//5:33
function average(database, brand) {
    //get a sum
    let sum = 0
    let average = 0
    let prices = database.length
    //iterate through the shoes
    for (let i = 0; i < prices; i++){
        let price = database[brand].shoes[i].price
        sum += price
    }
    average = sum / prices
    //result sum divide by length
    return average
}
