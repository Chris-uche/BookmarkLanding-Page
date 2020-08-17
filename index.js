//Selecting and styling the different features/properties for the dropdown in mobile device
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close')
const modal = document.querySelector('.modal')
const logo = document.querySelector('.logo')
const send = document.querySelector('.send')
const form = document.querySelector('.for')
const email = document.querySelector('#email')
const errorMg = document.querySelector('.error');
const answer = document.querySelector('.answer')
const successMg = document.querySelector('.success');
const errorIcon = document.querySelector('.error-icon')
const faq = document.querySelector('.faq-list-item')

const defaultOpen = document.getElementById('defaultOpen')
defaultOpen.click()


hamburger.addEventListener('click',()=>{
    modal.style.display = 'block';
    hamburger.style.display = 'none';
    logo.style.display = 'none'

});

closeIcon.addEventListener('click', ()=>{
    modal.style.display ='none';
    hamburger.style.display = 'block'
    logo.style.display = 'block'
})

//Preventing the form from auto-submitting

form.addEventListener('submit', (Event)=>{
    Event.preventDefault();
    emailSubmit(email);
    
})

function emailSubmit(email){
    if(!validateEmail(email.value)){
        successMg.textContent = "";
        errorMg.style.display = "block";
        errorIcon.style.display = "inline";
    }
    else{
        successMg.textContent = "Thanks for subcribing";
        successMg.style.display = "block";
        email.value = " "
    } 
}

email.addEventListener("click", () => {
    errorMg.style.display = "none";
    errorIcon.style.display = "none";
    successMg.textContent = "";
});
  

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
  

Array.from(faq).forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log(e.target.parentNode.children);
  })
);


/*Adding Feature to the tablink section */
function openCard(pageName, elmnt, color) {
    var i, cards, tablinks;
    cards = document.getElementsByClassName("card");
    //console.log(cards)
    for (i = 0; i < cards.length; i++) {
      //From the first array of the card should appear none;
      cards[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    
    document.getElementById(pageName).style.display = "flex";
    arr = Array.from(tablinks);
    arr.forEach((item) => {
      if (window.innerWidth < 870) {
        item.style.borderBottom = `none`;
        item.style.color = "grey";
      }
      if (window.innerWidth > 870) {
        item.parentNode.style.borderBottom = `none`;
      }
    });
    
    if (window.innerWidth < 870) {
      elmnt.style.borderBottom = `2px solid ${color}`;
      elmnt.style.color = "black";
    } else {
      elmnt.parentNode.style.borderBottom = `1px solid ${color}`;
    }
}
