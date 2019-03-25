<template>
	<div>
		<router-link
		class="header-abs"
		tag="div"
		to="/"
		v-show="showAbs"
		>
			<div class="iconfont abs-back-icon">&#xe624;</div>
		</router-link>
		<div
		class="header-fixed"
		v-show='!showAbs'
		:style="opacityStyle"
		>
			<router-link to='/'>
				<div class='iconfont fixed-back-icon'>&#xe624;</div>
			</router-link>
			景区详情
		</div>
	</div>
</template>
<script>
export default{
	name:'DetailHeader',
	data () {
		return {
			showAbs:true,
			opacityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		handleScroll () {
			const top = document.documentElement.scrollTop
			if (top > 60){
				let opacity=top/140
				opacity=opacity > 1 ? 1:opacity
				this.opacityStyle={opacity}
				this.showAbs=false
			}else{
				this.showAbs = true
			}
		}
	},
	activated () {
		window.addEventListener('scroll',this.handleScroll)
	},
	deactivated () {
		window.removeEventListener('scroll',this.handleScroll)
	}

}
</script>

<style lang='stylus' scoped>
	@import '~styles/varibles.styl'
	.header-abs
		position:absolute
		left:10px
		top:10px
		width:40px
		line-height:40px
		text-align:center
		height:40px
		border-radius:20px
		background:rgba(0,0,0,.8)
		.abs-back-icon
			color:#fff
			font-size:20px
	.header-fixed
		z-index:2
		position:fixed
		top:0
		right:0
		left:0
		background:$bgColor
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		font-size:20px
		color:#fff
		.fixed-back-icon
			top:0
			left:0
			position:absolute
			width:32px
			font-size:20px
			text-align:center
			color:#fff
</style>