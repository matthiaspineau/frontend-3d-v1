<template>
  <div class="container">
    <h3 class="text-center">Déposer un fichier</h3>

    <!------------------------------>
    <!-- 1ere etape : upload file -->
    <!------------------------------>
    <div class="row">
      <div class="col-md-12 col-lg-8">
        <div class="wrapper__left p-3 wrapp--b">
          <div class="row">
            <div class="col-md-6">
              <div class="viewer">
                <!-- Model loader -->
                <div class="viewer__media">
                  
                  <!-- Empty -->
                  <img v-if="empty" :src="require('@/assets/images/illustration-empty.svg')" alt="icon empty">

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
                    :glOptions="{ preserveDrawingBuffer: true }"
                    :src="objBase64"
                  ></model-obj>
                </div>
                <!-- Form upload -->
                <div class="upload__form mt-2">
                  <form
                    action=""
                    enctype="multipart/form-data"
                    class="form-group"
                  >
                    <input
                      type="file"
                      id="file"
                      name="file"
                      ref="fichier"
                      @change="previewFile"
                      class="form-control-file"
                    />
                  </form>
                </div>
              </div>
            </div>
             
     
            <div class="col-md-12 col-lg-2">  
              <div class="3d-sidebar mt-3">
                <div class="">
                  <span>nom du fichier : {{}}</span>
                </div>
                <div>
                  <label for="">Couleurs</label>
                  <select v-model="selectedColor" id="">
                    <option :value="'0xffffff'">blanc</option>
                    <option :value="'0x0026ff'">blue</option>
                    <option :value="'0x00ffd9'">green</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-12">
        <div class="wrapp__right p-3 wrapp--b">
            <!---------------------------->
            <!-- 2eme etape : sreenshot -->
            <!---------------------------->
          <div class="wrapper__screenshot">
            <div class="screenshot">
              <div class="screenshot__action">
                <button id="btn" class="btn btn-primary" @click="screenshot">screenshot</button>
              </div>
              <div class="screenshot__media">
                <div class="" style="width: 300px; height: 300px">
                  <div class="wrap__img">
                    <img
                      class="screenshot"
                      v-if="screenshotFile"
                      :src="screenshotFile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="mt-2" />

          <!-- Telecharger -->
          <!-- <div class="wrapper__download">
            <span>etape : 3 (download screenshot) </span>
            <div class="wrap__300 mt-2">
              <div class="form-group mt-2">
                <label for="">nom : </label>
                <input type="text" v-model="fileName" class="form-control" />
              </div>

              <div class="mt-2">

                <button class="btn btn-primary" @click="saveScreenshot">download screenshot</button>
                <a id="download" href=""></a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12">
        <div class="p-2 wrapp--b">
          <button class="btn btn-primary" @click="SaveShop">Ajouter au panier</button>
        </div>
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
        z: 0
      },
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

      str = str.substring(str.length - 3);

      if (str != "stl" && str != "obj") {
        console.log("erreur de fichier");
        return;
      }
      this.empty = false;

      this.loadModel(str)
      
    },
    screenshot() {
      if (this.modelStl) {
        this.screenshotFile = this.$refs.modelstl.renderer.domElement.toDataURL("image/png",1);
      }

      if (this.modelObj) {
        this.screenshotFile = this.$refs.modelobj.renderer.domElement.toDataURL("image/png",1);
      }
    },
   
    SaveShop() {
      if (this.screenshotFile == null) {
        return
      }
      console.log('salut')
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
          console.log(this.$refs.modelstl.renderer.domElement.dataset.sizing)
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
    // Non utiliser: disabled
    downloadImg() {
       let link = document.getElementById("download");

      if (this.modelStl) {
        link.href = this.$refs.modelstl.renderer.domElement.toDataURL();
      }
      if (this.modelObj) {
        link.href = this.$refs.modelobj.renderer.domElement.toDataURL();
      }

      link.download = this.fileName;
    },
    saveScreenshot() {
      document.getElementById("download").click();
    },
  },
  name: "UploadedFile",
  components: {
    ModelStl,
    ModelObj,
  },
};
</script>