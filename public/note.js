
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