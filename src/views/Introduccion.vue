<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 La aplicabilidad de estos conocimientos en la vida profesional es significativa. En el contexto laboral actual, la toma de decisiones se fundamenta en el análisis de datos confiables. Una adecuada administración de bases de datos permitirá al egresado optimizar tiempos, reducir errores en la gestión de la información y generar reportes estratégicos en diversos contextos organizacionales, ya sean instituciones educativas, empresas del sector productivo o entidades públicas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-7.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-8
        p Los contenidos se desarrollarán desde un enfoque pedagógico activo y constructivista, apoyado en el uso de las Tecnologías de la Información y la Comunicación (TIC). El proceso formativo está diseñado para articular cada concepto teórico con su aplicación práctica en contextos reales, facilitando la comprensión y apropiación del conocimiento. De este modo, el aprendizaje se concibe como una construcción progresiva y significativa, más allá de la simple acumulación de contenidos.
        p Este curso adquiere una relevancia fundamental dentro del proceso formativo, ya que permite alcanzar el resultado de aprendizaje principal: diseñar bases de datos con una adecuada arquitectura de datos y gestionarlas mediante lenguajes de consulta en Microsoft Access. Al desarrollar estas competencias, el estudiante no solo fortalece su perfil técnico, sino que también potencia su capacidad de análisis, abstracción y pensamiento lógico, habilidades clave para adaptarse a las dinámicas cambiantes del entorno digital (García y Muñoz, 2021). 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 


</template>

<script>
export default {
  name: 'Introduccion',
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
