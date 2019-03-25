<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		你好呀，董小姐！！！！！！</div>
		<router-link to='/city'>
			<div class="header-right">
			{{this.city}}
			<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
	name: "HomeHeader",
	computed:{
		...mapState(['city'])
	}
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
	  display:flex
	  line-height:$headerHeight
	  color:#fff
	  background:$bgColor
	  .header-left
	    width:32px
	    float:left
	    .back-icon
	      font-size:20px
	      text-align:center
	  .header-input
	  	flex:1
	  	padding-left:10px
	  	background:#fff
	  	height:32px
	  	line-height:32px
	  	margin-left:10px
	  	margin-top:6px
	  	border-radius:5px
	  	color:#ccc
	  .header-right
	  	min-width:70px
	  	padding:0 5px
	  	float:right
	  	color:#fff
	  	text-align:center
	  	.arrow-icon
	  		margin-left:-2px;
	  		font-size:12px
</style>