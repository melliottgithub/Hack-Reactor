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
console.log(listAllBlackShoes(currentInventory))
function listAllBlackShoes(inventory) {
    console.log(inventory[0].shoes[0].name
    )
    let list = ''
    for (let i = 0; i < inventory.length; i++){
        list += listItem(inventory, i) + '\n' 
    }
    console.log(list)
    return list
}

//Create helper functions if needed
function listItem(inventory, item) {
    let list = ''
    for (i = 0; i < inventory[item].shoes.length; i++){
        let name = inventory[item].name
        let nameShoes = inventory[item].shoes[i].name
        let priceShoes = inventory[item].shoes[i].price

        if (find(nameShoes)) {
            list = `${name},  ${nameShoes}, ${priceShoes}`
        }
    }
    return list
}

function find(shoeStr) {

    if (shoeStr.indexOf('black')) {
    //if (shoeStr.includes('black')) {
        return true
    } return false
}