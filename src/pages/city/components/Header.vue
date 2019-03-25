<template>
	<div class="header">
		<router-link to='/'>
			<div class='iconfont back-icon'>&#xe624;</div>
		</router-link>
		城市选择
	</div>
</template>
<script>
export default {
	name:'CityHeader'
}
</script>
<style lang='stylus' scoped>
	@import '~styles/varibles.styl'
	.header
		position:relative
		background:$bgColor
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		font-size:20px
		color:#fff
		.back-icon
			top:0
			left:0
			position:absolute
			width:32px
			font-size:20px
			text-align:center
			color:#fff
</style>