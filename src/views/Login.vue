<template>
	<div>
		<HeaderComponent />
		<v-row justify="center">
			<v-col justify="center" align="center" cols="6">
				<v-card class="glasscard py-5 px-8">
					<v-card-text>
						<v-icon size="x-large" class="my-4" color="primary">fas fa-user-circle</v-icon>
						<h2 class="text-h5">Connexion</h2>

						<v-form ref="regForm" class="pt-6">
							<v-row>
								<v-col class="px-0" cols="12">
									<v-text-field variant="underlined" v-model="email" label="Email" :rules="$fieldsRules.email"></v-text-field>
									<v-text-field variant="underlined" v-model="password" type="password" label="Mot de passe" ></v-text-field>
								</v-col>

								<v-row>
									<v-col cols="12" lg="6">
										<v-checkbox class="mt-0" v-model="saveme" label="Se souvenir de moi"></v-checkbox>
									</v-col>
									<v-col cols="12" lg="6" align="right" class="mt-5">
										<span class="text-medium-emphasis" style="cursor: pointer; line-height: 20px; letter-spacing: normal; font-size: 16px; font-weight: 400;">
											Mot de passe oublié ?
											<v-icon size="x-small" class="mb-1 mx-2 text-secondary">
												fas fa-share-square
											</v-icon>
										</span>
									</v-col>
								</v-row>
							</v-row>
						</v-form>

						<div>
							<v-btn @click="login()" color="secondary" size="large">Connexion</v-btn>

							<v-spacer class="mt-4"></v-spacer>

							<span class="text-medium-emphasis"  style="cursor: pointer; line-height: 20px; letter-spacing: normal; font-size: 16px; font-weight: 400;" @click="$router.push('register')">
								Je n'ai pas de compte
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

<style scoped>
	h2 {
		text-align: center;
	}
</style>


<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
	name: "LoginPage",
	inject: ["$fieldsRules"],

	components: {
		HeaderComponent,
	},

	data() {
		return {
			email: "",
			password: "",

			saveme: false
		};
	},

	methods: {
		async login() {
			try {
				await signInWithEmailAndPassword(getAuth(), this.email, this.password);

				this.$router.replace({
					path: "/"
				});
			} catch (error) {
				console.error(error);
			}
		},

	}
};
</script>
