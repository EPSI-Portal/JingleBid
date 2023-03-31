<template>
	<div>
		<HeaderComponent title="Produits"></HeaderComponent>

		<v-row>
			<v-col cols="12">
				<v-row>
					<v-col v-for="item in data" :key="item.id" cols="12" sm="6" md="4" xl="3">
						<Product :product="item"></Product>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<style>

</style>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Product from "@/components/Product.vue";

export default {
	name: "ProductsPage",
	inject: ["$models", "$_axios"],

	components: {
		HeaderComponent,
		Product
	},

	data() {
		return {
			placeBid: false,
			price: 500,

			activeBid: this.$models.bid,

			data: []
		}
	},

	async created() {
		try {
			const response = await this.$_axios.get(import.meta.env.VITE_API_URL + "/product");
			response.data.forEach((doc) => {
				this.data.push({
					...this.$models.bid,
					...doc
				});
			});
		} catch (error) {
			console.error(error);
		}
	}
}
</script>
