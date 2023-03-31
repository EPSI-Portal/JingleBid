<template>
	<div>
		<HeaderComponent :title="product.name"></HeaderComponent>
		<v-row>
			<v-col cols="8">
				<v-card>
					<v-img :src="product.image" cover height="45vh"></v-img>
				</v-card>

				<v-card class="my-3">
					<v-card-text>
						<h3 class="text-h4 mb-2">Description</h3>
						<p>
							{{ product.shortDesc }}
						</p>
						<p>
							{{ product.longDesc }}
						</p>
					</v-card-text>

					<v-card-actions>
						<v-row>
							<v-col>
								<v-btn color="primary" block @click="editProduct = true">
									Modifier
								</v-btn>
							</v-col>
							<v-col>
								<v-btn color="error" block @click="deleteProduct()">
									Supprimer
								</v-btn>
							</v-col>
						</v-row>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col cols="4">
				<v-card class="pb-3">
					<v-card-title class="text-h5 font-weight-regular mb-4 mt-1">
						Informations en direct
					</v-card-title>
					<v-card-text>

						<v-row>
							<v-col class="py-0">
								<span>Prix actuel</span>
							</v-col>
							<v-col cols="auto" class="py-0">
								<span class="text-overline">{{ Number(product.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</span>
							</v-col>
						</v-row>

						<v-row>
							<v-col class="py-0">
								<span>Prix de départ</span>
							</v-col>
							<v-col cols="auto" class="py-0">
								<span class="text-overline">{{ Number(product.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</span>
							</v-col>
						</v-row>

						<v-row>
							<v-col class="py-0">
								<span>Temps restant</span>
							</v-col>
							<v-col cols="auto" class="py-0">
								<span class="text-overline">{{ $_moment().to(product.timeOptions.bidStopTime, true) }}</span>
							</v-col>
						</v-row>

					</v-card-text>

					<v-card-title class="pb-0">
						Dernières offres
					</v-card-title>
					<v-list style="background-color: rgba( 255, 255, 255, 0 )" class="pt-0">
						<v-list-item-group disabled>
							<v-list-item v-for="(item, i) in 3" :key="i">
								<v-list-item-content>
									<v-list-item-title>
										<v-icon color="secondary" class="mr-2" size="small">far fa-money-bill-alt</v-icon>
										<span class="mt-2">{{ randomUsers[Math.floor(Math.random() * randomUsers.length)] }}</span>
									</v-list-item-title>
									<v-list-item-subtitle>{{ Math.round(Number(product.price) + (Math.random() * 5)).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>

					<v-divder></v-divder>

					<v-card-title>
						Vous voulez enchérir ?
					</v-card-title>
					<v-row>
						<v-col cols="12" sm="6">
							<v-text-field variant="underlined" :label="`Proposez un prix (> ${product.price}€)`" :min="Number(product.price)" suffix="€" type="number" auto-grow rows="1" class="mx-3 py-0"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" class="pt-1">
							<v-checkbox v-model="anonymCheckbox" label="Je préfère être anonyme" class="ml-4 py-0"></v-checkbox>
						</v-col>

						<v-col cols="12" class="px-12 pt-0">
							<v-btn color="primary" variant="outlined" block>
								Passer au paiement
							</v-btn>
						</v-col>
					</v-row>

				</v-card>

				<v-card class="mt-6">
					<v-card-title class="text-h6 font-weight-regular mt-1">
						Achetez en tout sécurité
					</v-card-title>

					<v-card-text>
						<p>✅ Votre paiement sera conservé jusqu'à ce que le vendeur ait envoyé votre article ou qu'il l'ait préparé pour son retrait sur place. </p>
						<p>✅ Toutes nos ventes sont soumises à un contrôle par notaire.</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog
		v-model="editProduct"
		width="600"
		>
			<v-card class="pb-2">
				<v-img
					class="align-end"
					:src="product.image"
					style="background-color: black;"
					gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
					height="200px"
					cover
				>
					<v-card-title class="text-white text-h4 mb-3">{{ product.name }}</v-card-title>
				</v-img>

				<v-card-text v-bind:class="{'text-black': !product.image}" class="mb-2">
					<v-row>
						<v-col>
							<v-text-field v-model="product.name" variant="underlined" label="Nom du produit"></v-text-field>
						</v-col>
						<v-col cols="3">
							<v-text-field v-model="product.price" variant="underlined" label="Prix" type="number" suffix="€"></v-text-field>
						</v-col>
					</v-row>


					<v-divider class="mb-4"></v-divider>

					<v-text-field v-model="product.shortDesc" variant="underlined" label="Description courte"></v-text-field>
					<v-textarea v-model="product.longDesc" variant="underlined" label="Description longue"></v-textarea>

					<v-divider class="mb-4"></v-divider>

					<v-text-field v-model="product.image" variant="underlined" label="Lien de l'image"></v-text-field>
				</v-card-text>

				<v-card-actions>

					<v-row>
						<v-spacer></v-spacer>
						<v-col cols="auto">
							<v-btn variant="text" color="primary" @click="modifyProduct()">
								Modifier
							</v-btn>
						</v-col>
						<v-col cols="auto">
							<v-btn variant="text" color="error" @click="deleteProduct()">
								Supprimer
							</v-btn>
						</v-col>
						<v-col cols="auto">
							<v-btn variant="text" color="secondary" @click="editProduct = false">
								Annuler
							</v-btn>
						</v-col>
					</v-row>

				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
	name: "ProductPage",
	inject: ["$models", "$_moment", "$_axios"],

	props: {
		id: {
			type: String
		}
	},

	components: {
		HeaderComponent
	},

	data() {
		return {
			product: this.$models.bid,
			images: [],
			randomUsers: ['Sarahlpb', 'psyroman212', 'stan1712', 'Kikyris', 'Sacrigmatik', 'Pierre D.', 'Over_404', '775pl', 'Bggs', 'indes33', 'Irem', 'Laure', 'Jennie K.'],
			anonymCheckbox: false,

			editProduct: true,
		}
	},

	methods: {
		async deleteProduct() {
			try {
				await this.$_axios.delete(import.meta.env.VITE_API_URL + "/product/" + this.id).then(() => {
					this.$router.push('/');
				});
			} catch (error) {
				console.error(error);
			}
		},
		async modifyProduct() {
			try {
				await this.$_axios.post(import.meta.env.VITE_API_URL + "/product", {
					"name": this.product.name,
					"condition": this.product.condition,
					"image": this.product.image,
					"longDesc": this.product.longDesc,
					"shortDesc": this.product.shortDesc,
					"price": Number(this.product.price),
					"createdAt": this.product.createdAt
				});
			} catch (error) {
				console.error(error);
			}
		}
	},

	async created() {
		//TODO: Get product
		/*this.$db.collection("products").doc(this.id).get().then((res) => {
			this.data = res.data();

			this.images = [this.product.img.main, this.product.img.secondary];
		});*/
		try {
			const response = await this.$_axios.get(import.meta.env.VITE_API_URL + "/product/" + this.id);
			this.product = {
				...response.data,
				timeOptions: {}
			};
		} catch (error) {
			console.error(error);
		}
	}
}

</script>
