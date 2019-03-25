<template>
	<div>
		<div class="search">
			<input type='text' v-model='keyword' class='search-input' placeholder="输入城市或拼音">
		</div>
		<div
		class="search-content"
		ref='search'
		v-show="keyword"
		>
				<ul>
					<li 
						v-for='item of list'
						class='search-item border-bottom'
						:key='item.id'
						@click="handleCityClick(item.name)"
					>
						{{item.name}}
					</li>
					<li 
						class='search-item border-bottom'
						v-show='hasNoData'
					>
					没有找到所匹配的城市
					</li>
				</ul>
		</div>
	</div>
</template>
<script>
import BScroll from "better-scroll"
import { mapMutations } from 'vuex'
export default {
	name:'CitySearch',
	props:{
		cities:Object
	},
	methods:{
		handleCityClick (city) {
			changeCity(city)
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	data () {
		return {
			keyword:'',
			list:[],
			hasNoData:false,
			timer:null
		}
	},
	mounted () {
		this.scroll=new BScroll(this.$refs.search)
	},
	watch: {
		keyword () {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if (!this.keyword) {
				this.list = []
				return 
			}
			this.timer = setTimeout( () =>{
				const result = []
				for (let i in this.cities){
					this.cities[i].forEach((value) => {
						if (value.spell.indexOf(this.keyword) > -1 ||
							value.name.indexOf(this.keyword) > -1){
							result.push(value)
						}
					})
				}
				this.list = result
				if (!this.list.length) {
					this.hasNoData=!this.list.length
				} 
			},100)
		}
	}
}
</script>
<style lang='stylus' scoped>
	@import '~styles/varibles.styl'
	.border-bottom
		border-bottom:1px solid #eee
	.search
		height:36px
		background:$bgColor
		padding:0 5px
		.search-input
			width:100%
			height:31px
			box-sizing:border-box
			padding:0 5px
			text-align:center
			line-height:31px
			border-radius:3px
			border:none
			color:#666
	.search-content
		z-index:1
		overflow:hidden
		position:absolute
		top:79px
		left:0
		bottom:0
		right:0
		background:#eee
		.search-item
			line-height:31px
			padding-left:10px
			background:#fff
			color:#666
			
</style>