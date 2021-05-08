<template>
  <div class="print-file">
    <div class="zone-viewer">
      <!-- Form upload -->
      <form action="" enctype="multipart/form-data" class="viewer__form">
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