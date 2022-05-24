function megstu() {
    return 'Mėgstu programuoti. Yey! ';
}
var tekstas = megstu();
var blokas = document.createElement('div');
blokas.innerHTML = tekstas;

document.body.appendChild(blokas);


function vaisiai(kaina, pavadinimas) {
    var kainaVaisiaus = kaina * 5;

    return "Penkių " + pavadinimas + " kaina yra " + kainaVaisiaus  + "€";
}
    // console.log(vaisiai(2, 'obuoliai'));
 var rezultatas = vaisiai(3, 'vyšnių');
 var divas = document.createElement('div');
 divas.innerHTML = rezultatas;

 document.body.appendChild(divas);