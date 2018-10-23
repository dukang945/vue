<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p>
                                <span>创建时间:{{ item.add_time | dateformat}}</span>
                                <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			
			</ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newslist:{}
            }
        },
        created()   {
            this.getnewslist()
        },
        methods:{
            getnewslist(){
                this.$http.get('http://027xin.com:8899/api/getnewslist').then( res => {
                    if(res.body.status === 0) {
                        this.newslist = res.body.message
                        // console.log(this.newslist);
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>