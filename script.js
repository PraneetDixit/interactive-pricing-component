let viewArr = ["10K", "50K", "100K", "500K", "1M"]
let priceArr = [8, 12, 16, 24, 36];


function getAnnual(base){
    return base - base*25/100;
}

function setPrice(num){
    document.getElementById("views").textContent = `${viewArr[num]} PAGEVIEWS`; 
    document.getElementById("basePrice").textContent = `\$${priceArr[num]}.00`;
    if(document.getElementById("tog").checked){
        document.getElementById("basePrice").textContent = `\$${getAnnual(priceArr[num])}.00`;
    }
}

document.getElementById("priceRange").addEventListener("input", function(e){
    setPrice(e.target.value);
    setGradient(e.target);
});

document.getElementById("tog").addEventListener("input", function(e){
    setPrice(document.getElementById("priceRange").value);
});

function setGradient(data) {
  var value = ((data.value)/(data.max)*100)+0.5;
  data.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`
};