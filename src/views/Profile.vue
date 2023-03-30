<template>
	<div>
		<HeaderComponent/>
		<v-row justify="center">
			<v-col cols="7">
				<v-card class="glasscard py-5 px-6">
					<v-card-text class="text-white">
						<v-row>
							<v-col cols="12" md="auto" class="d-flex align-center justify-center">
								<v-avatar size="85px">
									<v-img
										src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Kurt&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=AngryNatural&mouthType=Sad&skinColor=Pale"
									></v-img>
								</v-avatar>
							</v-col>
							<v-col cols="12" :md="true">
								<v-col>
									<h3 class="text-h4 font-weight-light" v-text="user.displayName"></h3>
									<h3 class="font-weight-light" v-text="user.email"></h3>
								</v-col>
							</v-col>
							<v-col cols="auto" :md="true" class="d-flex align-center justify-end">
								<v-btn @click="$router.push('/account')" variant="text" color="primary">Modifier</v-btn>
							</v-col>

						</v-row>

					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12">
				<v-card class="glasscard mb-3">
					<v-col>
						<h2 align="center" class="text-white d-flex align-start justify-center">Enchères de {{ user.displayName }}</h2>
					</v-col>
				</v-card>

				<v-row>

					<template v-if="products.length > 0">
						<v-col cols="12" sm="6" md="4" xl="3" v-for="item in products" :key="item.id">
							<Products :product="item" :maxBids="2"></Products>
						</v-col>
					</template>
					<template v-else>
						<v-col cols="12" align="center">
							<p class="text-white">Cet utilisateur n'a pas créé d'enchère.</p>
						</v-col>
					</template>

				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import HeaderComponent from "@/components/HeaderComponent.vue";
	import Products from "@/components/Product.vue";

	export default {
		name: "ProfilePage",
		inject: ['$auth'],

		components: {
			HeaderComponent,
			Products
		},

		data() {
			return {
				user: {},

				products: []
			}
		},

		created() {
			this.user = this.$auth.currentUser;

			// TODO: Get products from fa-user-circle
		}
	}

</script>

<style scoped>

</style>
