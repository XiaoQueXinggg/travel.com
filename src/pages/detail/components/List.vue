<template>
	<div>
		<div class='item' v-for="(item,index) of categoryList">
			<div class="item-title">
				<span class='item-title-icon'>
				</span>
				{{item.title}}				
			</div>
			<div v-if="item.children" class='item-children'>
				<detail-list :list="item.children">
					
				</detail-list>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'DetailList',
	props:{
		categoryList:Array
	}
	
}
</script>

<style lang='stylus' scoped>
	.item-title
		line-height:40px
		padding:0 10px
		.item-title-icon
			position:relative
			top:5px
			left:5px
			display: inline-block
			width: 18px
			height: 18px
			background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)  no-repeat
			margin-right: 5px
			background-size: 20px 15px	
	.item-children
		padding:0 10px
</style>