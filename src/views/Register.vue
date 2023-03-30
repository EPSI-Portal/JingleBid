<template>
	<div>
		<HeaderComponent/>
		<v-row justify="center">
			<v-col justify="center" align="center" cols="6">
				<v-card class="glasscard py-5 px-8">
					<v-card-text>
						<v-icon size="x-large" class="my-4" color="primary">fas fa-user-circle</v-icon>
						<h2 class="text-h5">Inscription</h2>

						<v-form ref="regForm" class="pt-6">
							<v-row>
								<v-col cols="12" md="4">
									<v-text-field variant="underlined" label="Pseudonyme" type="text" v-model="username" :rules="$fieldsRules.required('pseudonyme')"></v-text-field>
								</v-col>

								<v-col cols="12" md="8">
									<v-text-field variant="underlined" label="Email" type="email" v-model="email" :rules="[...$fieldsRules.required('email'), ...$fieldsRules.email]"></v-text-field>
								</v-col>
							</v-row>

							<v-row class="align-content-center py-2">
								<v-col cols="12" lg="6" class="py-0">
									<v-text-field variant="underlined" v-model="password" label="Mot de passe" type="password" :rules="$fieldsRules.required('mot de passe')">
									</v-text-field>
								</v-col>
								<v-col cols="12" lg="6" class="py-0 pb-6">
									<v-text-field variant="underlined" v-model="confirmationPassword" label="Confirmation de mot de passe" type="password" :rules="$fieldsRules.password(password)">
									</v-text-field>
								</v-col>
							</v-row>
						</v-form>

						<div>
							<v-btn @click="register()" color="secondary" size="large">S'inscrire</v-btn>

							<v-spacer class="mt-4"></v-spacer>

							<span class="text-medium-emphasis"  style="cursor: pointer; line-height: 20px; letter-spacing: normal; font-size: 16px; font-weight: 400;" @click="$router.push('login')">
								J'ai déjà un compte
								<v-icon size="x-small" class="mb-1 mx-2 text-secondary">
									fas fa-share-square
								</v-icon>
							</span>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

	export default {
		name: "RegisterPage",
		inject: ["$fieldsRules", "$db", "$firebase"],

		components: {
			HeaderComponent,
		},

		data() {
			return {
				email: "",
				username: "",

				password: "",
				confirmationPassword: "",
			};
		},

		methods: {
			verifyPassword: function () {
				if (this.password == this.confirmationPassword) {
					return true;
				}
				return false;
			},

			register() {
				this.$refs.regForm.validate();

				if(!this.password || !this.email) return;

				if (this.verifyPassword()) {
					this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((credentials) => {
						credentials.user.updateProfile({
							displayName: this.username
						});

						this.$db.collection("users").doc(credentials.user.uid).set({
							displayName: this.username,
							email: this.email,
							creationDate: new Date().getTime()
						});

						this.$router.push('/account');
					});
				}
			},
		},
	};

</script>
