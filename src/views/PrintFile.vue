<template>
  <div class="print-file">
    <div class="print-file__wrapper">

      <div class="print-viewer__wrapper">
        <!-- Empty -->
        <img :src="require('@/assets/images/upload-lg.svg')" alt="icon empty" />
      </div>

      <div class="print-feature__wrapper print-accordion__wrapper">
        <!-- print-feature : UPLOAD -->
        <div class="accordion">
          <div class="accordion-heading">
            <img class="accordion-heading__icon" :src="require('@/assets/images/icon-defaut.svg')" alt="icon empty" />
            <h4 class="accordion-heading__title h4">Déposer votre fichier impression 3D</h4>
            <img class="accordion-heading__arrow" :src="require('@/assets/images/arrow-circle.svg')" alt="arrow circle" />
          </div>
          <div class="accordion-content">
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique netus sagittis, feugiat tempor sed ut feugiat. Sed suscipit arcu mauris integer magna phasellus.</p>
            <form action="" enctype="multipart/form-data" class="accordion-content__upload">
            <input
              type="file"
              id="formFile"
              name="file"
              ref="fichier"
              @change="previewFile"
            />
          </form>
          </div>
        </div>
        <!-- print-feature : PROJET -->
        <div class="print-feature"></div>
        <!-- print-feature : MATERIALS -->
        <div class="print-feature"></div>
        <!-- print-feature : OPTIONS -->
        <div class="print-feature"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    previewFile() {
      console.log("preview");
    },
  },
  name: "PrintFile",
};
</script>