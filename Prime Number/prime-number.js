for (var sayı=2;sayı<=100;sayı++){
    var sonuc=true;
    for(var i=2;i<sayı;i++){
        if(sayı%i==0){
            sonuc=false;
            break
        }
    }
    if(sonuc){console.log(i)}
}
    