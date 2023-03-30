<template>
	<div>
		<HeaderComponent title="Enchères en cours"></HeaderComponent>

		<v-row>
			<v-col cols="12">
				<v-row>
					<v-col v-for="item in data" :key="item.id" cols="12" sm="6" md="4" xl="3">
						<Product :product="item"></Product>
					</v-col>
				</v-row>
			</v-col>
			<!--<v-col cols="12" md="3" order="first" order-md="last">
				<v-row>
					<v-col cols="12">
						<v-card>
							<v-card-text>
								<h1 class="font-weight-regular text-black">Filtres</h1>
							</v-card-text>
						</v-card>
					</v-col>

					<v-col cols="12">
						<v-card class="glasscard">
							<v-card-text>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-col>-->
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
	inject: ["$models"],

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

	created() {
		//TODO: Get products
		/*this.$db.collection("products").onSnapshot((res) => {
			res.forEach((doc) => {
				this.data.push({
					...this.$models.bid,
					...doc.data(),
					id: doc.id
				});
			});
		});*/
	}
}
</script>
