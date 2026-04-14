export default {
  global: {
    Name: 'Gestión de bases de datos con Microsoft Access',
    Description:
      'Desarrolla habilidades para diseñar, estructurar y gestionar grandes volúmenes de información en entornos organizacionales desde una perspectiva lógica y analítica. Fortalece el pensamiento computacional, promueve la automatización de procesos operativos y fomenta el uso de lenguajes de consulta como SQL para la extracción y análisis de datos estratégicos. De esta manera, contribuye a una toma de decisiones más informada y a la optimización eficiente de recursos en el ámbito laboral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Identificación de tipos de datos y sus atributos en Microsoft Access',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Proceso de configuración: creación de campos y asignación de atributos',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos básicos de programación orientada a eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diseño e implementación de macros en Access',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Gestión de información con <em>Structured Query Language</em> (SQL)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fundamentos de SQL en la gestión de base de datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Empleabilidad de SQL en el entorno de trabajo de Microsoft Access',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interoperabilidad: exportación e importación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Integración con sistemas locales y ofimático',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conexión y transferencia de datos a través de internet',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  /*complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],*/
  glosario: [
    {
      termino: 'Atributo (propiedad del campo)',
      significado:
        'Regla o característica específica aplicada a un campo que determina cómo se muestran, validan o almacenan los datos (ejemplo: tamaño del campo, valor predeterminado).',
    },
    {
      termino: 'Base de datos relacional',
      significado:
        'Colección de datos estructurados en tablas bidimensionales (filas y columnas) que se vinculan entre sí mediante campos comunes, evitando la redundancia de información.',
    },
    {
      termino: 'Campo',
      significado:
        'Unidad mínima de información en una base de datos relacional. Representa una columna dentro de una tabla y define una categoría específica de datos (ejemplo "Nombre", "Edad").',
    },
    {
      termino: 'Clave principal (<em>primary key</em>)',
      significado:
        'Campo o conjunto de campos que identifica de manera única e irrepetible cada registro dentro de una tabla.',
    },
    {
      termino: 'Consulta (<em>query</em>)',
      significado:
        'Petición estructurada dirigida a una base de datos para extraer, modificar o eliminar información que cumple con criterios específicos.',
    },
    {
      termino: 'CSV (<em>Comma-Separated Values</em>)',
      significado:
        'Formato de archivo de texto plano utilizado universalmente para el intercambio de datos tabulares entre diferentes sistemas y aplicaciones.',
    },
    {
      termino: 'DML (<em>Data Manipulation Language</em>)',
      significado:
        'Subconjunto del lenguaje SQL dedicado a la manipulación de la información almacenada (incluye sentencias como <em>SELECT, INSERT, UPDATE, DELETE</em>).',
    },
    {
      termino: 'Evento',
      significado:
        'Acción reconocida por el software (como un clic del ratón, la apertura de un formulario o la pulsación de una tecla) que puede utilizarse para desencadenar la ejecución de una macro o código.',
    },
    {
      termino: 'Exportación',
      significado:
        'Proceso de extracción y conversión de datos desde el entorno de la base de datos (Access) hacia un formato externo (Excel, PDF, TXT) para su uso en otras plataformas.',
    },
    {
      termino: 'Importación',
      significado:
        'Proceso de lectura y traducción de datos provenientes de un archivo externo para ser incorporados y almacenados como tablas dentro de la base de datos activa.',
    },
    {
      termino: 'Integridad referencial',
      significado:
        'Conjunto de reglas en las bases de datos relacionales que garantiza que las relaciones entre los registros de las tablas vinculadas sean válidas, evitando la eliminación o modificación accidental de datos.',
    },
    {
      termino: 'Interoperabilidad',
      significado:
        'Capacidad de la base de datos para comunicarse, intercambiar información y operar conjuntamente con otros sistemas informáticos o aplicaciones de <em>software</em>.',
    },
    {
      termino: 'Macro',
      significado:
        'Herramienta de automatización visual que permite agrupar y ejecutar secuencialmente una serie de acciones y comandos lógicos sin necesidad de escribir código complejo.',
    },
    {
      termino: 'ODBC (<em>Open Database Connectivity</em>)',
      significado:
        'Estándar tecnológico que permite a una aplicación (como Access) conectarse y comunicarse con motores de bases de datos externos (como SQL Server o MySQL) a través de una red.',
    },
    {
      termino: 'Programación orientada a eventos',
      significado:
        'Paradigma de programación en el que el flujo de ejecución del software está determinado por las interacciones del usuario (eventos) sobre la interfaz gráfica.',
    },
    {
      termino: 'QBE (<em>Query By Example</em>)',
      significado:
        'Interfaz gráfica proporcionada por Access que permite construir consultas arrastrando tablas y campos de forma visual, generando el código SQL en segundo plano.',
    },
    {
      termino: 'Registro',
      significado:
        'Conjunto completo de datos que describe un elemento único en una tabla. Representa una fila (ejemplo todos los datos de un aprendiz).',
    },
    {
      termino: 'SQL (<em>Structured Query Language</em>)',
      significado:
        'Lenguaje de programación estándar utilizado para administrar, consultar y manipular bases de datos relacionales.',
    },
    {
      termino: 'Tipo de dato',
      significado:
        'Clasificación asignada a un campo que define la naturaleza de la información que puede almacenar (texto, número, fecha, moneda) y determina el espacio que ocupará en memoria.',
    },
    {
      termino: 'Vista diseño',
      significado:
        'Entorno de trabajo en Access utilizado para configurar, modificar y estructurar la arquitectura de tablas, consultas, formularios e informes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, P., & Ortiz, D. (2022). Didáctica de la programación y lenguajes estructurados en la educación técnica superior. Revista Iberoamericana de Educación Tecnológica, 14(2), 112-128.',
    },
    {
      referencia:
        'García, M., & Muñoz, L. (2021). Gestión de bases de datos relacionales en entornos educativos: Un enfoque constructivista. Editorial Síntesis Digital. ',
    },
    {
      referencia:
        'Gómez, H., & Vargas, S. (2024). Interoperabilidad de sistemas de información: Integración ofimática corporativa. Ediciones TIC y Productividad.',
    },
    {
      referencia:
        'López, R., & Martínez, C. (2021). Pensamiento computacional y automatización en el aula del siglo XXI. Innovación Educativa Universitaria, 8(1), 45-60.',
    },
    {
      referencia:
        'Martínez, C., & Silva, R. (2022). Arquitectura de datos y restricciones lógicas: Previniendo el error humano mediante software. Anales de la Informática Educativa, 33(4), 200-215. ',
    },
    {
      referencia:
        'Martínez, C., & Silva, R. (2022). Arquitectura de datos y restricciones lógicas: Previniendo el error humano mediante software. Anales de la Informática Educativa, 33(4), 200-215.',
    },
    {
      referencia:
        'Pérez, L., & Domínguez, F. (2025). Bases de datos en la nube y trabajo colaborativo sincrónico. Revista Latinoamericana de Ingeniería de Software, 19(1), 77-92. ',
    },
    {
      referencia:
        'Ramírez, A., Castro, J., & Mendoza, L. (2023). Validación de la información y seguridad informática en sistemas locales. Perspectivas Tecnológicas, 11(3), 150-165.',
    },
    {
      referencia:
        'Sánchez, J. (2023). De Access a SQL Server: Escalabilidad en la gestión de datos para el sector productivo. Editorial Tecnológica Sur. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
