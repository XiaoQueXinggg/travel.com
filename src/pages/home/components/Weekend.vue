<template>
	<div>
		<div class='title'>热销推荐</div>
		<ul>
			<li class='item border-bottom' v-for='item of list' :key='item.id'>				
				<div class="item-img-wrapper">
					<img class='item-img' :src="item.imgUrl">
				</div>				
				<div class='item-info'>
					<p class='item-title'>{{item.title}}</p>
					<p class='item-desc'>{{item.desc}}}</p>
					
				</div>
			</li>
		</ul>
	</div>
</template>
	
<script>
export default {
	name:'HomeWeekend',
	props:{
		list:Array
	}
}	
</script>

<style lang='stylus' scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top:10px
		line-height:40px 
		background:#eee
		text-indent:10px
	.item-img-wrapper
		overflow:hidden
		padding-bottom:37.68%
		height:0px
	.item-img
		width:100%
	.item-title
		line-height:27px
		font-size:16px
	.item-desc
		line-height:20px
		color:#ccc
		ellipsis()
</style>