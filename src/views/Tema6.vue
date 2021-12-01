<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 6
      h1 Guión

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/brbK4OcuYoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="flip-up") El guión es un documento escrito donde se consigna la historia haciendo uso de una estructura que la separa en secuencias y escenas determinando los fragmentos narrativos que deben desarrollarse para contarla, contiene primordialmente la descripción de acciones, diálogos y entornos donde sucede la acción, también puede contener elementos que apoyen la historia como uso de sonidos y efectos, pero dado que no hay un único estándar estos últimos aspectos así como otros no contemplados pueden quedar a discreción del guiónista.

    separador
    #t_6_1.titulo-segundo(data-aos="flip-up")
      .h4 6.1 El guión en la animación

    .row.align-items-center.px-5
      .col-lg-12.mb-4.mb-lg-0
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/tema_6/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Al tomar la animación como vehículo para la narración se abre un abanico de posibilidades infinitas, pues, aunque comparte con estas algunas convenciones narrativas, no está supeditada al funcionamiento real del mundo permitiendo plantear panoramas y situaciones que son muy difíciles de crear en el mundo real (o incluso imposibles). Un ejemplo de esto es la película Avatar que aunque no es del género de animación, hace uso de esta para crear su universo, a pesar de que su guión fue concebido desde 1994 para iniciar su rodaje luego de la finalización de Titanic y ser estrenada en 1999, su director James Cameron determinó que la tecnología de la época no le permitiría realizar la visión que tenía para la película, razón por la cual la producción reinicio en 2005 para llegar a su estreno en 2009, causando gran revuelo y convirtiéndose en una de las películas más taquilleras de la historia.
        
        p.cajon-b.color-secundario.p-3.mb-5(data-aos="slide-right") Lo anterior sirve para evidenciar cómo la animación permite contar historias que no serían posibles de otras formas, sin embargo, es muy importante establecer desde el principio la visión que se desea lograr, ahí radica la importancia del guión, aunque no es una camisa de fuerza, si se constituye como una mara que permite trazar un rumbo para la producción.

        p.mb-5(data-aos="slide-left") En concordancia, para establecer una estructura narrativa es importante introducir una serie de elementos contextuales que ayuden a construir las leyes de la historia, aspectos como la ubicación geográfica, la temporalidad, quiénes son los protagonistas, cuánto dura la pieza audiovisual y la historia en sí; pues todos estos factores afectan directamente a la estructura narrativa y brindan herramientas y restricciones para desarrollar el relato y por tanto, hacer buen uso de las posibilidades del género animado.   

        .row.justify-content-center.mb-5(data-aos="slide-right")
          .col-lg-10
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Tema")
                p Escoger una idea para desarrollar una historia a partir de ella, puede ser una tarea difícil, la clave está en reconocer que es una buena idea y que básicamente es aquella que da la posibilidad de contar una historia interesante. Aunque inicialmente parece algo ambiguo, no lo es tanto, ya que pensar en la historia que se puede generar a partir de la idea, permite discernir si la narración puede o no ser atractiva.

                p Generalmente las mejores ideas nacen de experiencias, aunque también pueden surgir de conocimientos tanto propios como ajenos que generen el interés suficiente para querer contar algo a partir de ellos. Ya sea un caso u otro, es fundamental tratar de saber todo lo posible sobre ese tema y de esta forma validar los conocimientos y adquirir nuevas perspectivas que contribuyan a plantar unos cimientos fuertes sobre los cuales fundamentar la historia.  
              .row(numero="2" titulo="<em>Logline</em>")
                p El #[i logline] es una frase atractiva que busca cautivar la atención de un posible productor, existe dada la escasez de tiempo de los ejecutivos del cine y resume en una o dos oraciones todos los elementos importantes de la obra; mediante el #[i logline] se puede validar rápidamente si la historia funciona o no.
              .row(numero="3" titulo="Premisa")
                p La premisa es una proposición concentrada en una frase mediante la cual se afirma o niega algo y presenta una conclusión. Según el autor Lajos Egri “una buena premisa es una sinopsis exacta de su drama” y se compone de 3 partes:
                ul.lista-ul--color.mb-5
                  li 
                    i.lista-ul__vineta
                    | En la primera parte presenta al protagonista de la historia, en la segunda se enuncia el conflicto que se va a desarrollar y en la parte final se muestra el desenlace de ese conflicto o la conclusión.

                  li 
                    i.lista-ul__vineta
                    | Como ejemplo la siguiente podría ser la premisa de Shrek:

                  li 
                    i.lista-ul__vineta
                    | Un ogro se embarca en una aventura para recuperar su hogar y en el proceso descubre el amor.
              .row(numero="4" titulo="<em>Storyline</em>")
                p En el #[i storyline] se presenta el argumento dramático de la historia sintetizado, en él se expone el planteamiento de la historia, el nudo y su desenlace en uno o dos párrafos, esto quiere decir que se añaden más detalles con respecto a la premisa, pero aún falta desarrollo para llegar a convertirse en un guión.

                p 
                  strong Para continuar con el ejemplo, el siguiente sería el #[i storyline] de #[i Shrek]:

                p Un ogro gruñón que disfruta vivir en soledad, un día encuentra el pantano donde vive invadido por criaturas de cuentos de hadas desterradas por #[i Lord Farquaad] (planteamiento). Al ir el ogro a reclamarle por la invasión a su pantano obtiene el “privilegio” de rescatar una princesa para #[i Lord Farquaad], bajo amenaza de muerte y con la promesa de recuperar su hogar solo para él, tras muchos percances logra llevar a la princesa a #[i Farquaad] pero en el camino se enamora de ella aunque cree que no es correspondido (nudo). El ogro se arrepiente de haberla entregado y regresa al reino para interrumpir la boda, para su sorpresa es correspondido y termina casándose con la princesa para vivir felices en su pantano (desenlace).
              .row(numero="5" titulo="Argumento")
                p.mb-5 El siguiente paso para la escritura del guión es el argumento, en él se desarrollan muchos más elementos importantes para la trama de la historia que en el #[i storyline], en este paso se depositan todos los puntos claves de la historia exponiendo la totalidad de la misma, se evidencian los actos, nudos de la trama, puntos de giro y clímax, aún sin detalle a profundidad, pero ya se dilucidan todos los acontecimientos importantes en la historia. Para un largometraje suele tener de 1 a 2 páginas, aunque estas medidas siempre son variables dependiendo del autor y la extensión del audiovisual.

                .row.justify-content-center
                  .col-lg-5
                    a.anexo.mb-4.mb-lg-0.bg_anx(href="https://es.wikipedia.org/wiki/Shrek" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p Ejemplo. Shrek - Argumento
              .row(numero="6" titulo="Sinopsis")
                p La sinopsis es un resumen general de la obra, proviene del término latin «synopsis» y significa visión de conjunto, el objetivo de esta es capturar la atención del productor para que se interese en leer el guión y tiene unos parámetros estructurales específicos; su labor de obtener un texto narrativo de corrido, no incluye tecnicismos cinematográficos ni narrativos y se debe escribir en tercera persona haciendo uso de los verbos principales en presente indicativo. Para un largometraje suele tener extensiones de entre dos y cinco páginas.
              .row(numero="7" titulo="Escaleta")
                p.mb-5 La escaleta es un documento donde se encuentra la historia dividida en secuencias y en escenas, sirve para ver la estructura de la historia paso a paso, cada escena lleva un encabezado donde se define la localización y el momento del día donde sucede la acción, luego de este encabezado se describe la acción sin incluir diálogos, este documento es el esqueleto del guión y es punto de partida para el tratamiento.

                .row.justify-content-center
                  .col-lg-5
                    a.anexo.mb-4.bg_anx(:href="obtenerLink('/downloads/bf-outline.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p Ejemplo. Escaleta de la película Big Fish
              .row(numero="8" titulo="Tratamiento literario")
                p.mb-5 En el tratamiento se integran detalles de acciones y lugares para generar una visualización precisa de la manera en que va a ser presentada la historia en el audiovisual, se debe tener muy en cuenta los puntos establecidos en la estructura dramática, también identificar las diferentes escenas que componen la narración estableciendo dónde y cuándo se realiza la escena, quiénes participan y qué están haciendo.
                p A continuación, un ejemplo del tratamiento de la película Avatar en el siguiente link.

                .row.justify-content-center
                  .col-lg-5
                    a.anexo.mb-4.mb-lg-0.bt_anexo.bg_anx(href="https://sfy.ru/?script=avatar" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p Ejemplo. Screenplay Avatar (2009)

    separador
    #t_6_2.titulo-segundo(data-aos="flip-up")
      .h4 6.2 Guión literario    

    .row.align-items-center.bg-color3.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure
              img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='Texto que describa la imagen')
          .col-lg-6.mb-4.mb-lg-0
            p El guión literario es el documento que contiene la historia en su versión final, sin que esto quiera decir que solo con seguir el proceso creativo de escritura salga a la primera. Es normal que el guión pase por varios procesos de revisión y reescritura para asegurar que el planteamiento realizado sea coherente, convincente y de calidad, ya que sobre este se desarrollarán todas las etapas siguientes en el proceso de producción y por tanto, se ejecutará la mayor parte del presupuesto.

            p En el guión se presenta la historia pensada para la pantalla (imágenes y sonidos) sin especificar parámetros técnicos, debido a que estos van en el guión técnico; es decir, se estructura de forma que al momento de su lectura sea fácil de imaginar todo lo que está pasando.

        .row.justify-content-center.mb-5
          .col-lg-10
            .cajon.color-acento-botones.p-4
              .row.align-items-center
                .col-lg-8.mb-4.mb-lg-0
                  p.mb-0 A lo largo de años de desarrollo de la industria cinematográfica, se han creado una serie de convenciones en cuanto a forma que a día de hoy son prácticamente universales, entre estas se puede encontrar el uso de la fuente ‘Courier New’ a tamaño de 12 puntos y gracias a esto suele coincidir que una página de guión corresponde a aproximadamente un minuto de historia en pantalla, vale aclarar que es una medida orientativa principalmente.
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_6/img_3.png', alt='Texto que describa la imagen')
                
        p.mb-0 En cada página en la esquina superior derecha se ubica un encabezado con el título de la obra y el número de la página, lo siguiente a definir es el inicio de la secuencia dramática titulada de forma clara y seguido a esto se empezarán a hacer con cada una de las escenas que componen la secuencia.

    p.mb-5.text-center(data-aos="slide-left") 
      strong Cada escena inicia con un encabezado que contiene el número de la escena, la locación y el momento del día de la siguiente manera:

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-8.bg_1.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.p-2.bg_2
            h5.mb-0.text-center 3	INT. APARTAMENTO - TARDE
        .row.justify-content-center.mb-3
          .col-lg-6.p-2.bg_2
            h5.mb-0.text-center 12	EXT. PLAYA - DIA
        .row.justify-content-center
          .col-lg-6.p-2.bg_2
            h5.mb-0.text-center 1	EXT. CASA/TERRAZA - NOCHE 

    p(data-aos="slide-left") Bajo el encabezado se escribe la escena iniciando con una descripción breve del escenario y la acción a desarrollar, no se describe nada en pasado ni en futuro, aunque la acción mostrada sea un #[i flashback] o un #[i flashforward], siempre se debe redactar en presente, puesto que el guión cuenta lo que se está viendo en la pantalla en el momento y su escritura debe ser sencilla.

    p(data-aos="slide-right") Al introducir un personaje se puede añadir una breve descripción del mismo entre paréntesis para la primera vez que aparece y su nombre se debe poner en mayúscula sostenida siempre.

    p.mb-5(data-aos="slide-left") Cuando en hay intervención de diálogos, estos se ponen en posición centrada para diferenciarlos de la acción e inician con el nombre del personaje que los dice, cuando los diálogos son de alguien que no aparece en pantalla se acotan entre paréntesis así (#[i OFF]), por ejemplo, el diálogo de alguien en otra habitación. Sin embargo, cuando el diálogo es de una voz en #[i off] como en el caso de un narrador se acota con (V.O.) del inglés #[i Voice Over].

    .row.align-items-center.bg-color2.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_6/img_4.png', alt='Texto que describa la imagen')
        p Los diálogos son especialmente complejos, razón por la cual se deben pensar muy bien, ya que nada choca más en el espectador que un parlamento que no sea creíble. Esto es algo que se adquiere con la experiencia, pero siempre vale la pena tenerlo presente desde los primeros guiónes que se realicen.

        p En momentos muy concretos se pueden poner anotaciones entre paréntesis bajo el nombre del personaje y sobre el diálogo cuando es necesario que algo sea muy específico, por ejemplo, un diálogo que deba hacerse en una entonación o jerga particular, aunque por norma general depende del director y el actor dar la intención al diálogo.

    
    .row.justify-content-center.bg_td2.p-5.mb-5(data-aos="flip-up")
      .col-lg-1.mb-4.mb-lg-0
        figure
          img.img-a(src='@/assets/curso/tema_6/img_5.png', alt='Texto que describa la imagen')
      .col-lg-4.mb-4.mb-lg-0.text-white
        p.mb-0 
          strong WOODY
        p.mb-0 (EN TONO VAQUERO)
        p.mb-0 -¿Quién dices que está roto mocoso?

    p(data-aos="flip-up") Por último, si es necesario se puede finalizar la escena con la indicación de transiciones, las cuales se usan a la derecha e indican corte o fundido, entre otros. Las transiciones no son imprescindibles, incluso hay muchos guiónistas que no las utilizan, pero pueden llegar a servir para enfatizar el punto final de algo, con un fundido a negro, por ejemplo.

    p.mb-5(data-aos="flip-up") A continuación, se presentan 3 ejemplos de guión: Shrek, El laberinto del fauno y Pulp Fiction respectivamente:

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-3.mb-4.mb-lg-0
        a.anexo.mb-4(:href="obtenerLink('/downloads/Shrek_sneaks.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Ejemplo]. guión - Sherk
      .col-lg-4.mb-4.mb-lg-0
        a.anexo.mb-4(:href="obtenerLink('/downloads/descargar-guión-El-Laberinto-del-Fauno-aprendercine.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Ejemplo]. guión - El laberinto del fauno
      .col-lg-4.mb-4.mb-lg-0
        a.anexo.mb-4(:href="obtenerLink('/downloads/pulp-fiction-1994.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Ejemplo]. guión - Pulp fiction

    


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
