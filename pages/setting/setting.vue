<template>
    <view>
        <text>这里是设置界面</text>
        <uni-list>
            <uni-list-item title="测试" note=""></uni-list-item>
            <uni-list-item title="版本" :right-text="version"></uni-list-item>
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
                this.version = plus.runtime.version
                console.log(this.version)
            // #endif
            
        }
    }
</script>

<style lang="scss">

</style>
