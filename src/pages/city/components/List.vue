<template>
	<div class="list" ref='wrapper'>
		<div>
			<div class="area border-topbottom">
				<div class='title'>当前城市</div>
				<div class="button-list">
					<div class="button-wrapper"					
					>
						<div class="button">{{this.city}}</div>
					</div>
					
				</div>
			</div>
			<div class="area  border-topbottom">
				<div class='title'>热门城市</div>
				<div class="button-list">
					<div class="button-wrapper"
					 v-for="item of hot"
					 :key="item.id"
					 @click="handleCityClick(item.name)"
					 >
					<div class="button">{{item.name}}</div>
					</div>				
				</div>
			</div>
			<div class="area"
			v-for="(item, key) of cities"
			:key="key"
			:ref="key"
			>
				<div class='title'>{{key}}</div>
				<div class="item-list">
					<div class='item  border-bottom'
					v-for='innerItem of item'
					:key='innerItem.id'
					@click="handleCityClick(innerItem.name)"
					>{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState,mapMutations} from 'vuex'
export default {
	name:'CityList',
	props:{
		cities:Object,
		hot:Array,
		letter:String
	},
	methods:{
		handleCityClick (city) {
			this.changeCity(city)
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	computed:{
		...mapState(['city'])
	},
	mounted () {
		this.scroll = new BScroll(this.$refs.wrapper)
	},
	watch:{
		letter () {
			if(this.letter){
				const element=this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	},
}
</script>
<style lang='stylus' scoped>
	.border-topbottom
		&:before
			border-color:#777
		&:after
			border-color:#777
	.border-bottom
		border-bottom:1px solid #ccc
	.list
		overflow:hidden
		position:absolute
		top:79px
		left:0
		right:0
		bottom:0
		.title
			background:#eee
			line-height:25px
			padding-left:10px
			color:#666
			font-size:13px
		.button-list
			overflow:hidden
			padding:5px 30px 5px 5px
			.button-wrapper
				width:33.33%
				float:left
				.button
					margin:5px
					padding:5px 0
					text-align:center
					border:1px solid #ccc
					border-radius:3px
		.item-list
			.item
				line-height:38px
				color:#666
				padding-left:10px;
</style>