//reduce executes a user-supplied reducer
//currentValue = value of the array going on
//accumulator takes the initial value first then takes from the result


const mynums = [1,2,3]

const mytotal = mynums.reduce(function(accumulator,currentValue){
    console.log(`accumulator: ${accumulator} and currval: ${currentValue}`)
    return accumulator+currentValue
}, 0)

const mytotal = mynums.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
 
// console.log(mytotal);

const shopping_cart = [
    {itemName: "js course",
     price: 2999
    },
    {itemName: "py course",
     price: 999
    },
    {itemName: "mobile dev course",
     price: 5999
    },
    {itemName: "ds course",
     price: 12999
    },
]

const cart = shopping_cart.reduce((acc,item)=>acc+ item.price,0)
console.log(cart);

