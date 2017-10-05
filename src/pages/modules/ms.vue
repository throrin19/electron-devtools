<template>
    <div class="ms">
        <info-block icon="info_outline">
            Permet de convertir n'importe quelle durée en milliseconde et inversement.
        </info-block>
    </div>
</template>

<script>
    import infoBlock from '../../components/infoBlock.vue';
    import codeBlock from '../../components/codeBlock.vue';

    export default {
        name        : 'ms',
        components  : {
            infoBlock,
            codeBlock,
        },
    };
</script>

<style>

</style>
