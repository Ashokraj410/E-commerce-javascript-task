
// button method filter
const filterbuttons=document.querySelectorAll(".filter-btn");
const product=document.querySelectorAll(".card");

filterbuttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const category =button.getAttribute('data-category');

        product.forEach(card=>{
            const cardCategory=card.getAttribute('data-category');

            if(category==='all'|| category===cardCategory){
                card.style.display='flex'
                card.style.flexDirection='column'

            }else{
                card.style.display='none'
            }
        })
    })
})



//search box filter method
const Search=() =>{
    const search = document.getElementById("search").value.toLowerCase();
    const product = document.querySelectorAll(".card")
    const pname = document.getElementsByTagName("h2")

    for (var i=0 ; i<pname.length; i++ ) {
        let match = product[i].getElementsByTagName("h2") [0];
        
        if(match){
            let textvalue=match.textContent||match.innerHTML

            if(textvalue.toLowerCase().indexOf(search) >-1){
                product[i].style.display="";
                
            }else{
                product[i].style.display="none"
            }
        }
    }

    }

    //Add to card function
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.card');
      const title = card.querySelector('h2').innerText;
      const priceText = card.querySelector('h3').innerText;
      const imgSrc = card.querySelector('img').getAttribute('src');
      const priceMatch = priceText.match(/\d+/g);
      const price = priceMatch ? parseInt(priceMatch[0]) : 0;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existingProduct = cart.find(p => p.title === title);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({
          title,
          price,
          img: imgSrc,
          quantity: 1
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${title} added to cart!`);
    });
  });
