<template>
  <div class="h-100 w-100">
    <VDialog
      scrollable
      @update:model-value="dialog"
      :model-value="dialog"
      persistent
      :overlay="true"
      max-width="500px"
      transition="dialog-transition"
    >
      <VCard variant="flat" color="accent">
        <VCardText>
          <div
            class="d-flex align-center justify-space-between text-accent-text-subtitle-1 text-md-h6"
          >
            <p>Add Shipment</p>
            <p>
              <VIcon
                color="primary"
                size="small"
                icon="fa-close"
                @click.self="emits('closeDialog')"
              ></VIcon>
            </p>
          </div>

          <!-- divider -->
          <div
            style="height: 2px; width: 100%"
            class="bg-primary rounded-xl my-2"
          ></div>

          <div>
            <VForm>
              <p
                class="text-button text-center font-weight-bold mx-3 text-capitalize text-white"
              >
                Profile details
              </p>
              <v-row class="mx-0 px-0" justify="center" no-gutters>
                <VCol cols="12">
                  <v-file-input
                    v-model="passport"
                    color="primary"
                    label="Client Passport"
                    prepend-inner-icon="fa-camera"
                    prepend-icon=""
                    @update:model-value="showImage"
                    variant="outlined"
                    clear-icon="fa-close"
                  >
                    <template v-slot:selection="{ fileNames }">
                      <template v-for="fileName in fileNames" :key="fileName">
                        <v-chip class="me-2" color="primary" size="small" label>
                          {{ fileName }}
                        </v-chip>
                      </template>
                    </template>
                  </v-file-input>

                  <VCard
                    max-height="200"
                    max-width="200"
                    variant="flat"
                    rounded="lg"
                    class="bg-transparent mx-auto text-center mb-7"
                    v-if="passport && passportImage"
                  >
                    <v-img class="mx-auto text-center" :src="passportImage">
                    </v-img>
                  </VCard>
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="fullName"
                    label="FullName"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="email"
                    label="Email"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="phoneNumber"
                    label="Phone Number"
                    color="primary"
                    type="tel"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="address"
                    label="Residential Address"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>

                <p
                  class="text-button mx-3 text-capitalize font-weight-bold text-white"
                >
                  Shipment details
                </p>

                <VCol cols="12">
                  <v-file-input
                    v-model="shipmentPhoto"
                    color="primary"
                    label="Shipment Photo"
                    prepend-inner-icon="fa-camera"
                    prepend-icon=""
                    @update:model-value="showShipmentImage"
                    variant="outlined"
                    clear-icon="fa-close"
                  >
                    <template v-slot:selection="{ fileNames }">
                      <template v-for="fileName in fileNames" :key="fileName">
                        <v-chip class="me-2" color="primary" size="small" label>
                          {{ fileName }}
                        </v-chip>
                      </template>
                    </template>
                  </v-file-input>

                  <VCard
                    max-height="200"
                    max-width="200"
                    variant="flat"
                    rounded="lg"
                    class="bg-transparent mx-auto text-center mb-7"
                    v-if="shipmentPhoto && shipmentPhotoImage"
                  >
                    <v-img
                      class="mx-auto text-center"
                      :src="shipmentPhotoImage"
                    >
                    </v-img>
                  </VCard>
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="shipment"
                    label="Shipment"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="location"
                    label="Current Location"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="shippingCost"
                    label="Shipping Cost"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="units"
                    label="Units"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="price"
                    label="Price"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="vat"
                    label="VAT"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="insurance"
                    label="Insurance"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="serviceCharge"
                    label="Service Charge"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12" class="my-0 py-0">
                  <VTextField
                    v-model="dueDate"
                    label="Due Date"
                    color="primary"
                    class="text-white"
                    variant="outlined"
                  />
                </VCol>
                <VCol cols="12">
                  <VBtn color="primary" block variant="flat" size="large"
                    >Create Shipment
                    <span class="mx-1" v-if="fullName"> for </span>
                    {{
                      fullName.length > 7
                        ? fullName.slice(0, 7) + "..."
                        : fullName
                    }}</VBtn
                  >
                </VCol>
              </v-row>
            </VForm>
          </div>
        </VCardText>
      </VCard>
    </VDialog>
  </div>
</template>
<script setup>
/* eslint-disable */
import { ref, defineProps, defineEmits } from "vue";

const emits = defineEmits(["closeDialog"]);

const props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
});

//dialog  form
//profile data
const passport = ref(null);
const passportImage = ref(null);
const fullName = ref("");
const email = ref("");
const phoneNumber = ref("");
const address = ref("");

//shipment data
const shipmentPhoto = ref(null);
const shipmentPhotoImage = ref(null);
const shipment = ref("");
const location = ref("");
const shippingCost = ref("");
const units = ref(0);
const price = ref("");
const vat = ref("");
const insurance = ref("");
const serviceCharge = ref("");
const dueDate = ref("");

//show image function for profile photo
const showImage = () => {
  if ((passport.value && passport.value[0]) != null) {
    passportImage.value = URL.createObjectURL(passport.value[0]);
  } else {
    passportImage.value = null;
  }
};

//show image function for shipment photo
const showShipmentImage = () => {
  if ((shipmentPhoto.value && shipmentPhoto.value[0]) != null) {
    shipmentPhotoImage.value = URL.createObjectURL(shipmentPhoto.value[0]);
  } else {
    shipmentPhotoImage.value = null;
  }
};
</script>
<style></style>
