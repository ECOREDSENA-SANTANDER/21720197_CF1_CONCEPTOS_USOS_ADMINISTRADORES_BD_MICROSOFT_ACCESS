<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Conceptos básicos de programación orientada a eventos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Para comprender las macros, es imprescindible desmitificar el concepto de "programación". En el contexto de un administrador de bases de datos de nivel intermedio, programar no implica necesariamente escribir extensas líneas de código en un lenguaje complejo. Programar es, en su esencia más pura, la habilidad de instruir a una máquina para que resuelva un problema mediante una secuencia lógica, finita y ordenada de pasos (algoritmo). 
        .bg1.p-4
          p.mb-0 Microsoft Access utiliza un paradigma conocido como #[b programación orientada a eventos]. En un entorno secuencial tradicional, el programa dicta qué debe hacer el usuario y en qué orden. Por el contrario, en la programación orientada a eventos, es el usuario quien dicta el flujo del programa a través de sus acciones. El sistema permanece en un estado de "escucha" o reposo hasta que ocurre un suceso específico, denominado "evento". 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Naturaleza de los eventos en el entorno de bases de datos

    p Un evento es cualquier interacción o cambio de estado reconocido por el sistema. Los eventos actúan como los "gatillos" que disparan una respuesta programada. Entre los más utilizados en la gestión de interfaces (formularios) se encuentran: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/2.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.bg7.p-4(titulo="Al hacer clic (<em>on click</em>) ")
            p Se desencadena cuando el usuario presiona un botón físico o digital. Se usa para ejecutar acciones como guardar, enviar formularios o activar funciones. 
          .tarjeta.bg7.p-4(titulo="Al cargar (<em>on load</em>)")
            p Ocurre justo cuando se abre un formulario. Permite inicializar valores, cargar datos o configurar el entorno. 
          .tarjeta.bg7.p-4(titulo="Después de actualizar (<em>after update</em>)")
            p Se activa cuando el usuario modifica un campo y cambia de foco o presiona #[em Enter]. Se usa para validar datos o actualizar información relacionada. 
          .tarjeta.bg7.p-4(titulo="Al recibir el enfoque (<em>on got focus</em>)")
            p Sucede cuando el cursor entra en un campo de texto. Sirve para mostrar ayudas, resaltar campos o guiar al usuario.          

    p.mb-5 A modo de analogía en un salón de clase tradicional, el evento "al hacer clic" sería equivalente a un estudiante levantando la mano. El sistema (el docente) reconoce este evento y ejecuta una macro (dar la palabra al estudiante). Si la mano no se levanta, la acción no se ejecuta. 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Relación con la formación mediada por TIC y roles educativos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La inserción de la lógica de programación en la educación mediada por TIC fomenta el desarrollo de competencias de resolución de problemas. Según diversos autores contemporáneos en didáctica tecnológica, enseñar a programar a través de interfaces visuales reduce la barrera de entrada y la frustración inicial, permitiendo que el estudiante se concentre en la lógica del problema y no en la sintaxis del código (López y Martínez, 2021). 
    
    .tarjeta.bgi-2.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4.mb-5
          .col-lg-5.col-11
            h4 Rol del docente 
            p En la enseñanza de estos conceptos, el docente debe alejarse de la instrucción mecanicista ("haga clic aquí y luego allá"). Su rol es plantear escenarios problémicos de automatización, retando a los estudiantes con preguntas como: "¿cómo evitamos que un usuario borre un registro por accidente?". 
          .col-lg-5.col-md-9.col-11
            img(src='@/assets/curso/temas/t2/slider1-1.png', alt='')
        .row.justify-content-center.align-items-center.my-lg-4.mb-5
          .col-lg-5.col-11
            h4 Rol del aprendiz 
            p El estudiante deja de ser un consumidor de #[em software] y se convierte en creador de soluciones. Debe anticipar el error humano, planificando y estructurando flujos de trabajo (#[em workflows]) que protejan la integridad de la base de datos. 
          .col-lg-5.col-md-9.col-11
            img(src='@/assets/curso/temas/t2/slider1-2.png', alt='')
        .row.justify-content-center.align-items-center.my-lg-4.mb-5
          .col-lg-5.col-11
            h4 Contexto educativo (ejemplo aplicado) 
            p En una base de datos para gestionar la asistencia a un curso virtual del SENA, el sistema debe registrar automáticamente la hora de ingreso. Para ello, se crea un botón "Registrar Ingreso" y en el evento "Al hacer clic" se programa una acción que capture la función Ahora () y la guarde en la tabla correspondiente. 
          .col-lg-5.col-md-9.col-11
            img(src='@/assets/curso/temas/t2/slider1-3.png', alt='')


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Diseño e implementación de macros en Access

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4.mb-3
        .bg2.p-4.h-100.d-flex.align-items-center
          p.mb-0 En Microsoft Access, una macro es una herramienta de programación visual que permite automatizar tareas y agregar funcionalidad a los formularios, informes y controles sin necesidad de escribir código en Visual Basic para Aplicaciones (VBA). Es el puente perfecto entre las necesidades de gestión de datos y la programación estructurada. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/4.png', alt='')
      .col-lg-4.mb-3 
        img.mb-3.w-80x(src='@/assets/curso/temas/t2/5.svg', alt='')
        p El entorno de Access ofrece el "Generador de macros", una interfaz limpia donde las acciones se seleccionan desde un catálogo desplegable y se apilan como bloques de construcción. Esta modularidad garantiza una coherencia pedagógica formidable, ya que permite visualizar la secuencia de arriba hacia abajo, facilitando la depuración y comprensión del algoritmo

    .row.bgc-1.align-items-center.p-2.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 3. 
                span Captura de pantalla del "Generador de macros"
              figure
                img(src='@/assets/curso/temas/t2/fig3.png', alt='Captura de pantalla de la interfaz del "Generador de macros" en Microsoft Access. La imagen ilustra la programación visual mediante bloques, mostrando una condición "Si... Entonces" que, al cumplirse, ejecuta una secuencia de acciones anidadas como mostrar un "CuadroDeMensaje", "AbrirFormulario" y "EstablecerValor". A la derecha se observa el panel del "Catálogo de acciones".')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Estructuras de control lógicas en macros

    p Para que una macro sea verdaderamente funcional y no una simple repetición ciega de acciones, debe incorporar estructuras de control, que son los fundamentos de la lógica computacional: 

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-6.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/tarj3-1.png', alt='')
        .bg-color-acento-contenido.text-white.p-4
          h4 Secuencialidad 
          p.mb-0 Las acciones se ejecutan exactamente en el orden en que se agregan. Un orden incorrecto puede generar fallos, como intentar guardar un registro después de haber cerrado la ventana. El orden de las acciones es determinante en el resultado del proceso. 
      .col-lg-6.col-md-6.mb-3.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/tarj3-2.png', alt='')
        .bg-color-acento-contenido.text-white.p-4
          h4 Condicionales (si... entonces / #[em if... then... else]) 
          p.mb-0.mb-lg-4 Permiten la toma de decisiones automatizada evaluando una condición. Si la premisa es verdadera, se ejecuta un conjunto de acciones; si es falsa, se ejecuta otro, facilitando el control lógico dentro del sistema. 

    .subt2.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle
      h4.mb-0 Proceso metodológico para crear una macro 

    p El diseño de una macro, en un contexto real de formación profesional, no inicia en el #[em software], sino en el análisis del requerimiento. Este proceso articulado comprende los siguientes pasos: 

    .row.justify-content-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/6.png', alt='')
      .col-lg-6(data-aos="fade-left")
         LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Paso 1: análisis del requerimiento")
            p.mb-1 Definir con claridad el objetivo que se desea lograr. 
            p.mb-0 Ejemplo: crear un botón que permita abrir el formulario de “calificaciones del estudiante”, únicamente si el estudiante se encuentra previamente matriculado
          div(numero="2" titulo="Paso 2: identificación del evento detonante")
            p.mb-0 Determinar el momento en que se ejecutará la acción. En este caso, corresponde al evento #[b “Al hacer clic”] sobre el botón del menú principal.
          div(numero="3" titulo="Paso 3: apertura del generador de macros")
            p.mb-0 Desde la hoja de propiedades del botón seleccionado, se accede al generador de macros para iniciar la construcción de la lógica.  
          div(numero="4" titulo="Paso 4: inserción de la lógica condicional")
            p.mb-1 Se incorpora un bloque de condición #[b “Si” #[em (If)]] y se establece la premisa lógica: 
            p.mb-0 #[b [Estado_Matricula]] #[b = "Activo"]. 
          div(numero="5" titulo="Paso 5: asignación de acciones ")
            ul.lista-ul--color.fa-lista.mb-0
              li
                i.fas.fa-cloud
                span.mb-0 En la rama verdadera #[b (Entonces)], se selecciona la acción #[b Abrir Formulario], especificando el formulario #[b “Frm_Calificaciones”]. 
              li.mb-0
                i.fas.fa-cloud
                span.mb-0 Se añade la ramificación #[b Sino #[em (Else)]] para contemplar el escenario alterno. En esta sección, se configura la acción #[b Cuadro De Mensaje], incluyendo una alerta pedagógica como: “Atención: el estudiante seleccionado no cuenta con una matrícula activa. Por favor, verifique el estado antes de asignar calificaciones.”  
          div(numero="6" titulo="Paso 6: guardado y prueba")
            p.mb-0 Se guarda la macro y se retorna a la vista de formulario para realizar pruebas. Es fundamental simular distintos escenarios (estudiante activo e inactivo) con el fin de validar la correcta ejecución del algoritmo.

    .row.justify-content-center(data-aos="fade")
      .col-lg-8.mb-4.mb-lg-0
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/t2/7.png')})`}"
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Al dominar este proceso, el estudiante materializa el diseño de la arquitectura de datos. Comprende que las tablas y sus atributos (diseñados en la fase previa) son las variables que nutren estas condiciones lógicas. Una macro no puede evaluar si un estudiante está "Activo" si, previamente, no se diseñó un campo con un tipo de dato "Texto Corto" o "Sí/No" con sus reglas de validación correspondientes. Esta es la secuencialidad temática que garantiza el éxito en la gestión de sistemas de información (Ramírez y Castro, 2023). 
      .col-lg-4
        img.mb-3.mb-lg-4.w-80x(src='@/assets/curso/temas/t2/8.svg', alt='')
        p El uso pedagógico de las macros empodera al estudiante. Le demuestra que la tecnología es maleable y que, a través de instrucciones lógicas, claras y estructuradas, es posible reducir la carga operativa de las organizaciones, minimizando la redundancia y maximizando la confiabilidad de los datos recolectados. 


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Gestión de información con #[em Structured Query Language] (SQL) 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        p Tras haber consolidado la arquitectura de datos (mediante la tipificación y configuración de atributos) y haber establecido los flujos de automatización primaria (mediante macros), el ciclo de vida del diseño de una base de datos requiere una herramienta para extraer valor de la información almacenada. Una base de datos, sin importar cuán perfecta sea su estructura, es inerte si no proporciona respuestas a las interrogantes estratégicas de una organización. Es en esta etapa formativa donde se introduce el componente más poderoso y universal de la gestión de datos: el lenguaje de consultas estructurado, mundialmente conocido por sus siglas en inglés como SQL (#[em Structured Query Language]). 
      .col-lg-6
        img(src='@/assets/curso/temas/t2/9.png', alt='')

    p El dominio del SQL es el núcleo del resultado de aprendizaje que busca "gestionar con lenguajes de consulta en Microsoft Access". Este saber trasciende el uso de la interfaz gráfica, introduciendo al aprendiz en el estándar global de comunicación con bases de datos relacionales, una competencia altamente demandada en el sector productivo y tecnológico. 

    .row.bgc-1.align-items-center.p-2.p-md-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 4. 
                span Transformación de datos
              figure
                img(src='@/assets/curso/temas/t2/fig4.png', alt='El proceso de transformación de datos en Microsoft Access. Muestra visualmente cómo un conjunto de datos de origen desordenados (izquierda) pasa a través de un embudo que representa una consulta SQL de filtrado y ordenación (centro), para finalmente convertirse en una tabla estructurada y organizada con los resultados útiles (derecha).')


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Fundamentos de SQL en la gestión de base de datos 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-7.col-10.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/11.svg', alt='')
          .col-lg-7
            .bg7.p-4.py-3
              p.mb-0 #[em Structured Query Language] (SQL) se define como un lenguaje declarativo de alto nivel, diseñado específicamente para administrar, consultar, actualizar y reorganizar datos dentro de un Sistema de Gestión de Bases de Datos Relacionales (RDBMS). A diferencia de los lenguajes de programación procedimentales (donde el programador debe detallar paso a paso cómo el sistema debe realizar una tarea), el SQL es declarativo: el usuario redacta una instrucción indicando exactamente qué información necesita, y es el motor de la base de datos (en este caso, el motor Access Database Engine) el encargado de determinar la ruta algorítmica más eficiente para recuperar esos datos. 
        p Esta característica declarativa lo hace un lenguaje semánticamente cercano al lenguaje humano formal. Las instrucciones en SQL se estructuran mediante "cláusulas" que se leen casi como oraciones en inglés. Las sentencias se dividen principalmente en dos grandes categorías, aunque para efectos de la extracción de información, el enfoque recae en el lenguaje de manipulación de datos (DML) y, más específicamente, en la instrucción #[em SELECT]. 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Anatomía de una consulta de selección básica 

    p Para que el motor de bases de datos comprenda la petición, la sintaxis debe respetar un orden lógico inquebrantable. Los componentes fundamentales de una consulta de extracción son: 

    .row.justify-content-center.align-items-center
      .col-lg-6(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.fa-lista
          li
            i.fas.fa-cloud
            span.mb-0 #[b #[em SELECT] (seleccionar):] indica cuáles campos (columnas) se desean visualizar en el resultado final.
          li
            i.fas.fa-cloud
            span.mb-0 #[b #[em FROM] (desde):] especifica la tabla o conjunto de tablas de origen donde residen los datos solicitados.
          li
            i.fas.fa-cloud
            span.mb-0 #[b #[em WHERE] (donde):] establece los criterios o condiciones lógicas que deben cumplir los registros para ser incluidos. Actúa como el filtro principal.  
          li
            i.fas.fa-cloud
            span.mb-0 #[b #[em ORDER BY] (ordenar por):] determina el criterio de ordenamiento (ascendente o descendente) del conjunto de resultados final. 
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/12.png', alt='')


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Empleabilidad de SQL en el entorno de trabajo de Microsoft Access 

    p Microsoft Access posee una característica dual que lo convierte en una herramienta pedagógica excepcional: cuenta con una interfaz gráfica para el diseño de consultas llamada QBE (#[em Query By Example o consulta por ejemplo]) y, simultáneamente, posee un editor de texto subyacente de código SQL. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/13.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Cuando un usuario sin conocimientos de programación arrastra tablas y campos en la cuadrícula de diseño de Access, el #[em software] está escribiendo silenciosamente el código SQL en segundo plano. Sin embargo, para cumplir con los estándares de formación técnica y tecnológica, el administrador de bases de datos debe ser capaz de prescindir de la cuadrícula gráfica y manipular directamente el código. Comprender el SQL puro es imperativo porque permite realizar consultas complejas (como subconsultas anidadas o uniones externas complejas) que la interfaz gráfica QBE a menudo no puede representar adecuadamente, además de garantizar que el aprendiz pueda migrar sus conocimientos a motores más robustos como SQL #[em Server, Oracle] o #[em PostgreSQL] en su futuro laboral (Sánchez, 2023). 

    .row.bgc-1.align-items-center.p-2.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 5. 
                span Captura de pantalla dividida de Microsoft Access
              figure 
                img(src='@/assets/curso/temas/t2/fig5.png', alt='Captura de pantalla dividida de Microsoft Access. La mitad superior muestra la "Vista Diseño" con la relación gráfica entre las tablas "Clientes" y "Pedidos". La mitad inferior revela la "Vista SQL" correspondiente, mostrando el código de la consulta y destacando las sentencias clave como SELECT, FROM, INNER JOIN y WHERE.')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Proceso de implementación de código SQL en Access

    p El desarrollo de consultas mediante lenguaje estructurado dentro del entorno de Microsoft Access sigue un procedimiento metodológico claro que el aprendiz debe interiorizar: 

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA.tb(tipo="b" clase-tarjeta="tarjeta bg4")
          .row(titulo="Apertura del entorno de consulta")
            .col-11
              p.mb-0 Desde la cinta de opciones principal, se navega a la pestaña #[b Crear] y se selecciona #[b Diseño de consulta]. Access, por defecto, intentará mostrar el cuadro de diálogo para agregar tablas de forma gráfica; el diseñador debe cerrar este cuadro.
          .row(titulo="Transición a la Vista SQL")
            .col-11
              p.mb-0 En la esquina superior izquierda de la pantalla, en el grupo #[b Vistas], se debe desplegar el menú y seleccionar explícitamente #[b Vista SQL]. Inmediatamente, la cuadrícula gráfica desaparece, dando paso a un editor de texto en blanco encabezado por la palabra reservada #[b SELECT]. Este constituye el lienzo del administrador de bases de datos.
          .row(titulo="Redacción de la instrucción")
            .col-11
              p.mb-0 El aprendiz procede a escribir la sintaxis. Como buena práctica (y altamente recomendado por motivos de legibilidad), se deben escribir las palabras reservadas de SQL en #[b MAYÚSCULAS], mientras que los nombres de las tablas y campos deben mantenerse tal como fueron definidos en la arquitectura inicial.
          .row(titulo="Uso de operadores relacionales y lógicos")
            .col-11
              p.mb-0 En la cláusula #[b WHERE], el entorno de Access soporta el uso de operadores matemáticos #[b (=, <, >, <=, >=, <>) ] y operadores lógicos #[b (AND, OR, NOT)]. La correcta combinación de estos operadores es lo que otorga precisión a la consulta.
          .row(titulo="Ejecución de la consulta")
            .col-11
              p.mb-0 Una vez redactada la instrucción, terminada con un punto y coma (;), se debe ubicar el botón #[b Ejecutar] (representado por un ícono de signo de exclamación rojo !) en la cinta de opciones. Al presionarlo, el motor procesa el código textual
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/14.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-9.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t2/15.png', alt='')
      .col-lg-7
        .bg1.p-4.h-100.d-flex.align-items-center.justify-content-center.flex-column
          p Si la sintaxis es correcta y la lógica es coherente, el sistema presentará una #[b “Hoja de datos”] temporal con la información solicitada. 
          p.mb-0 Si existe un error de sintaxis (por ejemplo, una coma faltante o el nombre de un campo mal escrito), Access desplegará un cuadro de diálogo advirtiendo el fallo, lo que obliga al aprendiz a depurar su código. 

    p El uso del lenguaje SQL en Microsoft Access es la consolidación del control total sobre la base de datos. Transforma al aprendiz de un usuario operativo a un administrador estratégico, capaz de auditar, cruzar y analizar volúmenes de información mediante el uso estricto de la lógica computacional, preparándolo para los desafíos reales de la transformación digital contemporánea (Morales et al., 2021). 



</template>

<script>
export default {
  name: 'Tema2',
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
