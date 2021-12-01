<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 5
      h1  Creación y diseño de personajes

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/g5_X7IImhiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    

    separador

    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="slide-left")
        h2 Crear fichas o biografías de personajes

        p Es una de las recomendaciones más extendidas en material bibliográfico y cursos del guion, la creación de fichas suele abarcar los aspectos físicos, psicológicos y sociológicos del personaje.

        p En los aspectos físicos se describen todos aquellos rasgos que dan identidad visual al personaje, elementos como la edad que tiene y que aparenta, estatura, tono de piel, color de ojos, tipo y color de cabello, sexo, complexión, condiciones físicas y cualquier elemento que permita establecer como se ve el personaje.

        p En los aspectos psicológicos se exploran elementos que definen su comportamiento como su temperamento, el sentir hacia sí mismo, como se ve ante los demás, fortalezas, debilidades, objetivos, sueños, metas, miedos y cualquier otra cosa que hable sobre su actitud hacia la vida como #[i hobbies], en dónde vive, dónde creció, dónde se educó y en general, información que hable de su entorno social.

        p Es necesario tener en cuenta que toda esta información debe ser relevante y útil para el desarrollo del personaje en la historia y se puede manejar a modo de ficha o como una biografía narrada, lo importante es que con estos datos se construya un personaje profundo que cause interés y tenga elementos para sufrir una transformación durante el transcurso de la historia.

      .col-lg-5.mb-4.mb-lg-0(data-aos="slide-right")
        figure
          img.img-a(src='@/assets/curso/tema_5/img_1.png', alt='Texto que describa la imagen')

    .tarjeta.tar_sly.p-4.mb-5(data-aos="flip-up")
      SlyderA
        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img.img-a(src='@/assets/curso/tema_5/img_2.png', alt='Texto que describa la imagen')
              .col-lg-7.mb-4.mb-lg-0
                h4 Establecer conflictos
                .line01.mb-3
                p Para poder desarrollar un personaje es bueno que no se tenga todo en su vida solucionado y que siempre logre sin dificultad lo que quiere, pues esto lo hace plano y aburrido. El conflicto es algo que permite al personaje luchar para superarse a sí mismo, para superar las circunstancias y alcanzar su objetivo. Es bueno poner obstáculos en el camino para colocar a prueba las motivaciones que mueven al personaje.
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-a(src='@/assets/curso/tema_5/img_3.png', alt='Texto que describa la imagen')
          .col-lg-6.mb-4.mb-lg-0
            h4 Objetivos
            .line01.mb-3
            p Todos necesitan una meta que alcanzar, un objetivo que cumplir, un destino al cual llegar en la vida, no tiene por qué ser tácito, incluso puede que el personaje no tenga claro cuál es su objetivo, pero debe existir para que tenga la motivación de superar los obstáculos.
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-a(src='@/assets/curso/tema_5/img_4.png', alt='Texto que describa la imagen')
          .col-lg-6.mb-4.mb-lg-0
            h4 Estereotipo
            .line01.mb-3
            p Evitar los estereotipos a menos que sea necesario es una buen práctica, así como un personaje sin motivación puede ser aburrido, un personaje estereotipado puede ser predecible y por tanto, poco interesante.
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-a(src='@/assets/curso/tema_5/img_5.png', alt='Texto que describa la imagen')
          .col-lg-6.mb-4.mb-lg-0
            h4 Empezar de nuevo está bien
            .line01.mb-3
            p Si el personaje no funciona no tiene nada de malo desecharlo y empezar nuevamente, por los menos eso permite saber qué cosa no debe ser el personaje.
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-a(src='@/assets/curso/tema_5/img_6.png', alt='Texto que describa la imagen')
          .col-lg-6.mb-4.mb-lg-0
            h4 Arquetipos
            .line01.mb-3
            p A lo largo de su vida el psicoterapeuta suizo Carl Gustav Jung desarrolló lo que actualmente es conocido como los arquetipos de Jung, en principio los generó para establecer una teoría sobre la psicología humana en la que planteó doce arquetipos agrupados en tres categorías usando cada uno para simbolizar una motivación humana básica y su conjunto de valores.
            p Esta es una herramienta que llega a ser útil para construir los rasgos de un personaje tomando aspectos de personalidad provenientes de algunos de los arquetipos, sin embargo, no es bueno limitarse a uno solo o abusar de ellos pues se puede caer en el error de llegar a un personaje plano.
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-a(src='@/assets/curso/tema_5/img_7.png', alt='Texto que describa la imagen')
          .col-lg-6.mb-4.mb-lg-0
            h4 Progreso
            .line01.mb-3
            p No se puede pretender abarcar todo de una sola vez, un trabajo de construcción cuidado, debe partir de aspectos básicos que son complementados poco a poco para llegar a una creación compleja del personaje.
            p En los procesos de creación es necesario ir desarrollando todo paso a paso y de esta manera ir agregando y ajustando detalles gradualmente a medida que se avanza, el tiempo y la dedicación son los insumos más importantes para dar desarrollo a la creatividad y así poder generar universos atractivos, de calidad y originales que despierten el interés del público.

    


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
