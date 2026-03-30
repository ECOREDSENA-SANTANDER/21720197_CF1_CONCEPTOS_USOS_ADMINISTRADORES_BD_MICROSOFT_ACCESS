<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p Este componente orienta el desarrollo de competencias en la gestión integral de la información mediante Microsoft Access, abordando desde la correcta estructuración de los datos hasta su uso estratégico. A través de la organización de la arquitectura de datos, la implementación de procesos automatizados, la construcción de consultas para el análisis y la capacidad de integrar información con otros sistemas, se promueve una visión aplicada y funcional del manejo de bases de datos. De esta manera, el aprendiz no solo adquiere habilidades técnicas, sino que también fortalece su capacidad para resolver problemas y optimizar procesos en contextos reales. 

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente de gestión de bases de datos en Microsoft Access integra de manera articulada cuatro elementos fundamentales: la arquitectura de datos, que permite estructurar la información garantizando su integridad y coherencia; la automatización de procesos, que optimiza tareas mediante macros y eventos reduciendo errores humanos; la extracción de información, que facilita el análisis preciso a través del lenguaje SQL; y la interoperabilidad, que posibilita la conexión con otros sistemas mediante la importación y exportación de datos. En conjunto, estos elementos permiten diseñar soluciones eficientes, confiables y orientadas a la toma de decisiones en contextos reales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
