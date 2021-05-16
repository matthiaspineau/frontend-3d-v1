<template>
    <div class="container">
        <div class="wrapper__shop">
            <h4 class="text-center">Votre panier</h4>
                
            <div class="shop-wrapper">

                <!-- shop wrapp progress -->
                <div class="shop-wrapper-progress">
                    <!-- shop-progress -->
                    <div class="shop-progress">
                        <span>panier</span>
                        <span>livraison</span>
                        <span>paiment</span>
                    </div>
                </div>
        
                <!-- shop wrapp card -->
                <div class="shop-wrapper-card">
                    <!-- shop-card : item -->
                    <div class="shop-card">
                        <div class="shop-card-action">
                            <div class="shop-card-action__edit">
                                <img :src="require('@/assets/images/icon-edit.svg')" alt="">
                            </div>
                            <div class="shop-card-action__delete">
                                <img :src="require('@/assets/images/icon-delete.svg')" alt="">
                            </div>
                        </div>
                        <div class="shop-card-media">
                            <img :src="require('@/assets/images/article-u3dm.png')" alt="image">
                        </div>
                        <div class="shop-card-text">
                            <h4>u3dm-logo.stl</h4>
                            <h4>FDM | Nylon</h4>
                            <span>Bleu odysée | Finition 2</span>
                        </div>
                        <div class="shop-card-quantity">
                            <input type="number" class="shop-card-quantity__input" placeholder="12">
                        </div>
                        <div class="shop-card-price">
                            <h3>250 € HT</h3>
                        </div>
                    </div>

                    <div class="shop-card">
                        <div class="shop-card-action">
                            <div class="shop-card-action__edit">
                                <img :src="require('@/assets/images/icon-edit.svg')" alt="">
                            </div>
                            <div class="shop-card-action__delete">
                                <img :src="require('@/assets/images/icon-delete.svg')" alt="">
                            </div>
                        </div>
                        <div class="shop-card-media">
                            <img :src="require('@/assets/images/article-u3dm.png')" alt="image">
                        </div>
                        <div class="shop-card-text">
                            <h4>u3dm-2-logo.stl</h4>
                            <h4>FDT | Nylon</h4>
                            <span>Vert odysée | Finition 5</span>
                        </div>
                        <div class="shop-card-quantity">
                            <input type="number" class="shop-card-quantity__input" placeholder="500">
                        </div>
                        <div class="shop-card-price">
                            <h3>2500 € HT</h3>
                        </div>
                    </div>
                </div>
                
                <!-- shop wrapp tiket -->
                <div class="shop-wrapper-tiket">
                    <!-- shop-tiket -->
                    <div class="shop-tiket">
                        <ul class="shop-tiket-list">
                            <li class="shop-tiket-item">
                                <span class="shop-tiket-item__text--light">Impression</span>
                                <span class="shop-tiket-item__text--bold">2600 €</span>
                            </li>
                            <li class="shop-tiket-item">
                                <span class="shop-tiket-item__text--light">Frais de service</span>
                                <span class="shop-tiket-item__text--bold">20 €</span>
                            </li>
                            <li class="shop-tiket-item">
                                <span class="shop-tiket-item__text--light">TVA</span>
                                <span class="shop-tiket-item__text--bold">127 €</span>
                            </li>
                            <li class="shop-tiket-item">
                                <span class="shop-tiket-item__text--light">Livraison</span>
                                <span class="shop-tiket-item__text--bold">calculé a l'étape suivante</span>
                            </li>
                            <li class="shop-tiket-item shop-tiket-item--last">
                                <span class="shop-tiket-item__text--bold">Total</span>
                                <span class="shop-tiket-item__text--bold">2500 €</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button class="btn btn--plain btn--fluid">Valider votre panier</button>
                    </div>
                    <div class="shop-tiket-action">
                        <ul class="shop-tiket-action-list">
                            <li class="shop-tiket-action-item">
                                <img :src="require('@/assets/images/icon-add.svg')" alt="icon">
                                <span class="shop-tiket-action-item__span">Ajouter un nouveau fichier</span>
                            </li>
                            <li class="shop-tiket-action-item">
                                <img :src="require('@/assets/images/icon-up.svg')" alt="icon">
                                <span class="shop-tiket-action-item__span">Télécharger mon devis</span>
                            </li>
                            <li class="shop-tiket-action-item">
                                <img :src="require('@/assets/images/icon-partage.svg')" alt="icon">
                                <span class="shop-tiket-action-item__span">Partager ce devis</span>
                            </li>  
                        </ul>
                    </div>
                </div>

            </div>
           
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
// const articles = [
//     {
//         id: 1,
//         name: 'u3dm-logo.stl',
//         detail: 'FDM | Nylon',
//         finition: 'Bleu odysée | Finition 2',
//         img: 'article-u3dm',
//         quantity: 12,
//         price: 250
//     },
//      {
//         id: 2,
//         name: 'u3dm-logo.stl',
//         detail: 'FDM | ASA',
//         finition: 'Orange | Finition 3',
//         img: 'article-u3dm',
//         quantity: 500,
//         price: 2500
//     }
// ]

export default {
    computed: {
        ...mapState([
                'nbArticles', 'articles'
            ]),
    },
    name: 'Shop'
}
</script>