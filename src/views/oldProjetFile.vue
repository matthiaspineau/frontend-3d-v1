<template>
  <div class="projets">
    <div class="projets-wrapper">
      <!-- Progress bar -->
      <div class="projet-progress">
        <div class="projet-progress__bar" :style="{ width: barStep + '%' }"></div>
      </div>

      <!-- Projets steps -->
      <div class="">
        <transition name="anime">
          <projet-name v-if="steps.stepActive == 1" @next="goNext"></projet-name>
        </transition>

        <transition name="anime">
          <projet-type v-if="steps.stepActive == 2" @next="goNext"></projet-type>
        </transition>

        <transition name="anime">
          <projet-date v-if="steps.stepActive == 3" @next="goNext"></projet-date>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ProjetName from "@/components/projet/ProjetName.vue";
import ProjetType from "@/components/projet/ProjetType.vue";
import ProjetDate from "@/components/projet/ProjetDate.vue";

export default {
  data() {
    return {
			steps: {
				maxSteps: 3,
				stepActive: 1,
			}
    };
  },
	computed: {
		barStep() {

			return Number( ((100 * this.steps.stepActive) / (100 * this.steps.maxSteps)) * 100 )
		}
	},
  methods: {
    goPrev() {
      this.steps.stepActive += this.steps.stepActive - 1;
    },
    goNext() {
			console.log(((100 * this.steps.stepActive) / (100 * this.steps.maxSteps)) * 100)
      this.steps.stepActive += 1;
		
    },
  },
  name: "ProjetFile",
  components: {
    ProjetName,
    ProjetType,
    ProjetDate,
  },
};
</script>