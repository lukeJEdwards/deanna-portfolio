<template>
    <div>
        <h1 class="font-bold text-2xl w-full text-center mt-4 mb-16 parkinsans">Publications</h1>
        <div class="grid grid-cols-3 gap-4">
            <RouterLink to="/publications/spider_udide_okwanka">
                <img src="@/assets/publications/SPider the artist/1.webp" class="aspect-square" />
                <p>
                    spider udide okwanka
                </p>
            </RouterLink>
            <RouterLink to="/publications/visual_essay">
                <img src="@/assets/publications/Visual Essay/Untitled_Artwork 56.webp" class="aspect-square" />
                <p>
                    spider udide okwanka
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
definePage({
    name: 'Publications'
})
</script>
