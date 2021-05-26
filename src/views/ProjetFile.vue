<template>
  <div class="projets">
    <!-- action open progress projet resume -->
    <span @click="projetProgress = true" class="resume__progress">Etape du projet</span>
    <div class="projets-wrapper">
      <!-- Progress bar -->
      <div class="projet-progress">
        <div class="projet-progress__bar" :style="{ width: barStep + '%' }"></div>
      </div>
   
      <!-- Projets steps -->
      <section class="wrapper-components-projet">
      
          <!-- <transition name="anime"> -->
            <projet-name v-show="steps.stepNameActive == 'name'" @next="goNext"></projet-name>
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <projet-type v-show="steps.stepNameActive == 'projectType'" @next="goNext" @prev="goPrev" :items="REF_project"></projet-type>
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <projet-date v-show="steps.stepNameActive == 'deliveryTime'" @next="goNext" @prev="goPrev"></projet-date>
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <projet-apply v-show="steps.stepNameActive == 'fields'" @next="goNext" @prev="goPrev" :items="REF_fields"></projet-apply>
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <projet-description v-show="steps.stepNameActive == 'description'" @next="goNext" @prev="goPrev"></projet-description>
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <!-- <projet-postal @next="goNext" @prev="goPrev"></projet-postal> -->
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <projet-address v-show="steps.stepNameActive == 'address'" @next="goNext" @prev="goPrev"></projet-address>
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <projet-dimension v-show="steps.stepNameActive == 'dim'" @next="goNext" @prev="goPrev"></projet-dimension>
          <!-- </transition> -->

          <!-- <transition name="anime"> -->
            <projet-upload v-show="steps.stepNameActive == 'file'" @next="goNext" @prev="goPrev"></projet-upload>
          <!-- </transition> -->
        
      </section>


    </div>

      <!-- Projet in progress -->
      <projet-in-progress v-if="projetProgress" :items="project" @close="projetProgress = false"></projet-in-progress>

  </div>
</template>

<script>
import ProjetName from "@/components/projet/ProjetName.vue";
import ProjetType from "@/components/projet/ProjetType.vue";
import ProjetDate from "@/components/projet/ProjetDate.vue";
import ProjetInProgress from '@/components/projet/ProjetInProgress.vue';
import ProjetApply from '@/components/projet/projetApply.vue';
// import ProjetPostal from '../components/projet/ProjetPostal.vue';
import ProjetUpload from '../components/projet/ProjetUpload.vue';
import ProjetDescription from '../components/projet/ProjetDescription.vue';
import ProjetDimension from '../components/projet/ProjetDimension.vue';
import ProjetAddress from '../components/projet/ProjetAddress.vue';

import refFields from '../components/projet/static_ref/ref_field.json';
import refProject from '../components/projet/static_ref/ref_project.json';




export default {
  data() {
    return {
      // progress bar
			steps: {
        stepActive: 0,
        stepNameActive: 'name',
        stepName: ['name', 'projectType', 'deliveryTime', 'fields', 'description', 'file'],
			},
      // static data
      REF_fields: refFields[2].data,
      REF_project: refProject[2].data,
      // project user
      project: {
        name: '',
        projectType: '',
        deliveryTime: '',
        description:'',
        fields: [],
        dim: {
          x: '',
          y: '',
          z: ''
        },
        address: {
          street1: '',
          street2: '',
          zipcode: '',
          firstname: '',
          lastname: '',
          city: '',
          country: 'FR',
          telephone: ''
        },
        file: [],
        scanOnSite: false
      },
      projetProgress: false
    };
  },
	computed: {
		barStep() {
			return Number( ((100 * this.steps.stepActive) / (100 * (this.steps.stepName.length))) * 100 )
		}, 
	},
  methods: {
    goPrev() { 
      // control stepbar
      this.steps.stepActive = this.steps.stepActive - 1;
      this.steps.stepNameActive = this.steps.stepName[this.steps.stepActive]
    },
    goNext(payload) {
      // control stepbar
      this.steps.stepActive += 1;
      this.steps.stepNameActive = this.steps.stepName[this.steps.stepActive]

      this.setProjet(this.project,payload)
      // this.getProjet()
    },
    setProjet(obj,payload) {
      let key = Object.keys(payload)

      // control stepbar
      if (Object.keys(payload).indexOf('scanOnSite') > -1 && payload.scanOnSite == true) {

        this.steps.stepName = ['name', 'projectType', 'deliveryTime', 'fields', 'dim', 'address', 'description', 'file']
        
      } else if (Object.keys(payload).indexOf('scanOnSite') > -1 && payload.scanOnSite == false) {

        this.steps.stepName = ['name', 'projectType', 'deliveryTime', 'fields', 'description', 'file']
        
      }

      obj[key] = payload[key]
      console.log(payload)
    },
    getProjet() {
      console.log(this.userProjet)
    },
  },
  name: "ProjetFile",
  components: {
    ProjetName,
    ProjetType,
    ProjetDate,
    ProjetInProgress,
    ProjetApply,
    // ProjetPostal,
    ProjetUpload,
    ProjetDescription,
    ProjetDimension,
    ProjetAddress
  },
};
</script>,