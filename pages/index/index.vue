<template>
	<view class="container">
		<button>按作者分类</button>
		
	</view>
    <scroll-view>
        <uni-list>
            <uni-list-item v-for="item in dataList" :key="item.title" :title="item.title" clickable link @click="handleClick(item)"></uni-list-item>
        </uni-list>
    </scroll-view>
</template>

<script>
    import dataList from '../../static/data.js'
    import { open, close, select } from '../../common/db.js'
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
                dataList: []
			}
		},
        onLoad() {
            // #ifdef APP
            const name = 'store';
            const path = '_doc/data.db';
            const isOpen = plus.sqlite.isOpenDatabase(name);
            if(!isOpen){
                open(name, path).then(()=>{
                    select(name, "select * from my_table limit 1 OFFSET 10").then(res=>{
                        console.log(res)
                    }).catch(e=>{
                        console.log(e)
                    })
                })
                .catch(e => {
                    console.log('openDatabase failed: '+JSON.stringify(e));
                })
            }else{
                select(name, "select * from my_table limit 1 OFFSET 10").then(res=>{
                    console.log(res)
                }).catch(e=>{
                    console.log(e)
                })
            }
            
            // #endif
        },
		methods: {
            handleClick(item){
                const content = JSON.stringify(item);
                uni.navigateTo({
                    url: `/pages/detail/detail?content=${content}`,
                    animationType: "slide-in-right"
                })
            },
		},
        goSettingPage(){
            uni.navigateTo({
                url: '/pages/setting/setting'
            })
        }
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
