
//find all list elements//
let list = document.querySelectorAll('.list');
//find all the containers//
let itemBox = document.querySelectorAll('.container-whole');
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
//
let drop = document.querySelectorAll('.drop-icon');
let more_info = document.querySelectorAll('.more-information');
let expand_box = document.querySelectorAll('.container-whole');


for (let i=0; i<drop.length; i++){
  drop[i].addEventListener('click', function(){
    if(more_info[i].classList.contains('hide_drop')){
      more_info[i].classList.remove('hide_drop');
      expand_box[i].classList.remove('hide_info');
    } else {
      more_info[i].classList.add('hide_drop');
      expand_box[i].classList.add('hide_info');
    }
  })
}
