<template>
    <div class="team" :style="style">
        <slot>DEFAULT</slot>
    </div>
</template>

<script>

    export default {
        name: "TeamBoi",
        props: {
            background: String
        },
        computed: {
            style() {
                return `background: ${this.background};`
            }
        }
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