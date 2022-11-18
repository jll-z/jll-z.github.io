// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 44.82303273483812, lng:  0.2619604748633373 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
    backgroundColor: 'none'
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

let drop = document.querySelectorAll('.drop-icon');
document.write(drop);
let info = document.querySelectorAll('.expandInfo');

for(let i=0; i<drop.length; i++){
  drop[i].addEventListener('click', function(){
    if(info[i].classList.contains('hide_drop')){
      info[i].classList.remove('hide_drop');
      for(let j=0; j<drop.length; j++){
        if(j!=i){
          info[j].classList.add('hide_drop');
        }
      }
    }else{
      info[i].classList.add('hide_drop');
    }

  })
}
