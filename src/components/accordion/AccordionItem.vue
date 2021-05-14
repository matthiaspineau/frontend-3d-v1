<template>
    <div class="accordion-item" @click="open(id)" :class="cls">
        <div class="accordion-item-heading">
            <img class="accordion-item-heading__icon" :src="require('@/assets/images/icon-defaut.svg')" alt="icon empty" />
            <h4 class="accordion-item-heading__title h4">{{ title }}</h4>
            <img class="accordion-item-heading__arrow" :src="require('@/assets/images/arrow-circle.svg')" alt="arrow circle" />
        </div>
        <div class="accordion-item-content">
            <p class="p">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: 'item1'
        },
        title: {
            type: String,
            default: 'le titre'
        },
        text: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam ab dicta sapiente corrupti tenetur harum eius, nostrum officiis sed officia vero, placeat porro mollitia praesentium, obcaecati modi facilis deleniti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique netus sagittis, feugiat tempor sed ut feugiat. Sed suscipit arcu mauris integer magna phasellus.'
        },
        cls: {
            type: String,
            default: ''
        }
    },
    methods: {
        open(id) {
            this.$emit('opena', { reference: id })
        }
    },
    name: 'AccordionItem'
}
</script>

<style lang="scss" scoped>
.accordion-item{
    padding: 0 15px;

    &-heading {
        display: grid;
        // grid-template-columns: 60px 1fr 60px;
        grid-template-columns: 60px 1fr 60px;
        cursor: pointer;

        &__icon {
            grid-column: 1;
            grid-row: 1;
            align-self: center;
        }

        &__title {
            grid-column: 2;
            grid-row: 1;
            text-align: left;
            color: #3C64B1;
        }

        &__arrow {
            grid-column: 3;
            grid-row: 1;
            justify-self: flex-end;
            align-self: center;
        }

        
    }

    &-content {
        overflow-y: hidden;
        max-height: 0px;
        // transition: 0.5s;
    }

    // -------------
    &--active {
        .accordion-item-content {
            max-height: 500px;
            height: auto;
            transition: 1.5s;
        }
    }

    

}
</style>