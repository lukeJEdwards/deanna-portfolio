<script setup lang="ts">
import { useImageBuilder } from '@/composables/useImageBuilder';
import { useStore } from '@/store/store';
import { computed } from 'vue';

const { get_category } = useStore();

const about = computed(() => get_category('/about'))
</script>

<template>
    <div>
        <h1 class="text-xl font-bold text-center py-4 pb-12">About</h1>
        <div class="grid grid-cols-2 px-32">
            <img v-if="about.project_assets" :src="useImageBuilder(about.project_assets[0], 700)" class="h-3/4" />
            <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis aenean cursus bibendum proin auctor
                sagittis accumsan vestibulum tempus. Risus velit est sed massa egestas hac fames euismod. Nunc libero
                suscipit potenti auctor viverra mollis interdum bibendum et. Id quam quam hac dictum, leo aliquam.
                Nullam primis non lacinia aenean facilisi conubia. Nibh quisque penatibus curabitur orci ac eget.
                Praesent eros ipsum rutrum hac torquent sit; consequat lacinia? Feugiat suscipit aptent nibh magna proin
                purus inceptos.

                At class nec cubilia montes cubilia dignissim mattis. Varius mi maximus massa sodales vel. Aliquam
                ridiculus primis primis faucibus erat sodales amet. Nisl felis mauris netus cubilia ridiculus ex non
                arcu. Vivamus tempus commodo torquent congue, habitasse sapien adipiscing. Magnis primis per vestibulum
                tempus dui tortor fames dui. Consequat diam erat, fringilla gravida enim urna lectus malesuada. Nullam
                scelerisque tempor dapibus in orci vel dapibus.

                Dictum pharetra pretium porttitor metus mus efficitur proin habitant. Mollis tincidunt felis luctus,
                tincidunt primis mauris platea. Eleifend fermentum nunc iaculis; varius massa vestibulum consectetur.
                Euismod accumsan lacinia pellentesque integer vel elit. Dui tempor amet mi fusce urna convallis cras.
                Nibh lectus quam ex magnis fames vel natoque aptent. Libero curabitur tempus est nulla neque eget
                pulvinar neque tempus. Enim dolor iaculis malesuada dignissim ligula venenatis vitae elementum.

                Eget metus dolor pharetra sodales libero porttitor. Nisi habitasse maximus imperdiet quisque suscipit
                ultrices. Gravida pulvinar suscipit felis dignissim tempor. Inceptos convallis ridiculus rutrum et
                finibus eget quisque? Commodo congue dictumst tempus iaculis; pellentesque neque. Nam aptent faucibus
                duis curae velit ad augue pretium. Facilisi efficitur torquent eu; integer orci hendrerit. Erat auctor
                mauris est dis tempor consectetur integer.

                Primis primis suspendisse pellentesque tincidunt malesuada semper at nostra. Tristique etiam mattis
                eleifend himenaeos ut duis. Ante ex feugiat sociosqu semper; dolor mauris vel ullamcorper duis. Non
                ipsum ac in; facilisis lorem nisl. Viverra conubia himenaeos morbi inceptos tristique adipiscing
                pellentesque libero. Fermentum nascetur ornare ipsum massa posuere class! Lacus mus volutpat netus vel
                per aptent molestie malesuada. Finibus malesuada convallis laoreet porttitor hac; amet id. Tellus ornare
                sagittis tempus suscipit eu metus mauris.
            </p>
        </div>
    </div>
</template>
