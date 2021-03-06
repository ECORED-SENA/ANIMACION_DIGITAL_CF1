<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 3
      h1 Esquema de producción audiovisual

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BhE7rLpH_1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mt-5  Cualquier proceso por desarrollar en una industria requiere una serie de #[b pasos o etapas] para ser culminado con éxito, siendo estas determinadas por el proceso en sí y por supuesto, el caso de la producción audiovisual no es una excepción. Independientemente de su #[b extensión, género, formato, técnica o cualquier otra variable] que ayude a definir el tipo de producto a realizar, en lo concerniente al mundo de la imagen en movimiento se habla habitualmente de tres etapas comúnmente denominadas: #[b preproducción, producción y posproducción].

    separador
    #t_3_1.titulo-segundo(data-aos="fade-right")
      h2 3.1 Etapa 1: desarrollo 

    .row.justify-content-center.align-items-center.bg-color2.p-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_1.png', alt='')

        p(data-aos="fade-down").mt-5 Es la etapa inicial de cualquier proyecto y también la última de muchos porque es acá donde se origina la idea y se evalúa su viabilidad de realización, comúnmente esta parte está a cargo de las personas en los roles de productor, guionista y director, que dependiendo de la magnitud del proyecto pueden ser varias o una sola.

        p(data-aos="fade-down") Puede decirse que es el momento más importante de todos, ya que es cuando se gesta y desarrolla la idea permitiendo al creador determinar si esta tiene futuro y por tanto si vale la pena dedicar tiempo, dinero y esfuerzo para ejecutarla, porque nadie desea desperdiciar alguno de estos recursos en algo que no funcionará. 

        p(data-aos="fade-down") Esta etapa tiene una serie de actividades que pueden clasificarse en dos grandes categorías a saber, actividades de producción y actividades de creación. Las primeras enfocadas más en la parte de planeación administrativa que ayudarán a determinar, tiempo, costos, equipos, herramientas, talentos y posibles fuentes de financiamiento para realizar el producto y las segundas, dirigidas a determinar, qué se va a contar, cómo y por qué; algunas de estas son estrictamente secuenciales y todas se relacionan entre sí, porque es imposible establecer un presupuesto, si no se sabe en qué consiste la historia o se determina cómo se va a relatar la historia sin proyectar los recursos necesarios.           

    h5(data-aos="fade-down").text-center #[b Las actividades más recurrentes en cualquier proyecto de esta etapa son:]

    LineaTiempoD.color-primario.mt-5(data-aos="fade-down")
      .row(numero="1" titulo="Definir tema")
        .col-lg-8
          p Es incontable la cantidad de ideas que nacen cuando la musa de la inspiración llega, pero en otras ocasiones es necesario determinar un tema para establecer un punto de partida claro y llegar a la gestación de una buena idea que merezca ser narrada. Muchas veces las mejores ideas originales nacen de las vivencias propias o cercanas de quien las crea; sin embargo, es común encontrar producciones que se basan en adaptaciones de obras de terceros, como libros, canciones e incluso diferentes audiovisuales, entre otros orígenes; en este sentido, es recomendable aprovechar la oportunidad de crear para dar a conocer nuevos universos y permitir que la visión de las cosas pueda llegar a mucha gente.

          p Es necesario implementar la investigación en el planteamiento del tema para abordarlo desde diferentes perspectivas y profundizar en los contextos, relaciones y comportamientos de los personajes que pueden estar involucrados en la historia. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_6.png', alt='')

      .row(numero="2" titulo="La premisa")
        .col-lg-8
          p Consiste en formular una proposición donde se busca afirmar o negar algo para llegar a una conclusión, idealmente se busca enunciar al protagonista, qué conflicto va a atravesar y de qué manera los puede sortear, como ejemplo, según el reconocido autor Lajos Egri, la premisa de la conocida obra clásica de Shakespeare Romeo y Julieta es “el gran amor desafía la muerte”. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_7.png', alt='')

      .row(numero="3" titulo="El <i>story line</i>")
        .col-lg-8
          p En este paso se plantea una síntesis que desarrolla el planteamiento, nudo y desenlace de la historia en máximo un párrafo, debe quedar claro quién es el protagonista, qué busca, con qué inconvenientes se va a encontrar y cómo va a concluir la historia. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_8.png', alt='')

      .row(numero="4" titulo="Argumento")
        .col-lg-8
          p Es el desarrollo del #[i story line], en él se desarrolla más a fondo el conflicto, características de los personajes, cronologías, etc. Su extensión depende de la duración del audiovisual, ya que no es lo mismo el argumento para un filminuto que para un largometraje de 120 minutos. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_9.png', alt='')

      .row(numero="5" titulo="Sinopsis")
        .col-lg-8
          p El término proviene del latín y su significado es visión de conjunto, consiste en un resumen escrito generalmente en tercera persona donde se recogen las ideas principales del audiovisual, tomando el esquema planteado en el argumento. Es una herramienta tanto para la escritura del guion, como para obtener la atención de posibles fuentes de financiación. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_10.png', alt='')

      .row(numero="6" titulo="Tratamiento literario")
        .col-lg-11
          p En esta parte se empieza a hacer un acercamiento al guion, que consiste en un desarrollo literario de la historia asemejándose a lo que podría considerarse una narración novelada, añadiendo detalles importantes y desarrollando una trama. 

      .row(numero="7" titulo="Desarrollo literario de los personajes")
        .col-lg-8
          p Consiste en la construcción literaria de los personajes, aquí se definen sus aspectos físicos, mentales, culturales y todo aquello que sea importante para establecer su desarrollo y definir el arco de transformación a través de la historia. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_11.png', alt='')

      .row(numero="8" titulo="Desarrollo literario de los escenarios")
        .col-lg-8
          p Es la descripción de los espacios donde se van a desencadenar las acciones; plantean la base para que más adelante los artistas conceptuales puedan generar la representación gráfica de los escenarios. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_12.png', alt='')

      .row(numero="9" titulo="Escaleta")
        .col-lg-11
          p Es un paso obligado para la conversión del tratamiento a guion, en este punto se divide la historia en las unidades narrativas que van a plantear la base de las escenas que se definirán en el guion, en esencia es el esqueleto del guion. 

      .row(numero="10" titulo="Guion literario")
        .col-lg-8
          p Es uno de los documentos más importantes, ya que en él se consigna la narración de acciones, el lugar donde se van a desarrollar y los diálogos separados escena a escena, normalmente no contiene elementos técnicos. Básicamente es la hoja de ruta mediante la cual se crearán las animaciones para desarrollar la historia.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_13.png', alt='')

      .row(numero="11" titulo="Guion técnico")
        .col-lg-8
          p Es el desglose plano a plano de la historia, en él se define cómo va a ser usada la cámara, tiempos y otros aspectos técnicos del lenguaje audiovisual. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_14.png', alt='')

      .row(numero="12" titulo="<i>Story board</i>")
        .col-lg-8
          p En este paso se plantea de manera gráfica con dibujos sencillos como se va a ver cada uno de los planos para permitir tener una percepción visual de cómo puede lucir la historia, es normal que en esta etapa se descarten o replanteen planos que no funcionan muy bien, de ahí la importancia que sean dibujos no tan elaborados.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_15.png', alt='')

      .row(numero="13" titulo="Maqueta de sonido")
        .col-lg-8
          p Es la construcción de efectos sonoros, sonidos ambientales, música y diálogos que permitan dilucidar una duración más exacta de los planos, en este punto no se necesita que sea el audio definitivo, pero sí es importante tener un primer acercamiento a la mezcla de sonido. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_16.png', alt='')

      .row(numero="14" titulo="<i>Animatic</i>")
        .col-lg-8
          p Para esta etapa se toman los dibujos seleccionados del #[i Story board] para montarlos en línea de tiempo buscando determinar la duración exacta de cada plano, escena y secuencia de la historia, que en conjunto con la maqueta de sonido permite generar una aproximación de lo que va a ser el audiovisual final. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_17.png', alt='')

      .row(numero="15" titulo="Recolección de referentes")
        .col-lg-11
          p Es el proceso en el cual se recolectan elementos de diversos orígenes, como estilos artísticos, observación del mundo, otros audiovisuales, entre otros, para empezar a enrutar el estilo visual que tendrá la obra y que servirá de referencia para dar a entender a todos quienes se involucren en el proyecto y el look en el cual se va a enmarcar. 

      .row(numero="16" titulo="Plan de producción")
        .col-lg-8
          p Esta es una parte administrativa donde se busca estructurar el diseño de toda la producción, se empieza a estructurar incluso desde la idea y se va complementando a medida que avanza el proceso creativo, la idea de este es determinar los tiempos de ejecución, recursos requeridos, talento necesario y todo aquello que pueda influir en el desarrollo de la producción. El desarrollo de este le corresponde al productor, pero si el proyecto no es muy grande, este rol muchas veces lo asume el director. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_18.png', alt='')

      .row(numero="17" titulo="Presupuesto")
        .col-lg-8
          p Dentro de este se hace el planteamiento del coste de la producción, teniendo en cuenta todos los factores propuestos en el plan de producción. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_19.png', alt='')

      .row(numero="18" titulo="Desarrollo de <i>pipeline</i>")
        .col-lg-11
          p En este punto se estructura la “línea de producción” del audiovisual y es complementario del plan de producción, porque contempla aspectos como requerimientos de #[i hardware] y de #[i software] como esquemas de manejo de archivos y protocolos.
        

      .row(numero="19" titulo="Plan de financiamiento")
        .col-lg-8
          p En este punto se plantea de dónde van a salir los recursos económicos para financiar la creación del audiovisual, ya sean recursos propios, de inversionistas, de convocatorias y becas, donaciones o una mezcla de los anteriores. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_20.png', alt='')

      .row(numero="20" titulo="Plan de <i>marketing</i>")
        .col-lg-8
          p Son estrategias de promoción destinadas a lograr la difusión del producto y recuperar la inversión.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_21.png', alt='')

      .row(numero="21" titulo="Plan de distribución")
        .col-lg-11
          p Se busca determinar la forma en la que el audiovisual va a llegar al público, planteando los canales y métodos posibles para dar a conocer el producto.           

      .row(numero="22" titulo="Asuntos legales")
        .col-lg-8
          p Como su nombre lo indica, busca definir todo lo concerniente a los aspectos legales como definición de contratos, propiedad de derechos, posibilidades de uso, etc.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_22.png', alt='')


    separador
    #t_3_2.titulo-segundo(data-aos="fade-right")
      h2 3.2 Etapa 2: preproducción

    .row.justify-content-center.align-items-center.bg-color3.px-5.pt-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_2.png', alt='')

        p(data-aos="fade-down").mt-5 Es la segunda gran etapa del proceso de creación de un audiovisual, una vez construido el universo literario donde se va a desarrollar la historia y con un plan que define la ruta que va a seguir la producción, es el momento de desarrollar el aspecto visual que va a tener el producto, aunque ya se ha empezado a hacer desde la etapa anterior, es hasta este momento en donde se va a concretar el #[i look] definitivo.

        p(data-aos="fade-down") Así como en el audiovisual filmado, en este punto se definen las locaciones físicas, los #[i castings] para seleccionar actores, se adquieren equipos, entre otros. Para el caso de la animación 3D se sumará una gran cantidad de talento para diseñar visualmente cómo se verán los escenarios, personajes, objetos y cualquier elemento que requiera ser creado para la elaboración del producto animado, todo lo anterior se categoriza en el área del arte conceptual.
    .row.justify-content-center.align-items-center.px-5.mt-0      
      .col-lg-10        
        p(data-aos="fade-down") De igual manera, así como todo requiere ser diseñado, también requiere ser interpretado y traducido a volúmenes digitales mediante procesos de modelado 3D y escultura digital, dando como resultado las mallas tridimensionales que constituyen personajes, escenarios y objetos presentes en la historia, así como vincularlos a los sistemas que permitirán a los animadores dar vida a esos actores digitales. 
        .cajon.color-secundario.p-4.mt-5(data-aos="fade-left")
          p.mb-0 Para este punto, aparece la necesidad de involucrar nuevos roles en la producción para abarcar de manera adecuada cada una de las tareas a realizar. A rasgos generales, entre ellos se encuentran artistas conceptuales de personajes, escenarios y #[i props], modeladores y escultores digitales incluso en ocasiones puede haber escultores tradicionales, texturizadores, #[i riggers], artistas de #[i look development], donde dependiendo de la magnitud de la producción pueden cubrir una parte muy especializada de alguno de estos roles o varios de los perfiles en caso de que la sea una producción pequeña. 

    h5.mt-5(data-aos="fade-down").text-center #[b Las actividades más recurrentes en cualquier proyecto de esta etapa son: ]

    LineaTiempoD.color-primario.mt-5(data-aos="fade-down")
      .row(numero="1" titulo="<i>Concept art</i>")
        .col-lg-8
          p Es la etapa en la que, por medio de herramientas digitales y análogas, los artistas diseñan todos los personajes, escenarios y elementos mediante exploraciones guiadas por el desarrollo literario y referencias recolectadas previamente, con el fin de lograr definir el #[i look] final de la obra.  
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_23.png', alt='')

      .row(numero="2" titulo="Creación de personajes")
        .col-lg-8
          p En este proceso se plantea de manera esquemática el aspecto visual de los personajes tomando como base el diseño creado en la etapa de creación literaria, se crean las hojas de personaje comúnmente conocidas como #[i character sheets], donde están plasmadas las expresiones y poses claves que ayudan a evidenciar su forma de actuar.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_24.png', alt='')

      .row(numero="3" titulo="Creación de fondos")
        .col-lg-8
          p Este proceso consiste en crear los fondos o espacios donde se desarrollarán las acciones y su preparación para la animación. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_25.png', alt='')

      .row(numero="4" titulo="Creación de <i>props</i>")
        .col-lg-8
          p Consiste en el diseño de los elementos de ambientación u objetos necesarios para poblar los escenarios y que pueden llegar a tener interacción con los personajes.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_26.png', alt='')

      .row(numero="5" titulo="Dibujos estructurales de personajes")
        .col-lg-8
          p Es la construcción de ilustraciones que componen un personaje, ya sean sus partes individuales o sus diferentes puntos de vista para poder hacer transiciones de posición.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_27.png', alt='')

      .row(numero="6" titulo="<i>Rigging</i>")
        .col-lg-8
          p Es el proceso mediante el cual se vinculan cada una de las partes del personaje para poder otorgarles movimiento, comúnmente se le conoce como esqueleto ya que es una estructura que brinda soporte a las demás formas y ayuda a definir en qué puntos del personaje u objeto se va a dar el movimiento.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_28.png', alt='')

      .row(numero="7" titulo="Grabación de diálogos")
        .col-lg-8
          p Es una tarea primordial para el proceso de animación, aunque no necesariamente debe hacerse hasta este momento, no puede hacerse después, ya que de la duración de los diálogos van a depender muchos aspectos de la animación, idealmente los diálogos deberían grabarse para sincronizarlos con la animática pero no siempre están dadas las cosas para grabar la versión definitiva a ese momento. Claro está, siempre que la historia requiera de parlamentos.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_29.png', alt='')

    .row.justify-content-center.align-items-center.mt-5  
      .col-lg-10 
        .cajon-b.color-secundario.p-3.mb-5(data-aos="fade-left")
          p.mb-0 Cabe aclarar que todos los procesos presentes en esta lista tanto para la etapa de preproducción como de otras etapas, no se dan de manera estrictamente lineal porque dependiendo de muchos factores determinados por cada proyecto existirá la posibilidad de solapar algunos de ellos para optimizar recursos y tampoco terminarán estrictamente en la etapa que nacen, ya que muchos procesos pueden extenderse o reaparecer en otras etapas sin que esto refiera a una desorganización en la planeación, sino a que los procesos de creación artística son orgánicos y siempre susceptibles a tener mejoras siempre que sea posible. 

    separador
    #t_3_3.titulo-segundo(data-aos="fade-right")
      h2 3.3 Etapa 3: producción 

    .row.justify-content-center.align-items-center.bg-color2.px-5.pt-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_3.png', alt='')

        p(data-aos="fade-down").mt-5 Primordialmente abarca desde los procesos de animación hasta llegar al #[i render], en esta etapa se integran todos los elementos y se crean las interacciones mediante las cuales se va a mostrar la trama y desarrollo de la historia, es una de las etapas que más personas involucra porque hace aparición el departamento de animación que tiene a su cargo una de las tareas más arduas y extensas de la producción, como lo es, generar las actuaciones de los personajes para expresar de forma correcta lo que se quiere contar desde la etapa del guion. 

    .row.justify-content-center.align-items-center.px-5.mt-0      
      .col-lg-10        
        p(data-aos="fade-down") De igual manera aparecen los departamentos de simulación y #[i vfx] (Visual Effects) que, aunque puede que no sean tan grandes como los de animación o concept art, si son los departamentos que más potencia de cómputo necesitan, al igual que el departamento de iluminación y #[i render].

        p(data-aos="fade-down") Entre los perfiles que se involucran en la producción en esta etapa se tienen actores de voz, animadores, artistas de simulación, efectos especiales, #[i grooming], iluminación, sonidistas entre otros. 

    h5.mt-5(data-aos="fade-down").text-center #[b Las actividades a desarrollar son las siguientes:]

    LineaTiempoD.color-primario.mt-5(data-aos="fade-down")
      .row(numero="1" titulo="<i>Layout</i>")
        .col-lg-8
          p Se establecen las posiciones y movimientos de cámara acorde a lo definido en el guion técnico y en el #[i storyboard], de igual manera se dispone de la ubicación en el espacio 3D de los elementos de la escena y los personajes. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_30.png', alt='')

      .row(numero="2" titulo="<i>Blocking </i>de animación")
        .col-lg-8
          p Da inicio a una de las etapas más extensas y que más artistas requiere, en esta etapa se plantean las poses claves de cada uno de los personajes para definir la coherencia de la historia, a partir de este proceso se aprueban o no los planos para determinar si pasan a la siguiente etapa. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_31.png', alt='')

      .row(numero="3" titulo="<i>Splining</i> de animación")
        .col-lg-8
          p Es el primer paso del refinado de la animación, una vez establecido y aprobado el #[i blocking] de un plano, se procede a realizar las interpolaciones entre fotogramas claves añadiendo nuevas poses de transición e intermedias y ajustando variaciones en las curvas de animación. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_32.png', alt='')

      .row(numero="4" titulo="<i>Polishing</i> de animación")
        .col-lg-11
          p Habitualmente en este proceso se hace revisión final al plano buscando pulir detalles, como ajustes de tiempo, sincronización, cruces de geometría y todo aquello que empuje el #[i acting] del plano a niveles superiores. 

      .row(numero="5" titulo="VFX")
        .col-lg-8
          p Es el proceso en el que se generan elementos como fluidos, explosiones, destrucciones u otros elementos que se requieren en la historia y deben ser recreados.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_33.png', alt='')

      .row(numero="6" titulo="Previsualización")
        .col-lg-8
          p Consiste en una segunda animática, acá se toman los planos tal cual como se ven en el visor del programa y se montan en línea de tiempo para evaluar el #[i raccord] de la historia y determinar que todo funcione o si se debe hacer algún ajuste. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_34.png', alt='')

      .row(numero="7" titulo="Render")
        .col-lg-8
          p Es el proceso de dibujo donde con el uso de #[i hardware] (una #[i render farm] idealmente) y #[i software] (el motor de #[i render]) se realizan los cálculos necesarios para representar las interacciones de la luz con todos los elementos en cada uno de los fotogramas, dando como resultado una serie de imágenes que más adelante se usarán para componer el metraje final. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_35.png', alt='')

      .row(numero="8" titulo="Sonido")
        .col-lg-8
          p Se refiere a la captura o creación de sonidos ambiente y música, necesarios para el audiovisual animado. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_36.png', alt='')

    separador
    #t_3_4.titulo-segundo(data-aos="fade-right")
      h2 3.4 Etapa 4: posproducción

    .row.justify-content-center.align-items-center.bg-color2.px-5.pt-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_4.png', alt='')

        p(data-aos="fade-down").mt-5 Es la última etapa en la que hay gran intervención artística, en esta se pone el sello final a la creación de la obra audiovisual, integra el trabajo de todos los artistas que trabajaron previamente en el desarrollo de la historia y se revisa que todo funcione adecuadamente.

        p(data-aos="fade-down") Los artistas que aparecen en esta etapa son principalmente compositores visuales, editores, coloristas, sonoristas, diseñadores gráficos, entre otros.
        
        h5(data-aos="fade-down").text-center #[b las actividades más recurrentes en cualquier proyecto de esta etapa son:]  

    LineaTiempoD.color-primario.mt-5(data-aos="fade-down")
      .row(numero="1" titulo="Composición")
        .col-lg-8
          p Acá se toman todas las imágenes generadas en el #[i render] en sus diferentes capas y se ensamblan para construir una imagen final dando ajuste a los parámetros que cada capa permite, de igual manera se integran los efectos para que encajen perfectamente con el resto de las tomas.  
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_37.png', alt='')

      .row(numero="2" titulo="<i>Foley</i>")
        .col-lg-11
          p Es un proceso donde se crean sonidos, especialmente referente a efectos sonoros que no son sencillos de capturar, por lo que es preferible crearlos en un ambiente controlado, empleando objetos que produzcan un carácter sonoro similar.   
        

      .row(numero="3" titulo="Edición")
        .col-lg-8
          p Para el caso de la animación podría decirse que es un proceso innecesario porque prácticamente la secuencia de planos viene preeditada desde el #[i story board], sin embargo, puede darse el caso que por razones artísticas de dirección requiera hacerse una reorganización de elementos para otorgar mejor sentido a la historia. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_38.png', alt='')

      .row(numero="4" titulo="Sincronización de audio")
        .col-lg-11
          p Consiste en hacer el ajuste final de diálogos, sonidos ambiente, #[i foley] y música con la imagen de forma que se potencie la narración de la historia.   

      .row(numero="5" titulo="Colorización")
        .col-lg-8
          p Es un proceso mediante el cual se modifican las gamas tonales de los planos, para enriquecer la intencionalidad narrativa de la imagen valiéndose de la psicología del color.  
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_39.png', alt='')

      .row(numero="6" titulo="Graficación")
        .col-lg-8
          p Principalmente consiste en generar los títulos y créditos del audiovisual, sus animaciones y cualquier otro elemento gráfico que sea necesario.   
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_40.png', alt='')

      .row(numero="7" titulo="Exportación")
        .col-lg-11
          p En este punto se genera el #[i render] final del audiovisual y se exporta a los formatos necesarios para los diferentes canales de distribución que se planeen usar.  

      .row(numero="8" titulo="<i>Backups</i>")
        .col-lg-8
          p Es un proceso que debe hacerse durante toda la producción para prevenir la pérdida de información; sin embargo, podría decirse que es el último paso de la posproducción, ya que se consolidan las versiones finales de todos los archivos catalogados correctamente, en caso de que en algún momento se necesite hacer consultas o ajustes.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_41.png', alt='')


    separador
    #t_3_5.titulo-segundo(data-aos="fade-right")
      h2 3.5 Etapa 5: distribución

    .row.justify-content-center.align-items-center.bg-color3.px-5.pt-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_5.png', alt='')

        p(data-aos="fade-down").mt-5 Aunque es la etapa final del proceso, no necesariamente es la última en arrancar, ya que desde el desarrollo se empieza a esbozar el panorama para los procesos de distribución, mercadeo y exhibición; sin embargo, es en este momento donde se ejecutan en su mayor porcentaje, puesto que la distribución final y exhibición requieren irremediablemente del producto terminado.

        p(data-aos="fade-down") Es una etapa muy importante porque con ella se garantiza que la obra audiovisual tenga difusión y por tanto, que todo el esfuerzo realizado tenga sentido al lograr que el audiovisual llegue al espectador final. En este punto, los perfiles de quienes se involucran en el proceso cambian radicalmente, puesto que son personas que han orientado sus conocimientos hacia la parte de #[i marketing] y se encargan de definir las estrategias para alcanzar los objetivos comerciales y de difusión.    

    h5.mt-5(data-aos="fade-down").text-center #[b Algunas de las actividades que se dan en esta etapa son:] 

    LineaTiempoD.color-primario.mt-5(data-aos="fade-down")
      .row(numero="1" titulo="Campaña de <i>marketing</i>")
        .col-lg-11
          p Acá se definen las piezas y estrategias para promover la obra audiovisual y conseguir que sea consumida por el público.  

      .row(numero="2" titulo="Circuito de festivales")
        .col-lg-11
          p Es importante hacer la búsqueda de posibles festivales en los que sea compatible la proyección de la obra audiovisual, debido que esto ayuda a potenciar la difusión e incrementar su posibilidad de éxito comercial. 

      .row(numero="3" titulo="Circuito de mercados audiovisuales")
        .col-lg-11
          p Aparte de los festivales, hay un circuito de mercados audiovisuales donde pueden alcanzarse acuerdos de distribución que ayuden a dar más visibilidad a la obra. 

      .row(numero="4" titulo="Exhibición a prensa")
        .col-lg-11
          p Esto no necesariamente es para todas las piezas audiovisuales, pues generalmente se hace para el cine cuando se ha logrado despertar el interés suficiente para generar estrenos exclusivos para prensa. 

      .row(numero="5" titulo="Eventos promocionales")
        .col-lg-8
          p Son eventos especiales que pueden ser acciones de #[i marketing], como estrenos anticipados, concursos, funciones especiales, entre otros. 
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_42.png', alt='')

      .row(numero="6" titulo="Exhibición")
        .col-lg-8
          p Es el momento en el que la obra se exhibe al público y dependiendo de su naturaleza, puede darse en cine, televisión, redes sociales, plataformas de #[i streaming], etc.
        .col-lg-4
          img.img-t.img-a.yoyo1(src='@/assets/curso/tema_3/img_43.png', alt='')

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
      .col-lg-10
        h5 Conclusión 
        p(data-aos="fade-down") Se puede ver que el proceso de creación audiovisual está compuesto por muchas tareas y requiere gran variedad de talentos y sobre todo mucho esfuerzo y perseverancia, sin importar si se trata de una película con presupuesto multimillonario o un filminuto de un grupo de estudiantes.  

        .cajon.color-secundario.p-4.mt-5(data-aos="fade-left")
          p.mb-0 Es importante resaltar que este documento pretende exponer de manera muy general una hoja de ruta del proceso de producción, valiéndose de la división de tareas en 5 grandes etapas y no se constituye en algo que se deba cumplir de manera estricta y lineal, aunque algunas tareas requieren hacerse en orden y tienen dependencias con otras, hay procesos que se pueden solapar, expandir o incluso excluir, acorde a las necesidades del proyecto y la forma en que esto se haga obedece exclusivamente al criterio del grupo de personas que desean desarrollar un proyecto audiovisual.

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
