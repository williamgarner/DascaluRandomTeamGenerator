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
                return `background: ${this.background};` + (this.shadow ? ' box-shadow: .5rem .5rem .75rem #000000;' : 'margin: 1.5rem 0');
            }
        }
    }
</script>

<style scoped>
.team{
    flex-grow: 1;
    margin: 0;
    padding: 2rem;
}
</style>