<template>
    <div class="team" :style="style">
        <slot>DEFAULT</slot>
    </div>
</template>

<script>

    export default {
        name: "TeamBoi",
        props: {
            background: String,
            shadow: Boolean
        },
        computed: {
            style() {
                return `background: ${this.background};` + (this.shadow ? ' box-shadow: 1rem 1rem .5rem #202020;' : '');
            }
        }
    }
</script>

<style scoped>
.team{
    flex-grow: 1;
    margin: 0 1.5rem;
    min-height:45rem;
}
</style>