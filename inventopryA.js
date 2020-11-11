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
function renderInventory(inventory) {
    //get the variable for what i need
    let str = ''
    //iterate through the arr and return stuff get a string
    for(let i = 0; i < inventory.length;i++){
        //brand
        let brand = inventory[i].name
        // iteration inventory[i].shoes
        let shoesDescription = inventory[i].shoes
        for(let j = 0; j < shoesDescription.length; j++){
            
            //shoes names
            let shoesNames = inventory[i].shoes[j].name
            // prices
            let shoesPrices = inventory[i].shoes[j].price
            
            str += `${brand}, ${shoesNames}, ${shoesPrices} \n`
        }   
    }
    str = str.substr(0, str.length - 1)
    return str
}
console.log(renderInventory(currentInventory))