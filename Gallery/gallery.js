function expand(img){
  var expandImg = document.getElementByClass('expandedImg');
  var imgText = document.getElementByClass('imgtext');
  var full_bkg = document.getElementByClass('full_bkg');
  expandImg.src = img.src;
  imgText.innerHTML = img.alt;
  expandImg.parentElement.style.display = "block";
//  full_bkg.classList.remove("hide_bkg");
}

//find all list elements//
let list = document.querySelectorAll('.list');
//find all the containers//
let itemBox = document.querySelectorAll('.column');
//iterate through all the list elements//
for(let i = 0; i<list.length; i++){
  //Add he handle to wait for the click, outputs a function when the click happens//
    list[i].addEventListener('click', function(){
      //iterate through the list and remove the active button//
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        //add active to the classlist being selected//
        this.classList.add('active');
//define variable known as dataFilter which takes te data filter attribute from the selected element//
        let dataFilter = this.getAttribute('data-filter');
//iterate through the actual content//
        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}
