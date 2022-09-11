addEventListener(`DOMContentLoaded`, () =>{
    const contadores = document.querySelectorAll(`.contador_cantidad`);
    const velocidad = 5000;

    const animarContadores = () =>{
        for (const contador of contadores) {
            const actualizar_contador = () =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima /velocidad;

                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento);
                    setTimeout(actualizar_contador, 60);
                }else{
                    contador.innerText = cantidad_maxima;
                }
            }
            
        actualizar_contador();

        }

    }

    animarContadores();
})