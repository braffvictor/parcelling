<template>
  <div class="d-flex justify-center align-center" style="height: 100vh">
    <VRow class="mx-0 px-0" justify="center">
      <VCol cols="12" md="8">
        <v-card color="accent" variant="flat">
          <div class="text-center mx-auto">
            <v-img
              src="https://www.parcelperform.com/images/parcel-perform-logo.svg"
              min-width="160"
              max-width="200"
              @click="$router.push('/')"
              class="cursor-pointer text-center mx-auto"
            ></v-img>
          </div>

          <p
            class="text-primary text-md-subtitle-1 text-subtitle-2 text-center"
          >
            Login Your Admin Account
          </p>

          <VForm
            ref="form"
            class="my-7"
            v-model="valid"
            @submit.prevent="submit"
          >
            <v-row class="mx-0 px-0" justify="center">
              <VCol cols="12" md="6">
                <v-row class="mx-0 px-0">
                  <VCol cols="12" class="my-0 py-0">
                    <VTextField
                      v-model="email"
                      label="Email Address"
                      variant="outlined"
                      color="primary"
                      :rules="emailRules"
                      class="text-white"
                      density="comfortable"
                    />
                  </VCol>
                  <VCol cols="12" class="my-0 py-0">
                    <VTextField
                      v-model="password"
                      label="Password"
                      :rules="passwordRules"
                      :append-inner-icon="eye ? 'fa-eye' : 'fa-eye-slash'"
                      @click:append-inner="eye = !eye"
                      variant="outlined"
                      color="primary"
                      :type="eye ? 'text' : 'password'"
                      class="text-white"
                      density="comfortable"
                    />
                  </VCol>
                  <VCol cols="12">
                    <VBtn
                      color="primary"
                      type="submit"
                      block
                      :loading="loading.login"
                      size="large"
                      variant="flat"
                      >Submit</VBtn
                    >
                  </VCol>
                </v-row>
              </VCol>
            </v-row>
          </VForm>
        </v-card>
      </VCol>
    </VRow>
  </div>
</template>
<script setup>
import authentication from "@/store/authentication";
import { ref } from "vue";

const loading = authentication.getters.getLoading;

// form data and others
const eye = ref(false);
const valid = ref(false);

const email = ref("");
const emailRules = [
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const password = ref("");
const passwordRules = [
  (v) => !!v || "Password is required",
  (v) => (v && v.length >= 6) || "Password must be greater than 6 characters",
];

function submit() {
  if (valid.value) {
    const payload = {
      email: email.value,
      password: password.value,
    };
    authentication.dispatch("loginUser", payload);
  } else {
    console.log("form incomplete");
  }
}
</script>
<style></style>
