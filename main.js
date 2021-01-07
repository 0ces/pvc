$(document).ready(() => {
    let ancho = $('#ancho');
    let largo = $('#largo');
    calcular();

    ancho.on('input', () => {
        validateEntry(ancho);
        calcular();
    });

    largo.on('input', () => {
        validateEntry(largo);
        calcular();
    });

    function validateEntry(entry) {
        if(entry.val() > 0){
            entry.removeClass('invalid');
        } else {
            entry.addClass('invalid');
        }
    }

    function calcular() {
        let anchoVal = parseFloat(ancho.val());
        let largoVal = parseFloat(largo.val());
        let perimetro = Math.ceil(2*(anchoVal+largoVal));
        let area = anchoVal*largoVal;
        let angulos = Math.ceil(perimetro / 2.44);
        let omegas = Math.ceil((largoVal*.8)*(anchoVal*2.44));
        let viguetas = Math.ceil((anchoVal*.45)*(largoVal*2.44));
        let cornizas = Math.ceil(perimetro/5.95);
        let laminas = Math.ceil(area/1.785);
        let tornillos_negros = Math.ceil(omegas*10);
        let tornillos_lenteja = Math.ceil(laminas*10);
        let puntillas = Math.ceil(perimetro / .3);
        let uniones = Math.floor((largoVal / 5.95) * (anchoVal / 5.95));
        $('#perimetro').text(perimetro);
        $('#area').text(area);
        $('#angulos').text(angulos);
        $('#omegas').text(omegas);
        $('#viguetas').text(viguetas);
        $('#cornizas').text(cornizas);
        $('#laminas').text(laminas);
        $('#tornillos_negros').text(tornillos_negros);
        $('#tornillos_lenteja').text(tornillos_lenteja);
        $('#puntillas').text(puntillas);
        $('#uniones').text(uniones);
    }
})
