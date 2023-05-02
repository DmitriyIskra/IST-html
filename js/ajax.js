if(document.querySelector('.select-city')) {
    let selectCity = document.querySelector('.select-city');
    selectCity.addEventListener('change', function (e) {
        console.log(e.target.value);
        console.log(e.target);
    })
}
