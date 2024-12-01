<script setup lang="ts">
definePage({
    name: 'Portfolio'
})
</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 mb-16 parkinsans">portfolio</h1>
        <div class="grid grid-cols-3 gap-4">
            <RouterLink to="/portfolio/aqua_libra">
                <img src="@/assets/portfolio/Aqua Libra/vguggvi.webp" class="aspect-square" />
                <p>
                    Aqua Libra
                </p>
            </RouterLink>
            <RouterLink to="/portfolio/hurricane_BHS">
                <img src="@/assets/portfolio/Hurricane BTS/Untitled_Artwork 145.webp" class="aspect-square" />
                <p>
                    Hurricane BTS
                </p>
            </RouterLink>
            <RouterLink to="/portfolio/Hurricane_Video">
                <img src="@/assets/portfolio/Hurricane BTS/Untitled_Artwork 145.webp" class="aspect-square" />
                <p>
                    Hurricane video
                </p>
            </RouterLink>
            <RouterLink to="/portfolio/personal">
                <img src="@/assets/portfolio/Personal/OZ inspired Magazine.webp" class="aspect-square" />
                <p>
                    Personal
                </p>
            </RouterLink>
            <RouterLink to="/portfolio/valentine">
                <img src="@/assets/portfolio/Valentine/Entrance (first).webp" class="aspect-square" />
                <p>
                    Personal
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>