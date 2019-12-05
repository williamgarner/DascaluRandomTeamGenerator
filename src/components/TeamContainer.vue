<template>
    <div class = "container">
        <TeamBoi>
            <StudentStuff></StudentStuff>
        </TeamBoi>
        <TeamBoi>
            <TeamStuff></TeamStuff>
        </TeamBoi>
    </div>
</template>

<script>
    import TeamBoi from "./TeamBoi";
    import StudentStuff from "./StudentStuff";
    import TeamStuff from "./TeamStuff";

    export default {
        name: "TeamContainer",
        components: {
            TeamStuff,
            StudentStuff,
            TeamBoi
        }
    }
</script>

<style scoped>
.container{
    min-height: 45rem;
    max-width: none;
    display: flex;
    flex-direction: row;
    /*margin: 0 5rem;*/
    justify-content: space-between;
    padding-right: 4rem;
}
</style>