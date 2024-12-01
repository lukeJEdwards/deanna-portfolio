<script setup lang="ts">
definePage({
    name: 'Film FMP'
})
</script>

<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 mb-16 parkinsans">Film FMPs</h1>
        <div class="flex gap-4">
            <RouterLink to="/Film_FPM/As_still_as_a_tree" class="w-1/3">
                <img src="@/assets/Film_FPM/As Still As A Tree/scan_97277222_2024-04-18-20-39-00_2.webp"
                    class="aspect-square" />
                <p>
                    As still as a tree
                </p>
            </RouterLink>
            <RouterLink to="/Film_FPM/the_matriarchy" class="w-1/3">
                <img src="@/assets/Film_FPM/The Matriarchy/1.webp" class="aspect-square" />
                <p>
                    The Matriarchy
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>