<script>
	export default {
		onLaunch: function() {
            // const isFirst = uni.getStorageSync('isFirst')
            // if(isFirst !== false){
            //     let docPath = uni.getFileSystemManager().getStorageSync('_doc');
                
            //     // 假设你的数据库文件名为 mydatabase.db
            //     let sourcePath = './_doc/data.db'; // 你的数据库文件的当前路径
            //     let targetPath = `${docPath}/data.db`;
                
            //     uni.getFileSystemManager().copyFile({
            //       srcPath: sourcePath,
            //       destPath: targetPath,
            //       success: function (res) {
            //         console.log('数据库文件成功复制到_doc目录');
            //       },
            //       fail: function (error) {
            //         console.error('复制数据库文件失败：', error);
            //       }
            //     });


            // }
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
