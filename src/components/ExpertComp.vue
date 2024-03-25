<template>
  <main class="footer-bg pa-8 pa-md-15">
    <v-row class="mx-0 px-0">
      <VCol cols="12" md="6" align-self="center">
        <p class="text-h4 text-primary py-0 my-0 font-weight-bold">
          Your on-time delivery experience begins here
        </p>
        <p class="text-h6 text-white font-weight-medium">
          Talk with us to leverage accurate data of arrival predictions.
        </p>
      </VCol>
      <VCol cols="12" md="6">
        <p class="text-h4 text-white font-weight-medium text-left">
          Talk to an expert
        </p>
        <div>
          <v-form>
            <v-row class="mx-0 px-0 py-3">
              <VCol cols="12" md="6">
                <VTextField
                  v-model="firstName"
                  label="First Name"
                  color="primary"
                  density="compact"
                  variant="underlined"
                  class="text-white"
                />
              </VCol>
              <VCol cols="12" md="6">
                <VTextField
                  v-model="lastName"
                  label="Last Name"
                  class="text-white"
                  color="primary"
                  variant="underlined"
                  density="compact"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="companyEmail"
                  label="Company Email"
                  class="text-white"
                  color="primary"
                  variant="underlined"
                  density="compact"
                />
              </VCol>
              <VCol cols="12" md="6">
                <VTextField
                  v-model="companyName"
                  label="Company Name"
                  class="text-white"
                  color="primary"
                  variant="underlined"
                  density="compact"
                />
              </VCol>
              <VCol cols="12" md="6">
                <VTextField
                  v-model="companyCountry"
                  label="Company Country"
                  class="text-white"
                  color="primary"
                  variant="underlined"
                  density="compact"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="jobTitle"
                  label="Job Title"
                  color="primary"
                  class="text-white"
                  variant="underlined"
                  density="compact"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="help"
                  label="How can we help?"
                  color="primary"
                  class="text-white"
                  variant="underlined"
                  density="compact"
                />
              </VCol>
              <VCol cols="12">
                <VCheckbox
                  label="By submitting this form, you agree to receive promotional and marketing communications from Parcel Perform, in accordance to our privacy and cookies policy."
                  v-model="terms"
                  color="primary"
                  class="text-white text-left"
                  false-icon="fa-square"
                ></VCheckbox>
              </VCol>
            </v-row>
          </v-form>
        </div>
      </VCol>
    </v-row>
  </main>
</template>
<script setup>
import { ref } from "vue";
// form data
const firstName = ref("");
const lastName = ref("");
const companyEmail = ref("");
const companyName = ref("");
const companyCountry = ref("");
const jobTitle = ref("");
const help = ref("");
const terms = ref(false);
</script>
<style>
.footer-bg {
  background-image: url(https://images.ctfassets.net/s384oqk42kco/2Qb6RS1DZeUzU4sQPu2UUk/fa2f03dbde179bb8754f1e01527dfea8/leads_form_background_image.webp);
  background-position: center;
  background-size: cover;
}
</style>
