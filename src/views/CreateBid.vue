<template>
	<div>
		<HeaderComponent title="Soumettre une enchère"></HeaderComponent>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Titre</v-card-title>

					<v-card-text>
						<v-text-field variant="underlined" v-model="bid.name" class="mt-0 pt-0"></v-text-field>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert type="info" variant="tonal" color="primary">
					Ajoutez des détails tels que la marque, la couleur, la taille, les caractéristiques, l'état, etc.
				</v-alert>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Détails</v-card-title>

					<v-card-text>
						<h3 class="font-weight-regular">État de votre bien</h3>
						<v-select class="mt-0 pt-0" v-model="bid.condition" variant="underlined" :items="['État neuf', 'Très bon état', 'Bon état', 'État satisfaisant']"></v-select>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert type="info" variant="tonal" color="primary">
					Les acheteurs ont besoin de ces détails pour trouver votre objet.
				</v-alert>
			</v-col>

			<v-col cols="9">
				<v-divider class="my-12" style="border-color: #fff;"></v-divider>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Description courte</v-card-title>

					<v-card-text>
						<v-textarea v-model="bid.shortDesc" variant="underlined" class="mt-0 pt-0" rows="2"></v-textarea>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert type="info" variant="tonal" color="primary">
					Utilisez cette description pour accrocher l'acheteur.
				</v-alert>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Description longue</v-card-title>

					<v-card-text>
						<v-textarea v-model="bid.longDesc" variant="underlined" class=" mt-0 pt-0"></v-textarea>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert type="info" variant="tonal" color="primary">
					Décrivez les caractéristiques uniques de votre objet, ses défauts et la raison pour laquelle vous le vendez.
				</v-alert>
			</v-col>

			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Images</v-card-title>

					<v-card-text>
						<v-text-field variant="underlined" v-model="bid.image" prepend-icon="fas fa-paperclip" class="mt-0 pt-0"></v-text-field>
						<v-img v-if="bid.image" :src="bid.image" contain></v-img>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert type="info" variant="tonal" color="primary">
					Vous pouvez ajouter une photo pour inspirer confiance aux acheteurs.
				</v-alert>
			</v-col>

			<v-col cols="9">
				<v-divider class="my-12" style="border-color: #fff;"></v-divider>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Options de l'enchère</v-card-title>

					<v-card-text>
						<v-row>
							<v-col cols="4">
								<v-text-field variant="underlined" class="mt-0 pt-0 col-6 pl-1" v-model="bid.price" type=" number" suffix="€" prepend-icon="fa fa-euro" label="Prix de départ"></v-text-field>
							</v-col>
							<!--<v-col cols="12">

								<v-row class="px-2">
									<v-col cols="12" sm="6">
										<v-dialog ref="dateDialog" v-model="modals.datePicker" v-model:return-value="date" width="290px">
											<template v-slot:activator="{ on, attrs }">
												<v-text-field variant="underlined" v-model="dateFormatted" label="Date de fin de l'enchère" @blur="date = parseDate(dateFormatted)" prepend-icon="far fa-calendar" readonly v-bind="attrs" v-on="on">
												</v-text-field>
											</template>
											<v-date-picker v-model="date" scrollable>
												<v-spacer></v-spacer>
												<v-btn text color="primary" @click="modals.datePicker = false">
													Annuler
												</v-btn>
												<v-btn text color="primary" @click="$refs.dateDialog.save(date)">
													Ok
												</v-btn>
											</v-date-picker>
										</v-dialog>
									</v-col>

									<v-col cols="12" sm="6">
										<v-dialog ref="timeDialog" v-model="modals.timePicker" :return-value.sync="time" width="290px">
											<template v-slot:activator="{ on, attrs }">
												<v-text-field variant="underlined" v-model="time" label="Heure de fin de l'enchère" prepend-icon="far fa-clock" readonly v-bind="attrs" v-on="on">
												</v-text-field>
											</template>
											<v-time-picker v-if="modals.timePicker" v-model="time" full-width format="24hr">
												<v-spacer></v-spacer>
												<v-btn text color="primary" @click="modals.timePicker = false">
													Annuler
												</v-btn>
												<v-btn text color="primary" @click="$refs.timeDialog.save(time)">
													Ok
												</v-btn>
											</v-time-picker>
										</v-dialog>
									</v-col>
								</v-row>

							</v-col>-->
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert type="info" variant="tonal" color="primary">
					Fixez un prix de départ pour votre enchère et laissez jouer la concurrence.
				</v-alert>
			</v-col>
		</v-row>

		<v-row justify="center" class="pb-12">
			<v-col cols="12" sm="6">
				<v-btn color="primary" block @click="submit()">Envoyer</v-btn>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4"></v-col>
		</v-row>
	</div>
</template>

<style>

</style>

<script>
	import HeaderComponent from "@/components/HeaderComponent.vue";

	export default {
		name: "CreateBidPage",
		inject: ["$models", "$_axios"],

		components: {
			HeaderComponent
		},

		data() {
			return {
				user: {},

				importIMG: {},
				imagesLoading: false,

				bid: this.$models.bid,

				modals: {
					datePicker: false,
					timePicker: false
				},

				date: '',
				dateFormatted: '',
				time: '23:59'
			}
		},

		watch: {
			date: function() {
				this.dateFormatted = this.formatDate(this.date);
				this.regreshTime();
			},
			time: function() {
				this.regreshTime();
			}
		},

		methods: {
			regreshTime() {
				this.bid.timeOptions.bidStopTime = new Date(`${this.date} ${this.time}`).getTime();
				console.log(new Date(`${this.date} ${this.time}`));
			},

			formatDate (date) {
				if (!date) return null

				const [year, month, day] = date.split('-')
				return `${month}/${day}/${year}`
			},
			parseDate (date) {
				if (!date) return null

				const [month, day, year] = date.split('/')
				return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
			},

			async submit() {
				try {
					await this.$_axios.post(import.meta.env.VITE_API_URL + "/product", {
						"name": this.bid.name,
						"condition": this.bid.condition,
						"image": this.bid.image,
						"longDesc": this.bid.longDesc,
						"shortDesc": this.bid.shortDesc,
						"price": Number(this.bid.price),
						"createdAt": (new Date()).getTime().toString()
					});
				} catch (error) {
					console.error(error);
				}
			}
		}
	}

</script>
