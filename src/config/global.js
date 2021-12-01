export default {
  global: {
    componenteFormativo: 'Desarrollo creativo',
    descripcionCurso:
      'Es posible que cuando se era más joven se dibujaran figuras animadas o quizás se creó un pequeño libro animado a través de pequeñas escenas realizadas en cada página de un cuaderno que, cuando se hojean, dan la ilusión de movimiento.<br><br>Por tal motivo este componente retomará la historia de la animación, técnicas y las bases para el diseño narrativo y diseño de la producción o <em>pipeline</em>.',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia de la animación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'Técnicas de animación',
        numero: '2',
        titulo: 'Técnicas de animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Animación tradicional o clásica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>Stopmotion</em>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Animación por computadora o CGI',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Esquema de producción audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Etapa 1: desarrollo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Etapa 2: preproducción',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Etapa 3: producción',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Etapa 4: posproducción',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Etapa 5: distribución',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: ' Esquemas de narración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Modelo Aristotélico y el paradigma',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'El viaje del héroe',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Creación y diseño de personajes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Guión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'El guión en la animación',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Guión literario',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Animacam. (2016). <em>Los inicios de la animación: Émile Reynaud</em>.',
      link: 'http://animacam.tv/los-inicios-de-la-animacion-emile-reynaud/',
    },

    {
      referencia:
        'Baiz, F. (s.f). <em>Claves para la escritura de un buen guión de cine.<em> Consultado el 28 de agosto de 2020 en:',
      link:
        'https://issuu.com/pedromenesesmontes/docs/claves-para-la-escritura-de-un-buen',
    },

    {
      referencia: 'Biteable. (2020). <em>What is motion graphics?<em>',
      link: 'https://biteable.com/blog/what-is-motion-graphics/',
    },

    {
      referencia:
        'Bloop Animation Studios LLC. (2020). The 5 Types of Animation.',
      link: 'https://www.bloopanimation.com/types-of-animation/',
    },

    {
      referencia: 'Castillo, A. P. (2013). <em>Estructura dramática</em>.',
      link: 'https://es.calameo.com/read/004944011fa9360605829 ',
    },

    {
      referencia:
        'Cubero, D. E. (2017). <em>Cómo aplicar el viaje del héroe a tu historia</em>.',
      link: 'https://cursosdeguion.com/55-como-aplicar-viaje-del-heroe/',
    },

    {
      referencia:
        'Egri, L. (1972) <em>The Art of Dramatic Writing: Its Basis in the Creative Interpretation of Human Motives, Simon and Schuster.</em>',
    },
    {
      referencia:
        'Field, S. (1995). <em>El manual del guionista. Plot Ediciones.</em>',
      link:
        'http://www.laescaleta.mx/wp-content/uploads/2017/09/syd-field-el-manual-del-guionista-.pdf',
    },

    {
      referencia:
        'Gobierno de Colombia, MinTIC. Manizales Vive Digital. (2016). <em>Guía de buenas prácticas de calidad internacional para la industria de Animación Digital</em>.',
      link:
        '/www.vivelabmanizales.com/wp-content/uploads/2015/02/1Guía-de-buenas-prácticas-de-calidad-internacional-Web.pdf',
    },

    {
      referencia:
        'Interaction Design Foundation. (2019). <em>KISS (Keep it Simple, Stupid) - A Design Principle</em>.',
      link:
        'https://www.interaction-design.org/literature/article/kiss-keep-it-simple-stupid-a-design-principle',
    },

    {
      referencia:
        'Laybourne. (1998). <em>The Animation Book: a complete guide to animated filmmaking - from flip-books to sound cartoons to 3-D animation.</em> Three Rivers Press.',
    },
    { referencia: 'Selby, A. (2013). <em>La Animación</em>. Editorial Blume.' },
    {
      referencia:
        'The Atlantic. (2016). <em>The Man Who Captured Time</em> por J. Weston Phippen.',
      link:
        'https://www.theatlantic.com/entertainment/archive/2016/07/eadweard-muybridge/483381/',
    },

    {
      referencia:
        'Thomas, F. & Johnston, O. (1981) <em>The Illusion of Life Disney Animation</em>. Disney Editions.',
    },
    {
      referencia:
        'Voytilla, S. (1999). <em>Myth and the Movies: Discovering the Mythic Structure of 50 Unforgettable Films. Studio City CA, EEUU: Michael Wiese Productions</em>.',
      link:
        'https://www.tlu.ee/~rajaleid/montaazh/Hero%27s%20Journey%20Arch.pdf',
    },

    {
      referencia: 'Webflow. (s.f). <em>The History of Animation</em>.',
      link: 'https://history-of-animation.webflow.io/',
    },

    {
      referencia:
        'Williams, R. (2009) <em>The Animator’s Survival Kit</em>. Faber and Faber, Inc.',
    },
  ],
  glosario: [
    {
      termino: 'Animación stop motion',
      terminoHtml: 'Animación <em>stop motion</em>',
      significado:
        'en su forma más simple, la animación <em>stop</em> motion consiste en manipular físicamente un modelo, tomar una imagen y luego mover el modelo ligeramente, un cuadro a la vez para crear la ilusión de movimiento.',
    },
    {
      termino: 'Composición',
      significado:
        'el proceso de combinar dos o más imágenes para formar una nueva. En video, la composición es el proceso de combinar dos o más secuencias para formar una nueva.',
    },
    {
      termino: 'Key pose',
      terminoHtml: '<em>Key pose</em>',
      significado:
        'pose clave, también conocida como <em>Golden Pose</em>. Hace referencia a un tipo especial de poses al momento de animar, que se identifica como una fundamental dentro de la secuencia de poses, sin la cual, el sentido de un plano cinematográfico cambiaría notablemente.',
    },
    {
      termino: '<em>Props</em>',
      significado:
        'son objetos que componen la decoración de una escena como mobiliario, jarrones, plantas decorativas, lámparas, etc. Principalmente se trata de objetos móviles.',
    },
    {
      termino: '<em>Render</em>',
      significado:
        'proceso computacional donde se obtiene como resultado una secuencia de imágenes, para posteriormente componerlas y editarlas en formato de video en un programa especializado.',
    },
    {
      termino: 'Rotoscopio',
      significado:
        'el rotoscopio es un dispositivo inventado por <em>Max Fleischer</em>, el cual permite a un animador basar los movimientos animados de un personaje a partir de una película de un actor de acción real que realiza los mismos movimientos. La película original se utiliza como referencia para el trabajo del animador.',
    },
    {
      termino: 'Sketch',
      terminoHtml: '<em>Sketch</em>',
      significado:
        'dibujo rápido o boceto, que no se preocupa por los detalles.',
    },
  ],
  complementario: [
    {
      texto: 'Selby, A, (2013), La Animación.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000070646',
    },
    {
      texto: 'Webflow, (s.f.), The History of Animation.',
      tipo: 'Web',
      link: 'https://history-of-animation.webflow.io/',
    },
    {
      texto: 'Hatch, H. (2019), El principio KISS. Ser simple no es estúpido.',
      tipo: 'Blog',
      link:
        'https://soy.marketing/el-principio-kiss-ser-simple-no-es-estupido/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Andrés Martin',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
