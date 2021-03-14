
let lastC;

function Next(){

    let c = Math.floor((Math.random() * 10) + 1);
    let quote = document.getElementById("quote");

    
    

    if(c == lastC){
        c = Math.floor((Math.random() * 10) + 1);
    }

    switch(c){

        case 1:
            quote.innerHTML = "Yes";
            break;
        case 2:
            quote.innerHTML = "No";
            break;
        case 3:
            quote.innerHTML = "Maybe";
            break;
        case 4:
            quote.innerHTML = "Impossible";
            break;
        case 5:
            quote.innerHTML = "Possible";
            break;
        case 6:
            quote.innerHTML = "Theres a small chance";
            break;
        case 7:
            quote.innerHTML = "Never";
            break;
        case 8:
            quote.innerHTML = "100% Yes";
            break;
        case 9:
            quote.innerHTML = "Nah.";
            break;
        case 10:
            quote.innerHTML = "Of course";
            break;
        
    }
    lastC =  c;

    
}