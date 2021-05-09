<template>
    <!-- <div>
        <ul>span
            <li>nom</li>
            <li>type</li>
            <li>delai</li>
            <li>application</li>
            <li>postal</li>
            <li>fichier</li>
            <li>description</li>
            <li>connexion</li>
            <li>resumer</li>
        </ul>
    </div> -->
    <div class="projet">
        <div class="wrapper__projet">
            <div class="projet-progress">
                <div class="projet-progress__bar"></div>
            </div>
            
            <div class="projet-1 contain-projet">
                <h3 class="h3">Step 1</h3>
                <button class="btn btn--plain">Etape suivante</button>
            </div>
            <div class="projet-2 contain-projet">
                <h3 class="h3">Step 2</h3>
                <button class="btn btn--plain">Etape suivante</button>
            </div>
            <div class="projet-3 contain-projet">
                <h3 class="h3">Step 3</h3>
                <button class="btn btn--plain">Etape suivante</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjetFile'
}
</script>