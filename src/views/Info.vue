<template>
    <section class="about">
        <h1 class="main-title">Sorteo del amigo invisible</h1>

        <p class="span-color">- ¿Qué es el amigo invisible?</p>
        <p>El amigo secreto, santa secreto, amigo invisible o angelito es un juego muy popular en el que participan
            varias personas que se hacen regalos entre sí sin saber quién ha sido el que ha hecho cada regalo.</p>
        <br>
        <p>Los amigos secretos pueden enviar cartas anónimas a sus correspondientes amigos, utilizando seudónimos. En
            estas cartas expresan lo que sienten y piensan acerca de su compañero de juego y a la vez comentan siempre
            algo de ellos mismos con el fin de dar pistas sobre su identidad.</p>

        <span class="space"></span>

        <p class="span-color">- ¿Cómo organizar el amigo invisible?</p>
        <p>Normas básicas del método tradicional:</p>
        <p>Lo ideal en este juego, es hacerlo en ocasión de alguna festividad o reunión donde sea usual que se intercambien regalos unos a otros, como por ejemplo en Navidad.</p>
        <br>
        <p>Para prepararlo, es necesario que los participantes se reúnan o se coordinen unas semanas antes de la fecha indicada para la entrega de regalos. El organizador escribe los nombres de todos los participantes en unos papelitos e introduce los nombres de los participantes en una bolsa. Luego, uno por uno, van introduciendo la mano y escogiendo el 'amigo secreto'. Más recientemente se han puesto de moda los sorteos en línea, donde los participantes pueden conocer el nombre de su Amigo Invisible a través de una web, o bien recibirlo por correo electrónico. Esta nueva forma de sorteo evita el problema de tener que reunir a todo el grupo obligatoriamente antes del evento, o coordinarse de otra forma como ser por vía telefónica.</p>
        <br>
        <p>Finalmente, el día acordado, se reúnen todos los participantes del juego y realizan la entrega de regalos, donde cualquier persona (puede empezar el organizador) saca un regalo del saco o lugar donde se han depositado todos los objetos y lo entrega de acuerdo a su tarjeta; el receptor debe abrirlo ante todos y posteriormente proceder de la misma forma. Así sucesivamente hasta terminar con todos los regalos. Al final alguien puede tomar la palabra y hacer un brindis.</p>
        <br>
        <p>En caso de que alguien decida, por el motivo que sea, abandonar el juego, deberá comunicar el nombre de la persona a la que se suponía que tenía que entregar el regalo. De esta forma, el amigo invisible del participante que abandone el juego se convertirá en el amigo invisible de dicha persona sin que sea necesaria una reorganización total.</p>

        <span class="space"></span>

        <p class="span-color">- Ventajas de realizar el sorteo del amigo invisible online</p>
        <p>Nuestra misión en <span><router-link class="span-color" to="/">amigoinvisible.net</router-link>
        </span> es la de ofrecerte la posibilidad de realizar el tradicional sorteo del amigo invisible de manera remota y online.
        De esta forma podrás realizarlo en cualquier lugar.</p>
        <br>
        <p>Preparar el sorteo usando esta aplicaicón web te garantiza un 100% de aleatoriedad, podrás estar tranquilo de que nadie ha hecho trampas por detrás ya que es una inteligencia artificial quien genera el sorteo 😉</p>
        <p>Recuerda que cada participante recibirá un mail con el resultado, y solo él lo podrá ver.</p>

        <span class="space"></span>

        <p class="span-color">- Descubriendo el amigo invisible</p>
        <p>Para la fecha de entrega de regalos se pueden preparar varias actividades que tienen como finalidad dar a conocer la persona que corresponde al amigo secreto. Este juego puede tener algunas variantes, por ejemplo, en Colombia se usa el amigo secreto, también endulzándose hasta que llega la fecha para descubrir quién es esa persona que debe hacerte el regalo, con caramelos, bombones, frutas y otras delicias. Y además, para hacer más interesante el momento del descubrimiento, se puede jugar a hacer mímica sobre la forma de caminar, sentarse, o algún gesto especial que identifique fácilmente a esa persona.</p>
        <br>
        <p>En amigoinvisible.net estamos trabajando para que cada usuario pueda enviar mensajes anónimos a la persona que le ha tocado hacer el regalo, para dar un poco de suspense al juego. Muy pronto contaremos más</p>

        <span class="space"></span>
        
        <!-- BUTTONS -->
        <div class="draw-actions">
            <button class="primary-button-link" @click="$router.push('/')">
                <span>Jugar</span>
            </button>
            <button class="primary-button-link" @click="$router.push('regalos-amigo-invisible')"><span>Ver
                    regalos</span></button>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
p.span-color {
    font-size: 1.5rem;
}

.space {
    display: block;
    margin: 2rem 0;
}
</style>