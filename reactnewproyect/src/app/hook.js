
export function onsumit (){
console.log("llega al botom");
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>console.log(data));
}

export function onsumitPost (){
  fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: 144,
          quantity: 5,
        },
        {
          id: 98,
          quantity: 8,
        },
      ]
    })
  })
  .then(res => res.json())
  .then(console.log);
  }
