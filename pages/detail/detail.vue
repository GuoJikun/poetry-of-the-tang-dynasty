<template>
    <scroll-view class="article">
        <view class="article-title">{{ item.title }}</view>
        <view class="article-author">{{ item.author }}</view>
        <view class="article-content">
            <view v-for="(it, i) in item.paragraphs" :key="i" class="article-content-item">{{ it }}</view>
        </view>
    </scroll-view>
</template>

<script>
    export default {
        data() {
            return {
                item: {}
            };
        },
        onLoad(options) {
            const content = JSON.parse(options.content);
            console.log(content, 'onLoad')
            this.item = {...content}
        }
    }
</script>

<style lang="scss">
page{
    text-align: center;
}
.article{
    font-size: 26rpx;
    &-content{
        padding: 24rpx;
        &-item{
            &+&{
                margin-top: 12rpx;
            }
        }
    }
}
</style>
