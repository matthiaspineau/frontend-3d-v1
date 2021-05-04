<template>
    <div class="container">
        <div class="wrapper__shop">
            <h4 class="text-center">Votre panier</h4>
                
            <h4>Nombres d'article(s): {{ nbArticles }}</h4>
            
            <div class="wrapper__article">
                <!-- Article Empty -->
                <div v-if="nbArticles < 1">
                    <h4>Aucun d'article</h4>
                </div>
                <!-- Articles -->
                <div v-else>
                    <div v-for="(article, index) in articles" 
                    :key="index" 
                    class="article">
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
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
                'nbArticles', 'articles'
            ]),
    },
    name: 'Shop'
}
</script>