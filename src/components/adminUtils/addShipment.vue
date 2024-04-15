<template>
  <div class="" style="height: auto; overflow: visible">
    <VCard variant="flat" color="accent" style="height: auto">
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
          <VForm
            v-model="valid"
            ref="form"
            validate-on="lazy input"
            @submit.prevent="submit"
          >
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
                  :rules="[(v) => !!v || 'Client Photo is required']"
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
                  :rules="[(v) => !!v || 'FullName is required']"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="email"
                  label="Email"
                  color="primary"
                  :rules="[(v) => !!v || 'Email is required']"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="phoneNumber"
                  label="Phone Number"
                  color="primary"
                  :rules="[(v) => !!v || 'Phone Number is required']"
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
                  :rules="[(v) => !!v || 'Residential Address is required']"
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
                  :rules="[(v) => !!v || 'Shipment Photo is required']"
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
                  max-height="300"
                  max-width="300"
                  variant="flat"
                  rounded="lg"
                  class="bg-transparent mx-auto text-center mb-7"
                  v-if="shipmentPhoto && shipmentPhotoImage"
                >
                  <v-img class="mx-auto text-center" :src="shipmentPhotoImage">
                  </v-img>
                </VCard>
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipment"
                  label="Shipment"
                  :rules="[
                    (v) => !!v || 'Shipment Name and Detail is required',
                  ]"
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
                  :rules="[(v) => !!v || 'Location is required']"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12">
                <VAutocomplete
                  :items="symbolArray"
                  v-model="symbol"
                  color="primary"
                  :rules="[(v) => !!v || 'Symbol is required']"
                  class="text-white"
                  item-color="primary"
                  variant="outlined"
                  item-title="symbol"
                  label="Select Currency"
                >
                </VAutocomplete>
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shippingCostAmount"
                  label="Shipping Cost"
                  color="primary"
                  :rules="[(v) => !!v || 'Shipping Cost is required']"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="units"
                  label="Units"
                  :rules="[(v) => !!v || 'Number of Units is required']"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="priceAmount"
                  label="Price"
                  color="primary"
                  :rules="[(v) => !!v || 'Price is required']"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="vatAmount"
                  label="VAT"
                  :rules="[(v) => !!v || 'VAT is required']"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="insuranceAmount"
                  label="Insurance"
                  color="primary"
                  type="tel"
                  class="text-white"
                  :rules="[(v) => !!v || 'Insurance is required']"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="serviceChargeAmount"
                  label="Service Charge"
                  :rules="[(v) => !!v || 'Service Charge is required']"
                  color="primary"
                  class="text-white"
                  variant="outlined"
                  type="tel"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="dueDate"
                  label="Due Date"
                  type="date"
                  color="primary"
                  :rules="[(v) => !!v || 'Due Date is required']"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>

              <VCol cols="12">
                <VBtn
                  color="primary"
                  type="submit"
                  block
                  variant="flat"
                  size="large"
                  :loading="loading.shipment"
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
  </div>
</template>
<script setup>
/* eslint-disable */
import { ref, defineProps, defineEmits, computed } from "vue";
import countries from "@/services/countries";
import adminflow from "@/store/adminflow";
const emits = defineEmits(["closeDialog"]);

const loading = adminflow.getters.getLoading;

const props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
});

//form control
const valid = ref(true);
//submit function
const submit = () => {
  if (valid.value) {
    const payload = {
      // client details
      passportPhoto: passport.value[0],
      fullName: fullName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      address: address.value,

      // shipment details
      shipmentPhoto: shipmentPhoto.value[0],
      shipment: shipment.value,
      location: location.value,
      symbol: symbol.value,
      shippingCost: shippingCostAmount.value,
      units: units.value,
      price: priceAmount.value,
      vat: vatAmount.value,
      insurance: insuranceAmount.value,
      serviceCharge: serviceChargeAmount.value,
      dueDate: dueDate.value,
    };

    console.log(payload);
    adminflow.dispatch("addShipment", payload);
    setTimeout(() => {
      emits("closeDialog");
    }, 2000);
  } else {
    console.log("not submitted");
  }
};

const countriess = computed(() => {
  return countries;
});

const symbolArray = ref([]);
function getCurrencies(arr) {
  symbolArray.value = arr.map((data) => {
    return {
      symbol: data.currency.symbol ? data.currency.symbol : "$",
    };
  });
  return symbolArray;
}

getCurrencies(countriess.value);

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
// add in payload
// const shipmentStatus = ref("Ongoing");
const shipmentPhotoImage = ref(null);
const shipment = ref("");
const location = ref("");

//symbol
const symbol = ref("$");

//for shipping cost
const shippingCost = ref("");
const shippingCostAmount = computed({
  get() {
    let val = parseInt(shippingCost.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${symbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === symbol.value[0]) {
      val = val.substring(1);
    }

    // Convert the value to a number
    if (val !== null) {
      val = val.split(",").join("");
      val = parseInt(val);
      shippingCost.value = val;
    }
  },
});

//units
const units = ref("");

const price = ref("");
const priceAmount = computed({
  get() {
    let val = parseInt(price.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${symbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === symbol.value[0]) {
      val = val.substring(1);
    }

    // Convert the value to a number
    if (val !== null) {
      val = val.split(",").join("");
      val = parseInt(val);
      price.value = val;
    }
  },
});

//VAT
const vat = ref("");
const vatAmount = computed({
  get() {
    let val = parseInt(vat.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${symbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === symbol.value[0]) {
      val = val.substring(1);
    }

    // Convert the value to a number
    if (val !== null) {
      val = val.split(",").join("");
      val = parseInt(val);
      vat.value = val;
    }
  },
});

//insurance
const insurance = ref("");
const insuranceAmount = computed({
  get() {
    let val = parseInt(insurance.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${symbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === symbol.value[0]) {
      val = val.substring(1);
    }

    // Convert the value to a number
    if (val !== null) {
      val = val.split(",").join("");
      val = parseInt(val);
      insurance.value = val;
    }
  },
});

//service charge
const serviceCharge = ref("");
const serviceChargeAmount = computed({
  get() {
    let val = parseInt(serviceCharge.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${symbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === symbol.value[0]) {
      val = val.substring(1);
    }

    // Convert the value to a number
    if (val !== null) {
      val = val.split(",").join("");
      val = parseInt(val);
      serviceCharge.value = val;
    }
  },
});

// date dialog
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
