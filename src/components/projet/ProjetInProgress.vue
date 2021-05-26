<template>
  <div class="projet-in-progress">
    <div class="divider appearOpacity" @click="close"></div>

    <div class="contain-projet-in-progress appearContentFromRight">
      <span class="the__close" @click="close">Fermer</span>

      <div class="the__text appearTextFromBottom">
        <p><span>name :</span>{{ items.name }}</p>
        <p><span>type :</span>{{ items.projectType }}</p>
        <p><span>date :</span>{{ items.deliveryTime }}</p>
        <p><span>description :</span>{{ items.description }}</p>
        <p>
            <ul>aplication :
                <li>{{ items.dim.x }}</li>
                <li>{{ items.dim.y }}</li>
                <li>{{ items.dim.z }}</li>
            </ul>
        </p>
        <p>
            <ul>adresse :
                <li v-for="(value, key, index) in items.address" :key="index"><span>{{ key }} : </span>{{ value }}</li>
            </ul>
        </p>
        <p><span>file :</span>{{ items.file }}</p>
        <p><span>scan :</span>{{ items.scanOnSite }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default() {
        return {
          project: {
            name: "",
            projectType: "",
            deliveryTime: "",
            description: "",
            fields: [],
            dim: {
              x: "",
              y: "",
              z: "",
            },
            address: {
              street1: "",
              street2: "",
              zipcode: "",
              firstname: "",
              lastname: "",
              city: "",
              country: "FR",
              telephone: "",
            },
            file: [],
            scanOnSite: false,
          },
        };
      },
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  name: "ProjetInProgress",
};
</script>