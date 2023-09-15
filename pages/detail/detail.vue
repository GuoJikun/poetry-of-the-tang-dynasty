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
            this.item = {...content}
        }
    }
</script>

<style lang="scss">
page{
    text-align: center;
}
.article{
    font-size: 28rpx;
    &-author {
        color: #666;
        margin-top: 20rpx;
    }
    &-content{
        padding: 24rpx;
        font-size: 32rpx;
        &-item{
            &+&{
                margin-top: 12rpx;
            }
        }
    }
}
</style>
