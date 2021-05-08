<template>
    <div class="print-home">

        <div class="wrapp__header">
            <header class="header container">
                <h1 class="h1">Impression 3D en ligne</h1>
                <p class="p">Avec United 3D Makers et son service de fabrication en ligne, vous avez accès à l’une des plus grandes ferme d’impression 3D d’Europe, ainsi vous pouvez imprimer rapidement et à moindre couts vos pièces uniques et vos séries</p>
               
                <router-link to="print-file" class="btn btn--plain">Lancer une impression 3D</router-link>
                <router-link to="uploaded-file" class="btn btn--plain">ancien</router-link>
               
            </header>
        </div>

        <div class="container">
            <h2 class="h2 text--center">
                Fabrication à la demande et sur mesure.<br>
                Obtenez votre devis personnalisé en quelques clics et recevez vos pièces en quelques jours.
            </h2>
        </div>

    </div>
</template>

<script>
export default {
    name: 'PrintHome'
}
</script>