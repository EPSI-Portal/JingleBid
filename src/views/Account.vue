<template>
	<div>
		<HeaderComponent/>
		<v-row justify="center">
			<v-col justify="center" cols="6">
				<v-card class="glasscard py-5 px-8">
					<v-card-text>
						<h1 class="pb-6 text-white">Modifier mon compte</h1>

						<v-col cols="12" lg="12">
							<v-row class="pb-6 d-flex align-start justify-center">
								<v-col cols="12" class="d-flex align-start justify-center">
									<v-avatar size="85px" class="glass">
										Avatar
									</v-avatar>
								</v-col>
								<v-col class="d-flex align-center" cols="12" lg="auto">
									<v-btn class="text-primary" variant="outlined">Télécharger</v-btn>
								</v-col>
								<v-col class="d-flex align-center" cols="12" lg="auto">
									<v-btn class="text-error" variant="outlined">Supprimer</v-btn>
								</v-col>
							</v-row>
						</v-col>

						<v-divider class="border-opacity-50 text-white"></v-divider>

						<v-row class="pt-5 align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field variant="underlined" v-model="Name" label="Pseudo" hint="Visible par les autres membres" persistent-hint clearable placeholder="James"></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field variant="underlined" v-model="FullName" label="Nom complet" hint="Comment voulez-vous être appelé ?" persistent-hint clearable placeholder="James McDowel"></v-text-field>
							</v-col>
						</v-row>

						<v-row class=" align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field variant="underlined" v-model="EmailAdress" label="Adresse mail" hint="Recevoir les notifications et se connecter" persistent-hint clearable></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field variant="underlined" v-model="PhoneNumber" label="Numéro de téléphone" hint="Pour recevoir les notifications" persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col>
								<v-text-field variant="underlined" v-model="Adress" label="Adresse postale"  persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<v-row class=" pb-10 align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field variant="underlined" v-model="DateBirth" label="Date de naissance"  persistent-hint clearable></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field variant="underlined" v-model="Gender" label="Genre"  persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>

						<v-divider
							class="border-opacity-50 text-white"
						></v-divider>

						<v-col class="d-flex justify-end">
							<v-btn color="primary" variant="outlined">Modifier</v-btn>
						</v-col>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>


</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
	name: "AccountPage",

	components: {
		HeaderComponent
	},

	data() {
		return {
			Name: "",
			FullName: "",
			EmailAdress: "",
			PhoneNumber: "",
			Adress: "",
			DateBirth: "",
			Gender: "",
		}
	},

	created() {

	}
}
</script>
