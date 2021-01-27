<template>
    <div class="right-block">
        <div class="top-block">
            <div class="top-block__item">
                <h1>Updates</h1>
                <p>Marketplace updates and Personal Notifications</p>
            </div>
            <UserNav/>
        </div>
    </div>
</template>

<script>
    import UserNav from "./UserNav";
    export default {
        name: "Updates",
        components: {UserNav},
        data() {
            return {
                courses: []
            }
        },
    }
</script>

<style>

</style>
