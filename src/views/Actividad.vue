<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión de bases de datos con Microsoft Access',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con los tipos de datos, la configuración de campos, las macros, el lenguaje SQL y la interoperabilidad en Microsoft Access.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué tipo de dato en Microsoft Access se utiliza para almacenar nombres, códigos o cadenas alfanuméricas de hasta 255 caracteres?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Texto Corto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Moneda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Autonumeración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el uso del tipo de dato Texto Corto para información alfanumérica breve.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la clasificación de tipos de datos en Microsoft Access.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal del tipo de dato Autonumeración en una tabla de Access?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar descripciones extensas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permitir cálculos monetarios sin redondeo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar un valor único y secuencial para cada registro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registrar valores booleanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el uso de Autonumeración como identificador único de registros.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las claves principales y el tipo de dato Autonumeración.',
        },
        {
          id: 3,
          texto:
            '¿Qué permiten definir los atributos o propiedades de un campo en Access?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las reglas de formato, validación y comportamiento del dato.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el nombre visual de la tabla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las relaciones entre todas las tablas de la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La creación automática de formularios e informes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función de las propiedades del campo en la validación y control de datos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con atributos como tamaño del campo, formato y regla de validación.',
        },
        {
          id: 4,
          texto:
            '¿En qué vista de Microsoft Access se construye la arquitectura interna de una tabla y se configuran sus campos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vista Hoja de Datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vista SQL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vista Diseño.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vista Informe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la Vista Diseño como entorno para estructurar tablas y campos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el entorno de trabajo en Vista Diseño.',
        },
        {
          id: 5,
          texto:
            'Si se desea que un campo Nota_Evaluacion solo acepte valores entre 0 y 100, ¿qué propiedad debe configurarse principalmente?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regla de validación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Valor predeterminado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Título.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Descripción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el uso de reglas de validación para controlar el rango permitido de un dato.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la validación lógica de la información.',
        },
        {
          id: 6,
          texto:
            '¿Para qué sirve la propiedad Máscara de entrada en un campo de Access?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para crear llaves primarias automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para obligar al usuario a digitar el dato siguiendo un patrón específico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para convertir un texto en número.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para exportar datos a Excel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la máscara de entrada como apoyo al ingreso controlado de datos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las propiedades que orientan y restringen la captura de información.',
        },
        {
          id: 7,
          texto:
            'En programación orientada a eventos dentro de Access, el evento al hacer clic (<em>On Click</em>) ocurre cuando:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se abre una tabla automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se ejecuta una consulta SQL en segundo plano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El usuario presiona un botón o control en la interfaz.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El sistema cierra la base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los eventos como detonantes de acciones programadas en Access.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la programación orientada a eventos.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza a la programación orientada a eventos en el contexto de Microsoft Access?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El sistema ejecuta siempre una secuencia fija sin intervención del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Todas las tareas se realizan únicamente mediante código VBA extenso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La base de datos funciona solo con macros de importación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las acciones del usuario determinan cuándo se dispara una respuesta programada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la lógica de respuesta a eventos en Access.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la naturaleza de los eventos y su papel en la automatización.',
        },
        {
          id: 9,
          texto: '¿Qué es una macro en Microsoft Access?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un lenguaje exclusivo para diseñar tablas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una herramienta de programación visual que automatiza tareas sin escribir código complejo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de dato para almacenar procedimientos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un asistente para crear relaciones entre tablas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las macros como mecanismo de automatización visual en Access.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el diseño e implementación de macros.',
        },
        {
          id: 10,
          texto:
            '¿Qué estructura lógica en una macro permite tomar decisiones según se cumpla o no una condición?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orden descendente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Importar y exportar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Si... Entonces... Sino.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Texto corto y texto largo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las estructuras condicionales en la automatización de procesos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con secuencialidad y condicionales en macros.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es una característica fundamental del lenguaje SQL en la gestión de bases de datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un lenguaje gráfico exclusivo para formularios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo se usa para diseñar macros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es un lenguaje declarativo que indica qué información se necesita.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplaza por completo la estructura de las tablas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la naturaleza declarativa del lenguaje SQL.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos de SQL en Microsoft Access.',
        },
        {
          id: 12,
          texto:
            '¿Qué cláusula de una consulta SQL se utiliza para indicar los campos que se desean visualizar en el resultado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>WHERE</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>SELECT</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>ORDER BY</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>FROM</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función de la cláusula SELECT dentro de una consulta SQL.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la anatomía de una consulta de selección.',
        },
        {
          id: 13,
          texto:
            '¿Qué función cumple la cláusula <em>WHERE</em> en una instrucción SQL?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer los criterios que deben cumplir los registros para mostrarse.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ordenar los resultados de forma ascendente o descendente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Especificar la tabla de origen de los datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guardar automáticamente la consulta en la base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con <em>WHERE</em> como filtro principal de una consulta.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las cláusulas básicas del lenguaje SQL.',
        },
        {
          id: 14,
          texto:
            '¿Qué significa QBE en el entorno de consultas de Microsoft Access?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Quick Base Engine.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Quality Backup Export.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Query By Example.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Question Based Evaluation.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con QBE como interfaz gráfica para construir consultas en Access.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la relación entre la vista gráfica y la Vista SQL.',
        },
        {
          id: 15,
          texto:
            '¿Qué acción debe realizarse para escribir directamente una consulta en código dentro de Access?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seleccionar Vista SQL desde el grupo Vistas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Abrir una tabla en Vista Hoja de Datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear una macro de validación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar una máscara de entrada a los campos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el acceso al editor textual de consultas en Microsoft Access.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el procedimiento para trabajar en Vista SQL.',
        },
        {
          id: 16,
          texto:
            'En una cláusula <em>WHERE</em>, el operador lógico <em>AND</em> permite:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Excluir todos los registros de una tabla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Combinar varias condiciones que deben cumplirse al mismo tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ordenar el resultado final de la consulta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear un nuevo campo calculado automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el uso de operadores lógicos para precisar filtros en SQL.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con operadores relacionales y lógicos en consultas.',
        },
        {
          id: 17,
          texto:
            '¿Qué aspecto es indispensable al importar datos desde Excel hacia una tabla ya diseñada en Access?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que todas las columnas tengan colores diferentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que la hoja de Excel tenga macros habilitadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que los datos importados coincidan con los tipos de datos y atributos definidos en Access.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que el archivo se encuentre únicamente en la nube.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la compatibilidad de datos durante la importación desde fuentes externas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mapeo y la conversión de datos en procesos de importación.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una finalidad frecuente de exportar a Excel o PDF el resultado de una consulta en Access?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar reportes, análisis o documentos para compartir en otros entornos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Transformar automáticamente todos los textos en números.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los datos originales de la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convertir una tabla local en clave principal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la exportación como mecanismo de uso y difusión de la información procesada.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la interoperabilidad y la salida de información desde Access.',
        },
        {
          id: 19,
          texto:
            '¿Qué permite el estándar ODBC en relación con Microsoft Access?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar formularios más rápidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conectarse y comunicarse con motores de bases de datos externos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar el lenguaje SQL por macros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Crear automáticamente todas las relaciones de una base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con ODBC como mecanismo de conexión con otras bases de datos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la conexión de Access con sistemas externos.',
        },
        {
          id: 20,
          texto:
            'Cuando Access funciona como <em>front-end</em> y los datos reales están en un servidor remoto, ¿qué ventaja principal se obtiene?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La base de datos deja de necesitar tablas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo puede trabajar una persona a la vez.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los cambios se actualizan en tiempo real y favorecen el trabajo colaborativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se elimina la necesidad de usar consultas SQL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la vinculación de datos en línea y el trabajo colaborativo sobre un repositorio central.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la transferencia de datos a través de internet y la lógica <em>front-end / back-end</em>.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la Gestión de bases de datos con Microsoft Access.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
