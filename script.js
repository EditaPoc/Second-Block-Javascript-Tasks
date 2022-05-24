function megstu() {
    return 'Mėgstu programuoti. Yey! ---- ';
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
 


 var button = document.getElementById('skaiciuoti');
 button.addEventListener('click', function() {
     var pav = document.getElementById('name').value;
     var kaina = document.getElementById('price').value;
     var kiekis = document.getElementById('quantity').value;
    //  console.log(pav, kaina, kiekis);

     var suma = kaina * kiekis;
    //  console.log(suma);
    var divas2 = document.createElement('div');
    divas2.innerHTML = 'Pirkote ' + kiekis + 'vnt.' + pav + '. Vaisiaus kaina ' + kaina + '€. Mokėtina suma: ' + suma + '€.';
    // console.log(divas2);
    document.body.appendChild(divas2);
 });


 
 //1. susikurti masyvą
 //2. atvaizduoti masyvą html'e per foreach
 //3. kaip gauti lyginį skaičių
 //4. atvaizduoti į ekraną spalvotai
 
 var heroes = [
     {
         name: 'Snieguolė',
         characteristic: 'graži',
     },
     {
         name: 'Geležinis žmogus',
         characteristic: 'gelbėtojas',
     },
     {
         name: 'Šrekas',
         characteristic: 'gąsdina žmones',
     },
     {
         name: 'Fiona',
         characteristic: 'princesė',
     },
 ];

 heroes.forEach(function (element, index) {
     var orEven = index + 1;

     if (orEven % 2 == 0) {
        //  console.log(orEven);
        var block2 = document.createElement('div');
        block2.innerHTML = element.name + ' - ' + element.characteristic;
        block2.style.backgroundColor = '#3498db';
        block2.style.color = 'white';
        block2.style.width = '200px';
        document.body.appendChild(block2);
     } else {
        var block2 = document.createElement('div');
        block2.innerHTML = element.name + ' - ' + element.characteristic;
        document.body.appendChild(block2);
     }
 });