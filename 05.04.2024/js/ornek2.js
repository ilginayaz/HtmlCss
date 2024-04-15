document.querySelectorAll('[id^="item-letter-"]').forEach((value) => {
    value.innerHTML = "";
});

document.addEventListener('keydown',Yaz);

var sayac = 1;
var idNumber;
function Yaz(e){
    //console.log(sayac);

    console.log(e);

    if(0<sayac && sayac <= 5)
    {
        //console.log(sayac);
        if(
            (e.keyCode >= 65 && e.keyCode <= 90) || 
            (e.keyCode >= 97 && e.keyCode <= 122) ||
            (e.keyCode == 252 || e.keyCode == 220) ||
            (e.keyCode == 287 || e.keyCode == 286) ||
            (e.keyCode == 351 || e.keyCode == 350)||
            (e.keyCode == 231 || e.keyCode == 199)||
            (e.keyCode == 246 || e.keyCode == 214)||
            (e.keyCode == 304 || e.keyCode == 305)
            ){
            // console.log(e);
    
            var id = document.querySelector('div[class="row mb-1 active"]')?.id;

            idNumber = id?.split('-')[1];
            //console.log(idNumber);

            var colId = `item-letter-${idNumber}${sayac}`;

            var element = document.getElementById(colId);
            if(element != null)
                element.innerHTML = e.key;

            sayac++;
        }
        else{
            console.log(sayac);
            if(e.keyCode == 8){
                sayac--;
                var colId = `item-letter-${idNumber}${sayac}`;
                //console.log(colId);
                var element = document.getElementById(colId);
                //console.log(element);
                if(element != null)
                    element.innerHTML = "";
            }
        }
    }
    else
    {
        if(e.keyCode == 8){
            sayac--;
            if(sayac < 0){
                sayac = 1
            }
            else
            {
                var colId = `item-letter-${idNumber}${sayac}`;
                //console.log(colId);
                var element = document.getElementById(colId);
                //console.log(element);
                if(element != null)
                    element.innerHTML = "";
            }

            
        }
    } 
    
    if(e.keyCode == 13){

        var text = "";

        document.querySelectorAll('[id^="item-letter-1"]').forEach((value)=>{
            text += value.innerHTML;
        });

        alert(text);
    }
}

// 252 => ü
// ornek2.js:13 287 => ğ
// ornek2.js:13 305 => ı
// ornek2.js:13 231 => ş
// ornek2.js:13 246 => ç