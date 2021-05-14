<template>
  <div class="print-file">
    <div class="print-file__wrapper">

      <div class="print-viewer__wrapper">
        <!-- Empty -->
        <img v-if="emptyModel" :src="require('@/assets/images/upload-lg.svg')" alt="icon empty" />

        <!-- model Stl -->
        <div class="model__wrapper">
          <model-stl v-if="isUpload"
          ref="modelstl"
          :width="400"
          :height="400"
          :backgroundAlpha="0.5"
          :lights="lighter"
          :glOptions="{ preserveDrawingBuffer: true }"
          :src="stlBase64"></model-stl>
        </div>
      </div>

      <!-- Shop bar -->
      <div class="print-shopbar">
        <div class="print-shopbar__action">
          <button class="btn btn--plain" @click="screenshot">Ajouter au panier</button>
        </div>
        <div class="print-shopbar__quantity">
          <label for="" class="print-shopbar__quantity__label">Quantité</label>
          <input type="number" class="print-shopbar__quantity__input">
        </div>
        <div class="print-shopbar__price">
          <span>Prix</span>
          <span> -- Ht</span>
        </div>
      </div>

      <div class="accord-list" ref="accordion" data-active="item1">
        <!-- print-feature : UPLOAD -->
        <div class="accord-item accord-item--active" ref="item1">
          <div class="accord-item-heading" @click="openAccordItem('item1')">
            <img class="accord-item-heading__icon" :src="require('@/assets/images/icon-defaut.svg')" alt="icon empty" />
            <h4 class="accord-item-heading__title h4">Déposer votre fichier impression 3D</h4>
            <img class="accord-item-heading__arrow" :src="require('@/assets/images/arrow-circle.svg')" alt="arrow circle" />
          </div>
          <div class="accord-item-content">
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique netus sagittis, feugiat tempor sed ut feugiat. Sed suscipit arcu mauris integer magna phasellus.</p>
            <form action="" enctype="multipart/form-data" class="accord-item-content__upload">
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
        <div class="accord-item" ref="item2">
          <div class="accord-item-heading" @click="openAccordItem('item2')">
            <img class="accord-item-heading__icon" :src="require('@/assets/images/icon-defaut.svg')" alt="icon empty" />
            <h4 class="accord-item-heading__title h4">Type de fichier</h4>
            <img class="accord-item-heading__arrow" :src="require('@/assets/images/arrow-circle.svg')" alt="arrow circle" />
          </div>
          <div class="accord-item-content">
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique netus sagittis, feugiat tempor sed ut feugiat. Sed suscipit arcu mauris integer magna phasellus.</p>
          </div>
        </div>
        <!-- print-feature : MATERIALS -->
        <div class="accord-item" ref="item3">
          <div class="accord-item-heading" @click="openAccordItem('item3')">
            <img class="accord-item-heading__icon" :src="require('@/assets/images/icon-defaut.svg')" alt="icon empty" />
            <h4 class="accord-item-heading__title h4">Type de Materiel</h4>
            <img class="accord-item-heading__arrow" :src="require('@/assets/images/arrow-circle.svg')" alt="arrow circle" />
          </div>
          <div class="accord-item-content">
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique netus sagittis, feugiat tempor sed ut feugiat. Sed suscipit arcu mauris integer magna phasellus.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloremque odit, laboriosam magni minus aut mollitia voluptatibus, accusantium inventore reprehenderit, asperiores eos. Veritatis sint quidem quis asperiores facilis, illo aut.

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, voluptatem at. Quo perspiciatis maiores corrupti consequatur aliquam quod quisquam itaque odit, veritatis, sed, debitis dignissimos? Recusandae officiis quas in deserunt.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio, totam incidunt soluta ea minus ut nostrum fuga excepturi accusantium, nesciunt rem similique iste obcaecati dolorum est culpa velit exercitationem?

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis veniam sequi enim, non minima corporis doloribus? Veniam esse vitae voluptatem in eos, soluta qui, dolorum alias tenetur exercitationem aut!
              
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae id, perferendis neque nobis dicta explicabo provident officia, beatae aut quod esse nisi non itaque omnis nesciunt pariatur. Quaerat, inventore molestias!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam perspiciatis iusto dignissimos et, reprehenderit rem ducimus adipisci dolore delectus, incidunt non exercitationem, aperiam ad quae maxime quo eveniet. Ducimus?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci neque expedita nisi, pariatur quos provident iusto modi ipsam facilis magni maiores aspernatur, voluptatum vitae harum dolor accusantium, officia quae rem?
            </p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad atque cum, asperiores culpa laborum assumenda molestiae eligendi itaque deserunt doloremque, repudiandae nulla magni quo. Impedit modi voluptas facere fugit vel.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, inventore ullam debitis culpa perspiciatis quidem sit, fugit quasi quas saepe excepturi porro dolorem fugiat sunt dolor delectus. Sequi, odio dolores.</p>
          </div>
        </div>
        <!-- print-feature : OPTIONS -->
        <div class="accord-item" ref="item4">
          <div class="accord-item-heading" @click="openAccordItem('item4')">
            <img class="accord-item-heading__icon" :src="require('@/assets/images/icon-defaut.svg')" alt="icon empty" />
            <h4 class="accord-item-heading__title h4">Selectionner des options</h4>
            <img class="accord-item-heading__arrow" :src="require('@/assets/images/arrow-circle.svg')" alt="arrow circle" />
          </div>
          <div class="accord-item-content">
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique netus sagittis, feugiat tempor sed ut feugiat. Sed suscipit arcu mauris integer magna phasellus.</p>
          </div>
        </div>
      </div>

      <!-- 'display: none' Resumer Article - test pour enregistrer la photo -->
      <div class="article---resume">
        <h5>article</h5>
        <div class="screenshot__media">
          <img class="screenshot" v-if="screenshotFile" :src="screenshotFile"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ModelStl from '@/components/model/ModelStl.vue'
