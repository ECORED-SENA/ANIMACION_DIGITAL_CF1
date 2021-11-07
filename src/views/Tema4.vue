<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 4
      h1  Esquemas de narración

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/N9E7YIGP360" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mt-5.mb-5.text-center  Antes de hablar de las distintas estructuras narrativas, es necesario denotar los elementos básicos de una historia: trama, conflicto, personajes y escenario.

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex(data-aos="flip-left")
        .tarj_bg1.p-5
          img.mb-5.img-a(src='@/assets/curso/tema_4/img_1.svg', alt='Texto que describa la imagen')
          h4.text-center Trama
          p.text-center.mb-0 Forma en que se relatan los acontecimientos que suceden dentro de la historia, es decir, su estructura narrativa. 
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex(data-aos="flip-right")
        .tarj_bg2.p-5
          img.mb-5.img-a.mt-5(src='@/assets/curso/tema_4/img_2.svg', alt='Texto que describa la imagen')
          h4.text-center Conflicto
          p.text-center.mb-0 Obstáculos o problemas que se oponen a los objetivos del protagonista.
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex(data-aos="flip-left")
        .tarj_bg3.p-5
          img.mb-5.img-a(src='@/assets/curso/tema_4/img_3.svg', alt='Texto que describa la imagen')
          h4.text-center Personajes
          p.text-center.mb-0 Seres que llevan a cabo las acciones dentro de la historia. Usualmente son personas, pero pueden ser también criaturas, animales u objetos dotados de personalidad.
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex(data-aos="flip-right")
        .tarj_bg4.p-5
          img.mb-5.img-a(src='@/assets/curso/tema_4/img_4.svg', alt='Texto que describa la imagen')
          h4.text-center Escenario
          p.text-center.mb-0 Es todo el mundo que se crea para contar la historia.

    p(data-aos="fade-down").text-center El objetivo de una estructura narrativa es permitir que una historia sea clara y capture la atención del público receptor (Castillo, 2013).

    separador
    #t_4_1.titulo-segundo(data-aos="fade-right")
      h2 4.1 Modelo Aristotélico y el paradigma

    p.mb-5(data-aos="fade-right") Ambos modelos se pueden contemplar como un mismo tipo de estructura dramática, teniendo en cuenta que tanto el modelo estudiado por el filósofo Aristóteles en su libro “La Poética”, como “El Paradigma” planteado por Syd Field, se basan en la narración de una historia en 3 actos principales: presentación (acto I) , confrontación (acto II) y resolución del conflicto principal (acto III); sin embargo, “El Paradigma” podría entenderse como una extensión del modelo aristotélico, dado que los actos están divididos por puntos argumentales o plot points, los cuales son acontecimientos que cambian radicalmente el sentido de la acción (Baiz, s.f.).

    img.mb-5.img-a(src='@/assets/curso/tema_4/img_5.png', alt='Texto que describa la imagen')(data-aos="fade-left")

    p.text-center.mb-5(data-aos="slide-left") Esquema narrativo en 3 actos por Syd Field. Tomado del libro: El Manual del Guionista (1995).

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-7
        p.text-center
          strong Para este momento, se analizará brevemente la película animada “Tierra de Osos” de Disney (2003), con el fin de identificar cada uno de los momentos narrativos explicados a continuación:

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-10
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Planteamiento")
            p Es la presentación inicial que permite contextualizar la historia dentro del espacio-tiempo, identificar los personajes y exponer el problema principal. Es bueno responder a las preguntas: ¿quién o quiénes? ¿dónde? ¿cuáles son las circunstancias actuales? El primer plot point que cierra el acto I, puede designarse como conflicto, el cual rompe el equilibrio inicial y constituye el primer punto de giro.

            p En Tierra de Osos todo comienza con el ritual de hombría de Kenai (protagonista), el cual desea desesperadamente convertirse en un hombre. Luego aparece un plot point, donde muere su hermano mayor a causa de un incidente con un oso, del cual él es culpable. Esto motiva a Kenai a buscar venganza hasta cegar la vida de un oso, lo que genera un cambio de forma de humano a oso.
          .row(numero="2" titulo="Confrontación")
            p También conocido como el nudo de la historia. Allí se presentan los obstáculos que se oponen a los objetivos del protagonista. Resulta útil preguntarse ¿qué es lo peor que le puede ocurrir al protagonista? ¿qué lo llevaría a un punto de quiebre? Como lo escribe Andrea del Pilar Castillo: “El conflicto constituye el detonante de la historia planteando el problema central que el personaje deberá resolver de una u otra forma al final”. ¿Conseguirá el protagonista su objetivo? (Castillo, 2013). Este desarrollo narrativo aborda una serie de peripecias o situaciones adversas que vienen de repente y afectan directamente al protagonista.

            p Kenai convertido en oso, emprende un viaje hacia la montaña donde podrá encontrarse con el espíritu de su hermano Sitka. En este viaje se encuentra con Koda, un osezno que le enseñará el valor del amor y la hermandad. Por otra parte, Tug el otro hermano de Kenai, decide buscar venganza por la pérdida de sus hermanos a manos de un oso. El segundo plot point se da cuando Koda cuenta la historia de cómo su madre lo defendió de un cazador.
          .row(numero="3" titulo="Resolución")
            p Se centra en la solución del problema, pero antes el protagonista deberá enfrentar el conflicto. Durante dicho momento la intensidad dramática llega a su punto más alto, el cual es conocido como clímax. Tras dicho momento, viene el desenlace, que brinda un nuevo equilibrio y el cambio del protagonista después de superar el conflicto (Castillo, 2013). Se debe responder: ¿Cuál es la solución de la historia? ¿el protagonista vive o muere? ¿triunfa o fracasa? (Field, 1995).

            p Kenai se enfrenta a su hermano Tug que trata de matarlo. Koda entra en escena para defender a Kenai, pero al estar en peligro el pequeño oso, Kenai lo protege con su vida. Es allí donde todo se resuelve, Kenai vuelve a ser humano y se reencuentran los 3 hermanos. Kenai comprende el significado de su totem y decide cuidar del pequeño Koda, renunciado a su vida como humano, sellando así su ritual de hombría.

            p Una película puede tener varios plot points que le ayuden a intensificar el drama. Se pueden manejar 2 en el acto I, más de 10 en el acto II y 1 en el acto III. Sin embargo, para que la historia funcione, se deben tener claros los 4 componentes básicos: inicio, final y los dos plot points (Field, 1995).


    separador
    #t_2_2.titulo-segundo(data-aos="flip-up")
      .h4 2.2 El viaje del héroe

    p.mb-5(data-aos="flip-up") Este modelo, también conocido como Monomito, surge del trabajo de Joseph Cambell y más tarde, del escritor hollywoodense Christopher Vogler. Cambell recogió cientos de mitos y leyendas de diferentes culturas y descubrió 17 puntos en común, los cuales plasmó en su libro “El héroe de las mil caras” (1949). Vogler, inspirado por el trabajo de Cambell, escribió el libro “El viaje del escritor”, en el cual adaptó el lenguaje académico de Campbell para la industria del cine (Cubero, 2017). Este arquetipo se compone por 12 etapas:



    ImagenInfografica.color-acento-contenido.mb-5(data-aos="flip-up")
      template(v-slot:imagen)
        figure
          img.img-a(src='@/assets/curso/tema_4/img_6.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="48.3%" y="29.1%", color="color-primario")
        .h5.mb-2 1. Mundo ordinario
        p Se presenta el héroe, descubriendo sus ambiciones y limitaciones; de igual forma se aprende de su mundo, antes que la aventura comience. Esta etapa busca que el espectador se identifique con el protagonista. Por ejemplo, en Star Wars, se puede observar a Luke Skywalker como granjero en Tatooine. (Voytilla, 1999)


      .tarjeta.color-acento-botones.p-3(x="54.3%" y="32.2%")
        .h5.mb-2 2. Llamada a la aventura
        p Algo pasa para alterar el mundo del héroe, para amenazar su vida como la conoce. Se pone en marcha la historia y se presenta una aventura o búsqueda que debe emprender el protagonista. En Star Wars, el mensaje traído por los androides de parte de la princesa Leia.


      .tarjeta.color-acento-botones.p-3(x="59%" y="39.2%")
        .h5.mb-2 3. Rechazo a la llamada
        p El protagonista o héroe se resiste al cambio del mundo ordinario, seguramente por sus inseguridades y temores. Se busca mostrar los riesgos y peligros que hacen parte de la aventura. En Star Wars, Luke rechaza el llamado poniendo como excusa su labor en la granja de sus tíos.


      .tarjeta.color-acento-botones.p-3(x="60.5%" y="49.1%")
        .h5.mb-2 4. Encuentro con el mentor
        p Una persona sabia aparece con el fin de convencer al héroe de aceptar el llamado, mostrarle el camino, entrenarlo y brindarle toda la experiencia que necesita para vencer. Obi-Wan y Yoda se convierten en los mentores de Luke.


      .tarjeta.color-acento-botones.p-3(x="59%" y="59%")
        .h5.mb-2 5. Cruzando el umbral
        p Finalmente, el héroe está comprometido con la aventura, está preparado para abandonar el mundo ordinario y adentrarse en los riesgos del mundo especial; punto del cual no habrá retorno. Para el ejempl7o de Star Wars, Luke acepta el llamado y junto a Obi-Wan llegan al puerto espacial Mos Aisley.


      .tarjeta.color-acento-botones.p-3(x="54.4%" y="66.5%")
        .h5.mb-2 6. Pruebas, aliados y enemigos
        p Es la iniciación del héroe al nuevo mundo especial al que se ha adentrado. Vive diferentes pruebas, conoce aliados y se enfrenta a sus enemigos. El protagonista tendrá que prepararse por sí solo o pedir mayor entrenamiento a su mentor para lograr sobreponerse a las adversidades. En Star Wars, Luke se encuentra con Han Solo y Chewbacca y tiene la necesidad de ser entrenado por Yoda.

      .tarjeta.color-acento-botones.p-3(x="48.2%" y="69%")
        .h5.mb-2 7. Acercamiento a la caverna más profunda
        p Después de muchas dificultades, el héroe se acerca a la guarida del mal supremo. Es el momento donde el héroe se prepara para la batalla central. Se puede ver en Star Wars, tras la incursión a la Estrella de la Muerte.

      .tarjeta.color-acento-botones.p-3(x="42.2%" y="66.4%")
        .h5.mb-2 8. La gran prueba o la odisea
        p El héroe se encuentra cara a cara con su enemigo principal, un momento de vida o muerte, a tal punto que experimenta o causa la muerte. Para Star Wars se tiene el momento donde Luke rescata a la princesa Leia y ve morir a su mentor.

      .tarjeta.color-acento-botones.p-3(x="37.6%" y="59%")
        .h5.mb-2 9. La recompensa
        p El héroe ha sobrevivido a la muerte y ha vencido sus más grandes temores. Debido a su valeroso acto, adquiere el “elixir” o respuesta al problema que inició la aventura. En Star Wars, la recompensa es “La Fuerza” que adquiere Luke, lo cual será la clave para destruir al Imperio.


      .tarjeta.color-acento-botones.p-3(x="36%" y="49%")
        .h5.mb-2 10. El camino de vuelta
        p El héroe ya ha adquirido el premio, sin embargo, debe escapar de los peligros del mundo especial para volver a casa. En ejemplo de Star Wars, esta fase se une con la fase 8 (La gran prueba), pues una vez Luke rescata a la princesa, deben enfrentarse a muchos enemigos para lograr escapar.


      .tarjeta.color-acento-botones.p-3(x="37.4%" y="39%")
        .h5.mb-2 11. La resurrección
        p Otra prueba donde el héroe se enfrenta a la muerte y debe usar todo lo aprendido. El personaje ya ha cambiado, pues tiene experiencia y ha enfrentado sus miedos. En este punto se puede dar nuevamente una lucha contra el mal supremo, pero ahora va más allá de la vida del héroe, el cual se sacrifica por el bien de otros. Por ejemplo, Luke arriesga su vida en el último intento de destruir La Estrella de la Muerte y lo logra.


      .tarjeta.color-acento-botones.p-3(x="42%" y="31.6%")
        .h5.mb-2 12. Volver con el elixir
        p El mundo del héroe se salva o él vuelve con el elixir para beneficiar a los suyos en el mundo ordinario. En la mayoría de las historias, esta fase completa el círculo del viaje, donde se restaura el balance en el mundo ordinario y el héroe comienza una nueva vida influenciado por su travesía. Al final, Luke Skywalker en Star Wars, se convierte en Jedi y devuelve el equilibrio a “La Fuerza”.
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.img-a(src='@/assets/curso/tema_4/img_7.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Este arquetipo narrativo, además de ser un viaje físico, es un viaje espiritual, donde el protagonista pasa de la inexperiencia a la destreza, del temor a la seguridad, y del egoísmo al servicio. El objetivo central es el descubrimiento interior del héroe (Cubero, 2017).


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
