<template>
	<div>
		<v-card>
			<v-img v-if="product.image" height="20vh" :src="product.image" cover></v-img>

			<v-card-title class="text-h5 pb-0 font-weight-regular">{{ product.name }}</v-card-title>

			<v-card-text>
				<div class="text-subtitle-1">
					{{ product.price.toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
					• {{ Math.round(Math.random() * 10) }} enchères
					• Il reste {{ $_moment().to(product.timeOptions.bidStopTime, true) }}
				</div>
				<div>
					Fin de l'enchère le {{ $_moment(product.timeOptions.bidStopTime).format("DD/MM/yyyy à HH:mm") }}.
				</div>

				<v-divider class="border-opacity-35 my-4"></v-divider>

				<div>{{ product.shortDesc }}</div>
			</v-card-text>

			<v-divider class="border-opacity-35 mx-4"></v-divider>

			<v-card-title class="text-body-1">Dernières offres</v-card-title>

			<v-card-text>
				<v-row class="px-2">
					<v-col v-for="index in maxBids" :key="index" cols="auto" class="py-1 px-1">
						<v-chip color="secondary">
							{{ randomUsers[Math.floor(Math.random() * randomUsers.length)] }}
							<span class="ml-1 text-overline">{{ Math.round(product.price * (Math.random() * 5)).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</span>
						</v-chip>
					</v-col>
				</v-row>
			</v-card-text>

			<v-card-actions>
				<v-row>
					<v-col cols="12" sm="auto">
						<v-row>
							<v-col cols="auto">
								<v-btn variant="text" block @click="$router.push('bid/' + product.id)" color="primary">
									Voir
								</v-btn>
							</v-col>
							<v-col cols="auto">
								<v-btn variant="text" block @click="placeBid = !placeBid" color="secondary">
									Enchérir
								</v-btn>
							</v-col>
						</v-row>
					</v-col>

					<v-spacer></v-spacer>

					<v-col cols="12" sm="4" class="pt-1">
						<v-row>
							<v-col cols="6">
								<v-tooltip text="Créer un suivi" location="bottom">
									<template v-slot:activator="{ props }">
										<v-btn class="px-0" text icon color="yellow" v-bind="props">
											<v-icon size="small">far fa-bell</v-icon>
										</v-btn>
									</template>
								</v-tooltip>
							</v-col>
							<v-col cols="6">
								<v-tooltip text="Ajouter aux favoris" location="bottom">
									<template v-slot:activator="{ props }">
										<v-btn class="px-0" text icon color="pink" v-bind="props">
											<v-icon size="small">far fa-heart</v-icon>
										</v-btn>
									</template>
								</v-tooltip>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card-actions>
		</v-card>

		<v-dialog
		v-model="placeBid"
		width="600"
		>
			<v-card>
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
					<div class="text-subtitle-1 overline">
						<span class="text-caption">Prix actuel</span> {{ Number(product.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ <span class="text-caption">• Prix de départ</span> {{ Number(product.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
					</div>

					<p class="text-body-2">{{ product.shortDesc }}</p>

					<v-divider class="my-2"></v-divider>

					<p class="text-body-2">{{ product.longDesc }}</p>

					<v-divider class="my-2"></v-divider>

					<h2 class="text-h5">Poser une enchère</h2>
					<p class="text-body-2">Souhaitez vous poser une enchère sur ce produit ?</p>

					<v-row class="col-12 my-3">
						<v-btn variant="text" color="primary" v-for="index in 8" :key="index">{{ Math.round(product.price + index * 10).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ (+{{index}}0€)</v-btn>
					</v-row>

					<v-row>
						<v-col>
							<span class="text-caption font-italic">Cliquer sur le bouton vous enverra sur la page de paiement.</span>
						</v-col>
						<v-col cols="auto">
							<v-btn variant="text" color="error" @click="placeBid = !placeBid">
								Annuler
							</v-btn>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { useDisplay } from 'vuetify';
export default {
	name: "ProductComponent",
	inject: ["$_moment"],

	props: {
		product: {
			type: Object
		},
		maxBids: {
			type: Number,
			default: 5
		}
	},



	setup () {
		const { mdAndUp } = useDisplay()

		return { mdAndUp }
	},

	data() {
		return {
			placeBid: false,

			randomUsers: ['Sarahlpb', 'psyroman212', 'stan1712', 'Kikyris', 'Sacrigmatik', 'Pierre D.', 'Over_404', '775pl', 'Bggs', 'indes33']
		}
	}
}
</script>