export default {
  data() {
    return {
      isUpload: false,
      stlBase64: null,
      emptyModel: true,
      selectedColor: "0xffffff",
      screenshotFile: null,
      article: {
        name: '',
        src: '',
        colored: ''
      },
    }
  },
  computed: {
    lighter() {
      return [
        {
          type: "HemisphereLight",
          position: { x: 0, y: 1, z: 0 },
          skyColor: 0xaaaaff,
          groundColor: 0x806060,
          intensity: 0.2,
        },
        {
          type: "DirectionalLight",
          position: { x: 1, y: 1, z: 1 },
          color: Number(this.selectedColor),
          intensity: 0.8,
        },
      ];
    },
  },
  methods: {
    /**
     * preview File
     * Afficle le 'mode-stl'
     */
    previewFile() {
      this.isUpload = true;
      this.loadModel()
      this.emptyModel = false
    },
    /**
     * loadModel
     * affecte le fichier uploader par l'utilisateur au 'model-stl'
     */
    loadModel() {
      let reader = new FileReader();
        reader.onload = (e) => {
          this.stlBase64 = e.target.result;
          // console.log(this.$refs.modelstl.renderer.domElement.dataset.sizing);
        };
        reader.readAsDataURL(this.$refs.fichier.files[0]);
    },
    /**
     * Accordion
     * @param id String - référence 
     */
    openAccordItem(id) {

        if (id == this.$refs.accordion.dataset.active) {
            this.$refs[id].classList.toggle('accord-item--active')
        } else {
            this.$refs[id].classList.add('accord-item--active')
            this.$refs[this.$refs.accordion.dataset.active].classList.remove('accord-item--active')
            this.$refs.accordion.dataset.active = id
        } 
          
    },
    // screenshot du modelStl
    screenshot() {
      this.screenshotFile = this.$refs.modelstl.renderer.domElement.toDataURL("image/png",1);
      this.article.src = this.$refs.modelstl.renderer.domElement.toDataURL("image/png",1);
    },
  },
  name: "PrintFile",
  components: {
    ModelStl
  }
};
</script>