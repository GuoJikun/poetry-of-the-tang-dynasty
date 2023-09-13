<template>
    <view>
        <uni-list>
            <uni-list-item title="" note=""></uni-list-item>
            <uni-list-item title="版本" :note="version"></uni-list-item>
        </uni-list>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                version: null
            };
        },
        onLoad() {
            // #ifdef APP
                console.log(plus.runtime.version)
            // #endif
            
        }
    }
</script>

<style lang="scss">

</style>
