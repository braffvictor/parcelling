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
            class="text-primary font-weight-light text-md-subtitle-1 text-subtitle-2 text-center"
          >
            Please Register With Us
          </p>

          <VForm
            ref="form"
            validate-on="lazy input"
            class="my-7"
            v-model="valid"
            @submit.prevent="submit"
          >
            <v-row class="mx-0 px-0" justify="center">
              <VCol cols="12" md="9">
                <v-row class="mx-0 px-0">
                  <VCol cols="12" md="6" class="my-0 py-0">
                    <VTextField
                      v-model="firstName"
                      label="First Name"
                      variant="outlined"
                      color="primary"
                      :rules="[(v) => !!v || 'First Name is required']"
                      required
                      class="text-white"
                      density="comfortable"
                    />
                  </VCol>
                  <VCol cols="12" md="6" class="my-0 py-0">
                    <VTextField
                      v-model="lastName"
                      label="Last Name"
                      variant="outlined"
                      color="primary"
                      :rules="[(v) => !!v || 'Last Name is required']"
                      required
                      class="text-white"
                      density="comfortable"
                    />
                  </VCol>
                  <VCol cols="12" md="6" class="my-0 py-0">
                    <VTextField
                      v-model="email"
                      label="Email Address"
                      variant="outlined"
                      color="primary"
                      :rules="emailRules"
                      required
                      class="text-white"
                      density="comfortable"
                    />
                  </VCol>
                  <VCol cols="12" md="6" class="my-0 py-0">
                    <VTextField
                      v-model="password"
                      label="Password"
                      :rules="passwordRules"
                      required
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
                      :loading="authentication.getters.getLoading.register"
                      block
                      type="submit"
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
import { ref } from "vue";
import authentication from "@/store/authentication";

console.log(authentication.getters.getLoading);

//form data and others
const eye = ref(false);
const valid = ref(false);

const firstName = ref("");
const lastName = ref("");

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

//submit function
const submit = () => {
  if (valid.value) {
    console.log("submit payload");
    const payload = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    authentication.dispatch("registerUser", payload);
  } else {
    console.log("error in submission");
  }
};
</script>
<style></style>
