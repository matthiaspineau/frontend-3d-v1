<template>
<div class="uploadedFile">

  <div class="container">
    
    <div class="wrapper__uploaded">
      <!------------------------------>
      <!-- 1ere etape : upload file -->
      <!------------------------------>
      <section class="wrapper__viewer">
          <div class="viewer">
              <h3 class="viewer__heading">1er étapes: déposer un fichier</h3>
              <!-- Model loader -->
              <div class="viewer__media">
                <div class="models">
                  <!-- Empty -->
                <img v-if="empty" :src="require('@/assets/images/illustration-empty.svg')" alt="icon empty" />

                <!-- Model STL -->
                <model-stl
                  v-if="modelStl"
                  ref="modelstl"
                  :width="250"
                  :height="250"
                  :backgroundAlpha="0.5"
                  :backgroundColor="color"
                  :lights="lighter"
                  :glOptions="{ preserveDrawingBuffer: true }"
                  :src="stlBase64"
                ></model-stl>

                <!-- Model OBJ -->
                <model-obj
                  v-if="modelObj"
                  ref="modelobj"
                  :width="250"
                  :height="250"
                  :backgroundAlpha="0.5"
                  :backgroundColor="color"
                  :lights="lighter"
                  :glOptions="{ preserveDrawingBuffer: true }"
                  :src="objBase64"
                ></model-obj>
                </div> 
              </div>

              <!-- Form upload -->
              <form action="" enctype="multipart/form-data" class="viewer__form">
                <input type="file" id="formFile" name="file" ref="fichier" 
                @change="previewFile" />
              </form>

            <div class="viewer__option">
            <p>Nom du fichier : {{ fileName }}</p>
            <div>
              <label for="" class="label">Couleur</label>
              <select v-model="selectedColor" id="" class="form-select">
                <option :value="'0xffffff'">blanc</option>
                <option :value="'0x0026ff'">blue</option>
                <option :value="'0x00ffd9'">green</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <!---------------------------->
      <!-- 2eme etape : sreenshot -->
      <!---------------------------->
      <div class="wrapper__screenshot hide">
        <h3 class="viewer__heading">2eme étapes: photo du fichier</h3>
        <button id="btn" class="btn" @click="screenshot">screenshot</button>
        <div class="screenshot__media">
          <img class="screenshot" v-if="screenshotFile" :src="screenshotFile"/>
        </div>
        <div class="hide__divider" v-if="!step.two"></div>
      </div>

     </div>

      <!-------------------------------------->
      <!-- 3eme etape : enregistrer article -->
      <!-------------------------------------->
      <div class="wrapper__shopping hide">
        <h3 class="viewer__heading">3eme étapes: enregistrer l'article</h3>
        <div class="">
          <!-- Article -->
          <div class="wrapper__article">
            <div class="article" v-if="step.three">
              <div class="article__media">
                <img :src="article.src" alt="image">
              </div>
              <div class="article__text">
                <h5>{{ article.name }}</h5>
                <div>couleur: <span class="article__colored" :style="{ background: article.colored}" ></span></div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn" @click="saveArticle">enregistrer l'article</button>
        <div class="hide__divider" v-if="!step.three"></div>
      </div>
     </div>

</div>
</template>

<script>
import ModelStl from "@/components/model/ModelStl.vue";
import ModelObj from "@/components/model/ModelObj.vue";

export default {
  data() {
    return {
      base64: null,
      screenshotFile: null,
      fileName: "mon-fichier.png",
      modelStl: false,
      modelObj: false,
      stlBase64: null,
      objBase64: null,
      color: "#fff",
      empty: true,
      selectedColor: "0xffffff",
      sizing: {
        x: 0,
        y: 0,
        z: 0,
      },
      article: {
        name: '',
        src: '',
        colored: ''
      },
      step: {
        two: false,
        three: false
      }
    };
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
    previewFile() {
      let str = this.$refs.fichier.files[0].name;
      this.fileName = str;

      str = str.substring(str.length - 3);

      if (str != "stl" && str != "obj") {
        console.log("erreur de fichier");
        return;
      }
      this.empty = false;

      this.loadModel(str);
      this.step.two = true;
      
    },
    screenshot() {
      if (this.modelStl) {
        this.screenshotFile = this.$refs.modelstl.renderer.domElement.toDataURL("image/png",1);
        this.article.src = this.$refs.modelstl.renderer.domElement.toDataURL("image/png",1);
      }

      if (this.modelObj) {
        this.screenshotFile = this.$refs.modelobj.renderer.domElement.toDataURL("image/png",1);
        this.article.src = this.$refs.modelobj.renderer.domElement.toDataURL("image/png",1);
      }
      this.article.name = this.$refs.fichier.files[0].name;
      this.article.colored = '#' + this.selectedColor.substring(2, this.selectedColor.length);
      this.step.three = true;
    },
    saveArticle() {
      
      this.$store.commit('ADD_ARTICLE', {
                article: this.article
      })

      // this.article.name = '' 
      // this.article.src = ''
      // this.article.colored = ''

    },
    loadModel(str) {
      let reader = new FileReader();

      if (str == "stl") {
        // console.log('fichier stl')
        this.modelStl = true;
        this.modelObj = false;
        this.objBase64 = null;

        reader.onload = (e) => {
          this.stlBase64 = e.target.result;
          console.log(this.$refs.modelstl.renderer.domElement.dataset.sizing);
        };
      } else {
        // console.log('fichier obj')
        this.modelStl = false;
        this.modelObj = true;
        this.stlBase64 = null;

        reader.onload = (e) => {
          this.objBase64 = e.target.result;
        };
      }

      reader.readAsDataURL(this.$refs.fichier.files[0]);
    },
  },
  name: "UploadedFile",
  components: {
    ModelStl,
    ModelObj,
  },
};
</script>