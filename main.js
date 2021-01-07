$(document).ready(() => {
    let ancho = $('#ancho');
    let largo = $('#largo');

    let l_lamina = $('#l_lamina');
    let a_lamina = $('#a_lamina');
    let l_estructura = $('#l_estructura');
    let d_omegas = $('#l_estructura');
    let d_viguetas = $('#d_viguetas');
    let d_puntillas = $('#d_puntillas');

    let l_laminaVal = parseFloat(l_lamina.val());
    let a_laminaVal = parseFloat(a_lamina.val())/100;
    let l_estructuraVal = parseFloat(l_estructura.val());
    let d_omegasVal = parseFloat(d_omegas.val())/100;
    let d_viguetasVal = parseFloat(d_viguetas.val());
    let d_puntillasVal = parseFloat(d_puntillas.val())/100;

    l_lamina.on('input', () => updateConfig());
    a_lamina.on('input', () => updateConfig());
    l_estructura.on('input', () => updateConfig());
    d_omegas.on('input', () => updateConfig());
    d_viguetas.on('input', () => updateConfig());
    d_puntillas.on('input', () => updateConfig());

    function updateConfig() {
        l_laminaVal = parseFloat(l_lamina.val());
        a_laminaVal = parseFloat(a_lamina.val())/100;
        l_estructuraVal = parseFloat(l_estructura.val());
        d_omegasVal = parseFloat(d_omegas.val())/100;
        d_viguetasVal = parseFloat(d_viguetas.val());
        d_puntillasVal = parseFloat(d_puntillas.val())/100;
        calcular();
    }

    // calcular();

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
        let angulos = Math.ceil(perimetro / l_estructuraVal);
        let omegas = Math.ceil((largoVal*d_omegasVal)*(anchoVal*l_estructuraVal));
        let viguetas = Math.ceil((anchoVal*d_viguetasVal)*(largoVal*l_estructuraVal));
        let cornizas = Math.ceil(perimetro/l_laminaVal);
        let laminas = Math.ceil(area/(l_laminaVal*a_laminaVal));
        let tornillos_negros = Math.ceil(omegas*10);
        let tornillos_lenteja = Math.ceil(laminas*10);
        let puntillas = Math.ceil(perimetro / .3);
        let uniones = Math.ceil((largoVal / l_laminaVal) * (anchoVal / l_laminaVal));
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

    $('.config-icon').click(() => {
        $('.config').toggleClass('hidden');
    });

    $('#cerrar-config').click(() => {
        $('.config').toggleClass('hidden');
    });

    $('.rotate-icon').click(() => {
        let temp = ancho.val();
        ancho.val(largo.val());
        largo.val(temp);
        calcular();
    });
});
