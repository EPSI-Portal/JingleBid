<template>
	<div>
		<HeaderComponent/>

		<h2 class="text-h5 text-white">Bonjour {{ user.displayName }},</h2>
		<h1 class="text-h4 font-weight-light text-white">Bienvenue sur JingleBid  !</h1>

		<v-row>
			<v-col cols="12">
				<h1 class="title text-white">Vos offres suivies</h1>
			</v-col>

			<v-col cols="12" sm="6" md="4" v-for="item in data.slice(0, 1)" :key="item.id">
				<ProductMin :product="item"></ProductMin>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<h1 class="title text-white mt-6">Catégories</h1>
			</v-col>

			<v-col cols="6" sm="4" md="3" lg="2" v-for="item in categories" :key="item.id">
				<v-sheet class="categCard" :style="`background-color: ${item.color};`" align="center" justify="center">

					<v-col>
						<v-icon :style="`color: ${item.textColor};`">{{ item.icon }}</v-icon>
					</v-col>

					<v-col class="text-white pt-0">{{ item.label }}</v-col>

				</v-sheet>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<h1 class="title text-white mt-6">Enchères en cours</h1>
			</v-col>

			<v-col cols="12" sm="4" md="3" v-for="item in data" :key="item.id">
				<Product :product="item" :maxBids="2"></Product>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
	.categCard {
		border-radius: 10px;
		cursor: pointer;
	}

</style>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProductMin from "@/components/ProductMin.vue";
import Product from "@/components/Product.vue";

export default {
	name: "HomePage",
	inject: ['$auth', "$firebase"],

	components: {
		HeaderComponent,
		ProductMin,
		Product
	},

	data() {
		return {
			user: {},

			data: [],

			categories: [
				{
					label: 'Jouets',
					icon: 'fas fa-gift',
					color: '#FA3A3A',
					textColor: '#FFAE9D'
				},
				{
					label: 'Bonbons/Chocolats',
					icon: 'fas fa-candy-cane',
					color: '#FD7676',
					textColor: '#FFAE9D'
				},
				{
					label: 'Vêtements',
					icon: 'fas fa-socks',
					color: '#FA3A3A',
					textColor: '#FFAE9D'
				},
				{
					label: 'Décorations',
					icon: 'fas fa-sleigh',
					color: '#FD7676',
					textColor: '#FFAE9D'
				},
				{
					label: 'Sapins',
					icon: 'fas fa-tree',
					color: '#FA3A3A',
					textColor: '#FFAE9D'
				},
				{
					label: 'Films/Livres',
					icon: 'fas fa-film',
					color: '#FD7676',
					textColor: '#FFAE9D'
				},
			],
		}
	},

	created() {
		this.user = this.$auth.currentUser;

		// TODO: Get products
	}
}
</script>
