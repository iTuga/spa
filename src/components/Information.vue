<template>
    <div class="right-block">
        <div class="top-block">
            <div class="top-block__item">
                <h1>Information</h1>
                <p>Description</p>
            </div>
            <UserNav/>
        </div>
    </div>
</template>

<script>
    import UserNav from "./UserNav";

    export default {
        name: "Information",
        components: {UserNav}
    }
</script>

<style scoped>

</style>
