<template>
	<div title='detail'>
		<detail-banner
		:sightName="sightName"
		:bannerImg="bannerImg"
		:gallaryImgs="gallaryImgs"
		>
		</detail-banner>
		<detail-header ></detail-header>
		<div class="content">
			<detail-list
			:list="categoryList"
			></detail-list>
		</div>		
	</div>	
</template>

<script type="text/javascript">
import axios from 'axios'
import DetailBanner from "./components/Banner"
import DetailHeader from "./components/Header"
import DetailList from "./components/List"
export default {
	name:"Detail",
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			categoryList:[]
		}
	},
	methods:{
		getDatailInfo () {
			axios.get('static/mock/detail.json?',{
				params:{
					id:this.$route.params.id
				}
			}).then((this.handleGetData))
		},
		handleGetData (res) {
			res = res.data
			if (res.ret && res.data) {
				const data =res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.categoryList = data.categoryList
			}
		}	
	},
	mounted () {
		this.getDatailInfo()
	}
}
</script>

<style lang='stylus' scoped>
	.content
		height:1000px
</style>