 
 const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categorie = data.data;
    displaycat(categorie);

 }
 const catContainer = document.getElementById('category');

 const displaycat = categorie => {
   
    categorie.forEach(category =>{
         
        //loadCard(id);
        const categorieBtn = document.createElement('div');
        categorieBtn.classlist = `m-4`;
        
        categorieBtn.innerHTML =`<button onclick="loadCard('${category.category_id}')" class="btn btn-active m-4">${category.category}</button>`;
        catContainer.appendChild(categorieBtn);
        
    })
 }
 loadCategories();

 const dynamicImage = "<img src='./logo.png'/>"; 

 const loadCard = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const cards = data.data;
    if(cards.length === 0 ){
      const cardContainer = document.getElementById('card');
      const cardContainer2 = document.getElementById('card2');
      cardContainer.innerHTML="";
      cardContainer2.innerHTML= "<div class='flex flex-col justify-center items-center container  text-center my-20'><div><img src='./img/icon.png'/></div><br><div><p class='text-xl'>Sorry No Data Found</p></div></div>";
         
    }else{
      displaycard(cards);
       
      
    }
    
     
 }
 const dynamicImageUrl = "<img src='./img/fi_10629607.png'/>";


 const displaycard = cards => {
   const cardContainer = document.getElementById('card');
   const cardContainer2 = document.getElementById('card2');
   cardContainer2.innerHTML="";
   cardContainer.innerHTML="";
    cards.forEach(card =>{
        
        const cardBtn = document.createElement('div');
  
        cardBtn.innerHTML =` 
        <div class="card card-compact w-72 h-80 bg-base-100 shadow-xl">
        <figure><img class=" w-80 h-40" src="${card.thumbnail}" /></figure>
        <div class="flex items-start ml-2">
        <div><img class=" w-14 mt-4 rounded-full" src="${card.authors[0].profile_picture}"/> </div>
        <div>
        <div>
         <div class="card-body">
         <h2 class="card-title">${card.title}</h2>
         
         <div class="flex justify-start items-start">
         <p>${card.authors[0].profile_name}</p>
          <p>${card.authors[0].verified ? dynamicImageUrl : ""}</p>
         </div>
         <p>${card.others?.views} views</p>
         </div>
        </div>
        </div>`;
        cardContainer.appendChild(cardBtn);

    })
 }
  loadCard(1000);
  