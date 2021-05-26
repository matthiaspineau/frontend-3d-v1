<template>
  <div class="projet-wrapper">

    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>
      
      <h3 class="projet-heading">Glissez et déposez vos fichiers ou bien parcourir mes fichiers</h3>

      <div class="projet-content">
        
        <p class="p">Pour permettre de comprendre au mieux votre projet, nous acceptons tous types de fichiers. Image, spécification, croquis, plan,…</p>

        <div class="zone">
            <form action="" enctype="multipart/form-data" class="accord-item-content__upload">
            <input
              type="file"
              id=""
              name="file"
              ref="fichier"
              @change="selectFile"
              
            />
          </form>

          <ul v-if="files.length > 0" class="">
            <li v-for="(file, index) in files" :key="index">
              {{file.name}}
              <span  @click="remove(file.name)">delete</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="projet-action">
        <button class="btn btn--plain btn--center" @click="next">
          Etape suivante
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  name: 'ProjetUpload',
  // props: {
  //   files: {
  //     type: Array,
  //     default() { return [] }
  //   }
  // },
data() {
    return {
        files: [],
    };
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() { 
        this.$emit('next', { file: this.files });
    },
    remove(str) {
      this.files = this.files.filter(elt => {
        return elt.name !== str
      })
    },
    selectFile(event) {
      
      // console.log(typeof event.target.files[0])
      // console.log(event.target.files[0])
      this.files.push(event.target.files[0]);
      console.log(this.files)
    }
  },
   
}
</script>