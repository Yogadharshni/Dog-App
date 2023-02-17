async function dogs(){
    const url= await fetch('https://dog.ceo/api/breeds/list/all')
    const data=await url.json()
   dropDownList(data.message)
}  
dogs()

//creating dropdown list box by using above data
function dropDownList(val){
    document.querySelector('.dropdown').innerHTML=`
    <select onchange="getImg(this.value)">
      <option>Choose a Dog Breed</option>
      ${Object.keys(val).map(function(breed){
        return `<option>${breed}</option>`
      }).join('')}
    </select>
    `
}

//creating a func to add image using a new api and above selected value
async function getImg(breed){
    if(breed!='Choose a Dog Breed'){
        const url = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data= await url.json()
        addImg(data.message)
    }
}

function addImg(image){
    document.querySelector('.imgdiv').innerHTML=`
     <img src="${image[0]}">
    `

}