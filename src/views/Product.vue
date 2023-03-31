<template>
	<div>
		<HeaderComponent :title="data.name"></HeaderComponent>
		<v-row>
			<v-col cols="8">
				<v-card>
					<v-img :src="data.image" cover height="45vh"></v-img>
				</v-card>

				<v-card class="my-3">
					<v-card-text>
						<h3 class="text-h4 mb-2">Description</h3>
						<p>
							{{ data.shortDesc }}
						</p>
						<p>
							{{ data.longDesc }}
						</p>
					</v-card-text>
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
								<span class="text-overline">{{ Number(data.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</span>
							</v-col>
						</v-row>

						<v-row>
							<v-col class="py-0">
								<span>Prix de départ</span>
							</v-col>
							<v-col cols="auto" class="py-0">
								<span class="text-overline">{{ Number(data.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</span>
							</v-col>
						</v-row>

						<v-row>
							<v-col class="py-0">
								<span>Temps restant</span>
							</v-col>
							<v-col cols="auto" class="py-0">
								<span class="text-overline">{{ $_moment().to(data.timeOptions.bidStopTime, true) }}</span>
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
									<v-list-item-subtitle>{{ Math.round(Number(data.price) + (Math.random() * 5)).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</v-list-item-subtitle>
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
							<v-text-field variant="underlined" :label="`Proposez un prix (> ${data.price}€)`" :min="Number(data.price)" suffix="€" type="number" auto-grow rows="1" class="mx-3 py-0"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" class="pt-1">
							<v-checkbox v-model="anonymCheckbox" label="Je préfère être anonyme" class="ml-4 py-0"></v-checkbox>
						</v-col>

						<v-col cols="12" class="px-12 pt-0">
							<v-btn color="primary" block>
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
				data: this.$models.bid,
				images: [],
				randomUsers: ['Sarahlpb', 'psyroman212', 'stan1712', 'Kikyris', 'Sacrigmatik', 'Pierre D.', 'Over_404', '775pl', 'Bggs', 'indes33', 'Irem', 'Laure', 'Jennie K.'],
				anonymCheckbox: false
			}
		},

	async created() {
			//TODO: Get product
			/*this.$db.collection("products").doc(this.id).get().then((res) => {
				this.data = res.data();

				this.images = [this.data.img.main, this.data.img.secondary];
			});*/
			try {
				const response = await this.$_axios.get(import.meta.env.VITE_API_URL + "/product/" + this.id);
				this.data = {
					...response.data,
					timeOptions: {}
				};
			} catch (error) {
				console.error(error);
			}
		}
	}

</script>
