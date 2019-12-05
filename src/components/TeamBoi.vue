<template>
    <div class="team">
        <slot>DEFAULT</slot>
    </div>
</template>

<script>

    export default {
        name: "TeamBoi",
    }
</script>

<style scoped>
.team{
    box-shadow: 1rem 1rem .5rem #202020;
    background: #353535;
    flex-grow: 1;
    margin: 0 1rem;
    min-height:45rem;
}
</style>