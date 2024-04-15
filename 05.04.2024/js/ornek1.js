//document.querySelectorAll('')
document.querySelectorAll('.pagination a[class="page-link"][data-link-number]')
        .forEach((value,key, parent) => {
            value.addEventListener('click',LinkTikla);
        });

function LinkTikla(){
    console.log(this.dataset.linkNumber);

    var id = this.dataset.linkNumber;

    document.querySelector('.pagination a[class="page-link active"]')?.classList.remove('active');

    document.querySelector('.accordion-body#info div[class="card-body show"]')?.classList.add('hide');
    document.querySelector('.accordion-body#info div[class="card-body show hide"]')?.classList.remove('show');

    //console.log(`.accordion-body#info div[class="card-body hide"][id="${id}"]`);

    document.querySelector(`.accordion-body#info div[class="card-body hide"][id="${id}"]`)?.classList.add("show");

    document.querySelector(`.accordion-body#info div[class="card-body hide show"][id="${id}"]`)?.classList.remove('hide');


    this.className += " active";
}