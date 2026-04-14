<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación de tipos de datos y sus atributos en Microsoft Access 
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-11.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Para comprender el diseño de una base de datos, es imperativo establecer una base conceptual sólida sobre la materia prima que la compone: el dato. Un dato, por sí solo, es una representación simbólica (numérica, alfabética, espacial) de un atributo o variable. Sin embargo, cuando los datos se estructuran, categorizan y relacionan dentro de una arquitectura lógica, se transforman en información útil y procesable. La correcta tipificación de estos datos es el pilar fundamental que garantiza la integridad, eficiencia y coherencia de toda la base de datos.  


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Definición y naturaleza de los tipos de datos 

    p En el entorno de Microsoft Access, un "tipo de dato" determina la clase de información que puede almacenarse en un campo específico de una tabla, así como las operaciones matemáticas o lógicas que se pueden realizar con él y el espacio de almacenamiento que ocupará en la memoria del sistema. Asignar el tipo de dato correcto es análogo a elegir el recipiente adecuado para un material específico en un laboratorio: no se almacenaría un gas volátil en una caja de cartón, del mismo modo que no se debe almacenar un cálculo monetario en un campo de texto simple.
    p Los tipos de datos más comunes y relevantes en Access incluyen: 

    SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos="fade-down")
      .tarjeta.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-1.svg' alt='')
        h4.text-center Texto corto 
        p.text-center Diseñado para almacenar cadenas alfanuméricas de hasta 255 caracteres. Se utiliza habitualmente para nombres, apellidos o códigos de identificación que incluyan letras. 
      .tarjeta.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-2.svg' alt='')
        h4.text-center Texto largo 
        p.text-center Permite el almacenamiento de grandes cantidades de texto (hasta 65.536 caracteres). Es ideal para descripciones, notas u observaciones detalladas.
      .tarjeta.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-3.svg' alt='')
        h4.text-center Número
        p.text-center Exclusivo para valores numéricos sobre los cuales se realizarán cálculos matemáticos. Se subdivide en enteros, decimales, entre otros.
      .tarjeta.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-4.svg' alt='')
        h4.text-center Fecha / hora
        p.text-center Permite el ingreso de información temporal cronológica, facilitando cálculos como la diferencia de días entre dos fechas. 
      .tarjeta.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-5.svg' alt='')
        h4.text-center Moneda
        p.text-center Tipo de dato numérico especializado que evita errores de redondeo en cálculos financieros y añade símbolos monetarios automáticamente.
      .tarjeta.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-6.svg' alt='')
        h4.text-center Autonumeración
        p.text-center Genera un valor numérico único y secuencial de manera automática cada vez que se agrega un nuevo registro. Es la opción predilecta para establecer claves principales (#[em Primary keys]). 
      .tarjeta.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-7.svg' alt='')
        h4.text-center Sí / no
        p.text-center Datos booleanos que solo pueden contener uno de dos valores posibles (verdadero / falso, activado / desactivado).

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Atributos y propiedades de los campos 

    p Mientras que el tipo de dato define la naturaleza general de la información, los atributos o propiedades del campo son las reglas de negocio específicas que refinan, validan y formatean esa información. Las propiedades actúan como filtros de seguridad y diseño. 
    p Las propiedades más determinantes son: 

    .row.justify-content-cent
      .col-lg-8(data-aos="fade-right")
        AcordionA.tb(tipo="b" clase-tarjeta="tarjeta bg4")
          .row(titulo="Tamaño del campo")
            .col-11
              p.mb-0 Define la longitud máxima de un campo de texto o el tipo específico de número (ejemplo: entero largo, simple, doble). Ajustar el tamaño a lo estrictamente necesario optimiza el peso del archivo de la base de datos. 
          .row(titulo="Formato ")
            .col-11
              p.mb-0 Determina la apariencia visual del dato sin alterar su valor almacenado. Por ejemplo, transformar automáticamente un texto a mayúsculas o mostrar una fecha como "lunes, 15 de mayo de 2023". 
          .row(titulo="Máscara de entrada")
            .col-11
              p.mb-0 Obliga al usuario a ingresar los datos siguiendo un patrón específico. Es altamente útil para números telefónicos, forzando la estructura, por ejemplo, (000) 000 - 0000. 
          .row(titulo="Valor predeterminado")
            .col-11
              p.mb-0 Asigna un valor automático si el usuario no introduce ninguno, acelerando la entrada de datos. 
          .row(titulo="Regla de validación y texto de validación")
            .col-11
              p.mb-0 Permite establecer condiciones lógicas (ejemplo: >= 0 y <= 5) que el dato debe cumplir para ser aceptado. Si no se cumple, el sistema arroja el mensaje configurado en el texto de validación, garantizando la integridad de los datos. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/2.png', alt='')


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Proceso de configuración: creación de campos y asignación de atributos 

    p El diseño lógico de una base de datos debe trasladarse a la interfaz gráfica de Microsoft Access. Este proceso exige rigurosidad técnica y una clara comprensión del entorno de trabajo del #[em software]. 

    .row.bgc-1.align-items-center.p-2.p-md-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 1. 
                span Microsoft Access en la "Vista Diseño"
              figure
                img(src='@/assets/curso/temas/t1/fig1.png', alt='')

    p.mb-5 Mientras que los factores se manifiestan como hábitos, creencias o actitudes individuales, los obstáculos y bloqueos de la creatividad actúan como barreras que condicionan el proceso de generación de ideas y la capacidad de innovación. 

    .subt2.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle
      h4.mb-0 Entorno de trabajo: empleo de la vista diseño 

    p Para estructurar adecuadamente las tablas, el administrador de bases de datos debe trabajar en la Vista Diseño (#[em Design View]). A diferencia de la Vista Hoja de Datos (similar a una hoja de cálculo y utilizada para el ingreso de información), la Vista Diseño permite construir y definir la arquitectura interna de la tabla. 
    p El proceso sistémico para la creación de campos comprende los siguientes pasos: 

    .tarjeta--container.row.justify-content-center.mb-5(data-aos="fade")
      .col-lg.col-md-6.tarjeta.bg5.p-xl-5.p-4
        .row.justify-content-center.mb-4
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj2-1.svg', alt='')
        h4.text-center Apertura del diseñador de tablas
        p.mb-0 Al crear una nueva tabla, se debe cambiar de inmediato a la Vista Diseño. El sistema solicitará asignar un nombre a la tabla; se recomienda emplear denominaciones descriptivas y sin espacios, como #[b tb_aprendices].  
      .col-lg.col-md-6.tarjeta.bg4.p-xl-5.p-4
        .row.justify-content-center.mb-4
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj2-2.svg', alt='')
        h4.text-center Definición de claves principales
        p.mb-0 El primer campo suele corresponder a la clave primaria (por ejemplo, #[b id_aprendiz]), configurada con el tipo de dato Autonumeración. Este paso garantiza que cada registro sea único e irrepetible, asegurando la integridad referencial del sistema.  
      .col-lg.col-md-6.tarjeta.bg5.p-xl-5.p-4
        .row.justify-content-center.mb-4
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t1/tarj2-3.svg', alt='')
        h4.text-center Declaración de entidades
        p.mb-0 Posteriormente, se crean los demás campos en la columna “Nombre del campo” (por ejemplo, #[b nombres, apellidos, fecha_nacimiento, promedio_acumulado]). El sistema permite desplazarse de manera ágil entre columnas mediante la tecla Tabuladora, facilitando la organización y estructuración de la información. 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Aplicación práctica de atributos en el panel de propiedades 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p.mb-5 Una vez declarado el tipo de dato, la atención del administrador debe dirigirse al panel inferior llamado "Propiedades del campo". Aquí es donde la pedagogía y la práctica se encuentran para resolver problemas del mundo real. 
        .subt2.pb-2.mb-4(data-aos="fade-right")
          i.fas.fa-circle
          h4.mb-0 Ejemplo aplicado a un entorno formativo: 
        p Supóngase que el aprendiz debe crear un campo para registrar la nota de una evaluación, la cual debe estar comprendida estrictamente entre 0 y 100. 
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/3.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg.col-md-4.mb-3
        .tarjeta.t1.color-primario--borde.pt-4.bg-white.h-100
          .t1-p1
            h4.mb-0 Paso 1
          p.p-3.mb-0 Crear el campo nota_evaluacion. 
      .col-lg.col-md-4.mb-3
        .tarjeta.t1.color-secundario--borde.pt-4.bg-white.h-100
          .t1-p2
            h4.mb-0 Paso 2
          p.p-3.mb-0 #[b En la columna “Tipo de datos”:] desplegar el menú y seleccionar la opción #[b Número]. 
      .col-lg.col-md-4.mb-3
        .tarjeta.t1.color-acento-contenido--borde.pt-4.bg-white.h-100
          .t1-p3
            h4.mb-0 Paso 3
          p.p-3.mb-0 #[b En el panel inferior de propiedades:] ubicar #[b “Tamaño del campo”] y modificarlo de #[b Entero largo] a #[b Doble] (en caso de requerir valores decimales), o mantenerlo como #[b Entero] si se trabajará con notas sin decimales. 
      .col-lg.col-md-4.mb-3
        .tarjeta.t1.color-acento-botones--borde.pt-4.bg-white.h-100
          .t1-p4
            h4.mb-0 Paso 4
          p.p-3.mb-0 #[b Dirigirse a la propiedad “Regla de validación”:] ingresar la expresión lógica: #[b >= 0 #[em And] <= 100].
      .col-lg.col-md-4.mb-3
        .tarjeta.t1.color-adicional-1--borde.pt-4.bg-white.h-100
          .t1-p5
            h4.mb-0 Paso 5
          p.p-3.mb-0 En “Texto de validación”: redactar un mensaje claro y orientador para el usuario final, por ejemplo: #[b “Error: la calificación ingresada no es válida. Por favor, introduzca un valor numérico entre 0 y 100.”]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t1/4.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La configuración de atributos no es un capricho técnico, sino una estrategia preventiva. Al aplicar máscaras de entrada a correos electrónicos o reglas de validación a las fechas, el administrador transfiere la carga de la revisión de datos desde el usuario humano hacia el motor de la base de datos (Ramírez et al., 2023). Este proceso ilustra perfectamente el resultado de aprendizaje esperado, ya que demuestra cómo el diseño arquitectónico inicial determina el comportamiento, la seguridad y la eficiencia de la gestión de la información en todo el ciclo de vida del dato. 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Aplicación de macros y automatización de procesos 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Una vez que la arquitectura base de los datos ha sido cimentada mediante la correcta identificación de tipos y atributos (como se exploró en el bloque anterior), el diseño de la base de datos debe evolucionar de un estado pasivo a uno dinámico e interactivo. Un repositorio de datos perfectamente estructurado carece de agilidad si las operaciones rutinarias deben ejecutarse manualmente. Es aquí donde convergen la lógica computacional y la eficiencia operativa a través de la automatización. 
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-2.col-3
            img.px-lg-3(src='@/assets/curso/temas/t1/5.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 La automatización en Microsoft Access no es un simple atajo operativo; es la manifestación práctica del pensamiento algorítmico. En este componente, se transita del diseño estructural a la gestión de comportamientos, dotando a la base de datos de "inteligencia" para reaccionar ante las acciones del usuario. Al incorporar conceptos básicos de programación y la aplicación de macros, el sistema deja de ser un mero archivo de almacenamiento para convertirse en una aplicación de #[em software] completa y funcional, alineándose directamente con el resultado de aprendizaje orientado a la gestión avanzada de bases de datos. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/6.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2. 
          span Diagrama de flujo
        .tarjeta.bg6.p-4
          .row.justify-content-center
            .col-lg-7.col-md-9
              figure
                img(src='@/assets/curso/temas/t1/fig2.svg', alt='Diagrama de flujo vertical que representa la lógica en un formulario en Microsoft Access. Muestra la secuencia desde el inicio, la validación de datos y sus posibles caminos: mostrar un error o guardar el registro y cerrar.')



</template>

<script>
export default {
  name: 'Tema1',
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
