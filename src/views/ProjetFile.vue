<template>
  <div class="projets">
    <span @click="openProjetProgress" class="resume__progress">Etape du projet</span>
    <div class="projets-wrapper">
      <!-- Progress bar -->
      <div class="projet-progress">
        <div class="projet-progress__bar" :style="{ width: barStep + '%' }"></div>
      </div>

      <!-- Projets steps -->
      <div class="wrapper-components-projet">
      
          <transition name="anime">
            <projet-name v-if="steps.stepActive == 1" @next="goNext"></projet-name>
          </transition>

          <transition name="anime">
            <projet-type v-if="steps.stepActive == 2" @next="goNext" @prev="goPrev"></projet-type>
          </transition>

          <transition name="anime">
            <projet-date v-if="steps.stepActive == 3" @next="goNext" @prev="goPrev"></projet-date>
          </transition>
        
      </div>

      <!-- Projet in progress -->

    </div>
      <projet-in-progress v-if="projetProgress" @close="closeInProgress"></projet-in-progress>
  </div>
</template>

<script>
import ProjetName from "@/components/projet/ProjetName.vue";
import ProjetType from "@/components/projet/ProjetType.vue";
import ProjetDate from "@/components/projet/ProjetDate.vue";
import ProjetInProgress from '@/components/projet/ProjetInProgress.vue';

export default {
  data() {
    return {
			steps: {
				maxSteps: 3,
				stepActive: 1,
			},
      userProjet: {
        title: '',
        type: '',
        date: ''
      },
      projetProgress: false
    };
  },
	computed: {
		barStep() {
			return Number( ((100 * this.steps.stepActive) / (100 * this.steps.maxSteps)) * 100 )
		}
	},
  methods: {
    openProjetProgress() {
      this.projetProgress = true
    },
    goPrev() { 
      this.steps.stepActive = this.steps.stepActive - 1;
    },
    goNext(payload) {
      this.steps.stepActive += 1;
  
      this.setProjet(payload)
      this.getProjet()
    },
    setProjet(payload) {
      let key = Object.keys(payload)
      this.userProjet[key] = payload[key]
    },
    getProjet() {
      console.log(this.userProjet)
    },
    closeInProgress() {
      this.projetProgress = false
    }
  },
  name: "ProjetFile",
  components: {
    ProjetName,
    ProjetType,
    ProjetDate,
    ProjetInProgress,
  },
};
</script>