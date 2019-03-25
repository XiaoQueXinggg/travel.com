<template>
	<div class='container' @click="handleClick">
		<div class='wrapper'>
			<swiper :options='swiperOptions'>
		        <swiper-slide v-for="(item,index) in imgs" :key="index">
		            <img class='gallary-img' :src=item>
		        </swiper-slide>
		        <div class="swiper-pagination" slot="pagination">		        	
		        </div>
	        </swiper>
		</div>
	</div>
</template>

<script>
export default {
	name:"CommonGallary",
	data () {
		return {
			swiperOptions:{
				pagination:".swiper-pagination",
				paginationType:'fraction',
				observeParents:true,
				observer:true
			}
		}
	},
	methods:{
		handleClick () {
			this.$emit('close')
		}
	},
	
	props:{
		imgs:{
			type:Array,
			default () {
				return []
			}

		}
	}
}
</script>

<style lang='stylus' scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		display:flex
		z-index:99
		flex-direction:column
		justify-content:center
		position:fixed
		top:0
		bottom:0
		right:0
		left:0
		background:#000
		.wrapper
			height:0
			width:100%
			padding-bottom:100%
			.gallary-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-50px
</style>