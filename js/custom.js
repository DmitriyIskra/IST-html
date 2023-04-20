
  
  // три слайда
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slideToClickedSlide: true,
    freeMode: true,
    watchSlidesProgress: true,
  });
  // Большой слайд
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  //     controller: {
  //   inverse: true,
  // }  
  });

  swiper.on('click', a)


$(document).ready(function () {
  let tabsItem = $('.tabs__item');
  let contentItem = $('.content__item');

  tabsItem.on("click", function (event){
      let activeContent = $(this).attr("data-target");
      tabsItem.removeClass("tabs__item--active");
      contentItem.removeClass("content__item--active"); 
      $(activeContent).toggleClass("content__item--active");
      $(this).addClass("tabs__item--active")
  });
});


if(document.querySelector('.selectpicker') !== null) {
$('.selectpicker').selectpicker();
}

/*видео*/

$('#exampleModalCenter').on('shown.bs.modal', function (event) {
  $(".myvideo").get(0).currentTime = 0
  $(".myvideo").get(0).play();

})

$(document).ready(function() {
  $(".close").on("click", function(event) {
    $(".myvideo").get(0).currentTime = 0        
  }).on('click', function(event) {
    $(".myvideo").get(0).currentTime = 0
    $(".myvideo").get(0).pause();
  });
})

$('#exampleModalCenter').on('hidden.bs.modal', function (event) {
  $(".myvideo").get(0).currentTime = 0
  $(".myvideo").get(0).pause();
})


 function divFromTable () {

  if(document.getElementById("table_transform")) {
    let table_in = document.getElementById('table_transform'),
      table_out =  document.getElementById('for_'+'table_transform'),
      arr_table = [],
      tab_content = [],
      inf_out = "";
    
    if(table_in && table_out) { 
    
      let r = 0;
      
      while(row = table_in.rows[r++])    
      {
          arr_table[r-1] = [];
          let c = 0;
          
          while(cell=row.cells[c++])        
          {
              arr_table[r-1][c-1] = cell.innerHTML.trim();           
          }    
      }
      
      
      let last_row = arr_table.length - 1;
      
      arr_table.forEach(function(elem, ind) {
      
          if(ind == 0) {
              inf_out += '<ul class="mini-tabs mt-1 nav-justified">';
    
              elem.forEach(function(elem2, ind2) {
                  let active_sufix = (ind2 == 0) ? " tabs__item--active" : "";
                  let active_tab_sufix = (ind2 == 0) ? " content__item--active" : "";
                  
                  tab_content[ind2] = '<div class="content__item'+ active_tab_sufix +'" id="subtab'+ind2+'" role="tabpanel" aria-labelledby="home-tab"><div class="ranch-col-body">';
                  inf_out += '<li class="tabs__item'+ active_sufix +'" data-target="#subtab'+ind2+'">'+elem2+'</li>';
              })
              
              inf_out += '</ul>';
          }
          
          if(ind == 1) {
              inf_out += '<div class="col-xl-4 col-md-4 col-sm-12 ranch-col tab-content desctop-off" id="TabContent">';
              elem.forEach(function(elem2, ind2) {
                  tab_content[ind2] += '<div class="table-img-col">'+elem2+'</div>';
              })
          }
          
          if(ind > 1) {
              if(elem.length == 1) {
                  tab_content.forEach(function(elem2, ind2) {
                      tab_content[ind2] += '<div class="ranch-head"><p class="desctop-off">'+elem+'</p></div>';
                  })
              }
              else {
                  elem.forEach(function(elem2, ind2) {
                      tab_content[ind2] += '<div class="ranch-char"><p>'+elem2+'</p></div>';
                  })
              }
          }
    
          if(ind == last_row) {
              tab_content.forEach(function(elem2, ind2) {
                  inf_out += tab_content[ind2] + '</div></div>';
              })
              inf_out += '</div>';
          }
    
      });
      
      table_out.innerHTML = inf_out;
    }     
    
    // console.log('div из таблицы')    
      
  }  
}

divFromTable();


  document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.querySelector('.form-mask');
    const telSelector = form.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');  
    inputMask.mask(telSelector);
  });

  
  
  