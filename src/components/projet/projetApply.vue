<template>
  <div class="projet-wrapper">
    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>

      <h3 class="projet-heading">Application</h3>

      <div class="projet-content">
        <!-- Items -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="projet-content__card appearIn"
          :class="[
            { 'projet-content__card--active': fields.indexOf(item.id) !== -1 },
            'appearIn__item--' + (index + 1),
          ]"
          @click="selectItems(item.id)"
        >
          <div>
            <img :src="require('@/assets/images/img_empty.svg')" alt="" />
            <p>{{ item.name }}</p>
          </div>
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
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      fields: [],
    };
  },
  methods: {
    prev() {
      this.$emit("prev");
    },
    next() {
      this.$emit("next", { fields: this.fields });
    },
    selectItems(id) {
      if (this.fields.indexOf(id) !== -1) {

        this.fields = this.fields.filter(elt => {
          return elt !== id
        })
 
      } else {
    
        this.fields.push(id)
      }
    },
  },
  name: "ProjetApply",
};
</script>