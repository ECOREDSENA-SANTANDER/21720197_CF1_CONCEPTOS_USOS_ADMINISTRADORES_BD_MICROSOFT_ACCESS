<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Interoperabilidad: exportación e importación de datos 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p En el ecosistema tecnológico contemporáneo, ninguna base de datos opera como una isla aislada. La información fluye constantemente entre diferentes plataformas, aplicaciones, organizaciones y usuarios. Para que el diseño y la gestión de una base de datos en Microsoft Access alcancen su máxima utilidad, el administrador debe dominar los procesos de interoperabilidad: la capacidad del sistema para comunicarse, intercambiar y comprender datos provenientes de fuentes externas, así como la habilidad para compartir sus propios datos hacia el exterior. 
        .cajon.color-secundario.p-4
          p.mb-0 Esta sección aborda la exportación e importación de datos utilizando tanto sistemas de almacenamiento local como conexiones a través de internet. Este saber de proceso complementa el resultado de aprendizaje, garantizando que el diseño de la arquitectura y las consultas SQL no se queden atrapadas en un entorno cerrado, sino que posean aplicabilidad real en contextos productivos dinámicos y colaborativos. 

    .row.bgc-1.align-items-center.p-2.p-md-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 6. 
                span Flujo bidireccional de información con Microsoft Access
              figure
                img(src='@/assets/curso/temas/t3/fig6.png', alt='El flujo de información bidireccional centrado en Microsoft Access. Muestra la importación de datos (entrada) desde fuentes como Excel, archivos de texto y la nube hacia la base de datos central. A su vez, visualiza la exportación de datos (salida) hacia reportes PDF, correos electrónicos y servidores web, resumiendo el movimiento completo de información.')


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Integración con sistemas locales y ofimático 

    p.mb-4 La integración a nivel local se refiere al intercambio de información entre Microsoft Access y otros archivos o programas que residen en la misma computadora o red de área local (LAN). En el ámbito educativo y administrativo, la herramienta con la que Access interactúa de manera más frecuente es Microsoft Excel, seguida de los archivos de texto plano separados por comas (CSV). 

    .row.justify-content-center.mb-4
      .col-lg-6.mb-3
        .bg1.tarjeta.p-4.py-lg-5.h-100
          .row.mb-4
            .col-lg-2.col-md-2.col-3
              img(src='@/assets/curso/temas/t3/tarj1-1.svg', alt='')
          h4 El proceso de importación local 
          p.mb-4 Importar no es simplemente "copiar y pegar" datos. Es un proceso crítico de transformación donde la información externa no estructurada (o estructurada de manera diferente) se somete a las reglas de negocio de la base de datos receptora. Cuando un administrador importa una hoja de cálculo a Access, debe realizar un mapeo de datos. Esto significa que debe indicarle al sistema a qué tabla de destino irán los datos y asegurar que las columnas de Excel coincidan lógicamente con los tipos de datos y atributos previamente configurados en Access. Si la columna de Excel contiene letras, pero el campo de Access está tipificado como "Número", el proceso de importación arrojará un error de conversión. 
          .bg-white.tarjeta.p-4.mb-0
            TarjetaAudio.color-primario(
              texto="El proceso de importación local"
              :audio="require('@/assets/componentes/audios/podcast.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-lg-6.mb-3
        .bg2.tarjeta.p-4.p-lg-5.h-100
          .row.mb-4
            .col-lg-2.col-md-2.col-3
              img(src='@/assets/curso/temas/t3/tarj1-2.svg', alt='')
          h4 El proceso de exportación local 
          p.mb-3 La exportación es el proceso inverso. Ocurre frecuentemente después de que el administrador ha utilizado el lenguaje de consultas SQL para extraer un conjunto de datos específico. Por ejemplo, tras ejecutar una consulta que filtra a los aprendices con rendimiento sobresaliente, ese resultado (esa tabla virtual) puede exportarse a Excel para que el departamento de bienestar estudiantil realice gráficos dinámicos, o a un archivo PDF para generar un boletín inmodificable y listo para impresión. 
          img(src='@/assets/curso/temas/t3/podcast.svg', alt='')

    //.row.justify-content-center
      .col-lg-10
        .bg-color-primario     
          img(src='@/assets/curso/temas/t3/podcast.svg', alt='')
          .p-4
            .bg-white.tarjeta.p-4
              TarjetaAudio.color-primario(
                texto="El proceso de importación local"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Conexión y transferencia de datos a través de internet 

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4.mb-3
        .bg2.p-4.h-100.d-flex.align-items-center
          p.mb-0 La transformación digital ha desplazado el almacenamiento de datos desde los discos duros locales hacia la nube. Un administrador de bases de datos moderno debe estar en la capacidad de conectar Microsoft Access con repositorios de información en internet. Access posee la funcionalidad de vincular tablas a través de protocolos ODBC (#[em Open Database Connectivity]) y de interactuar con plataformas como Microsoft SharePoint o listas en la web. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/2.svg', alt='')
      .col-lg-4.mb-3 
        img.mb-3.w-80x(src='@/assets/curso/temas/t3/3.svg', alt='')
        p A diferencia de la importación tradicional (donde se crea una copia estática de los datos en el disco local), la vinculación a través de internet permite que Access actúe como una interfaz de usuario o "#[em Front - end]", mientras que los datos reales residen en un servidor web remoto o "#[em Back - end]". Esto significa que cualquier cambio realizado mediante formularios o consultas SQL en Access se actualizará en tiempo real en la nube, permitiendo el trabajo colaborativo simultáneo desde diferentes ubicaciones geográficas. 

    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Ejemplo aplicado:] supóngase que una red de centros de formación del SENA en diferentes ciudades necesita actualizar un inventario centralizado de equipos de cómputo. En lugar de que cada centro envíe un archivo de Excel semanal por correo, se configura una tabla en la nube (SharePoint o Azure SQL). Cada aprendiz administrador en su respectiva ciudad utiliza Access vinculado a esa base de datos en línea. Cuando insertan un nuevo equipo mediante un formulario local, el dato viaja por internet y actualiza el repositorio central instantáneamente, garantizando que todos tengan acceso a la misma "verdad" de los datos en tiempo real (Pérez y Domínguez, 2025). 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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
