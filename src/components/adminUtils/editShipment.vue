<template>
  <div class="" style="height: auto; overflow: visible">
    <VCard variant="flat" color="accent" style="height: auto">
      <VCardText>
        <div
          class="d-flex align-center justify-space-between text-accent-text-subtitle-1 text-md-h6"
        >
          <p>Edit Shipment</p>
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
              Edit Profile details
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

                <VCard
                  max-height="200"
                  max-width="200"
                  variant="flat"
                  rounded="lg"
                  class="bg-transparent mx-auto text-center mb-7"
                  v-else
                >
                  <v-img
                    class="mx-auto text-center"
                    :src="shipmentData.passportPhoto"
                  >
                  </v-img>
                </VCard>
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipmentfullName"
                  label="FullName"
                  color="primary"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipmentEmail"
                  label="Email"
                  color="primary"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipmentphoneNumber"
                  label="Phone Number"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipmentAddress"
                  label="Residential Address"
                  color="primary"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>

              <p
                class="text-button mx-3 text-capitalize font-weight-bold text-white"
              >
                Edit Shipment details
              </p>

              <VCol cols="12">
                <VSelect
                  :items="['Completed', 'Ongoing', 'Closed']"
                  v-model="shipmentStatus"
                  label="Shipment Status"
                  color="primary"
                  variant="outlined"
                  item-color="primary"
                  class="text-white text-capitalize"
                ></VSelect>
              </VCol>

              <VCol cols="12">
                <VSelect
                  :items="[
                    '0',
                    '10',
                    '20',
                    '30',
                    '40',
                    '50',
                    '60',
                    '70',
                    '80',
                    '90',
                    '100',
                  ]"
                  v-model="shipmentProgress"
                  label="Shipment Progress"
                  color="primary"
                  hint="Closed(0), Ongoing(10-90), Completed(100)"
                  variant="outlined"
                  item-color="primary"
                  class="text-white text-capitalize"
                ></VSelect>
              </VCol>

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

                <VCard
                  max-height="300"
                  max-width="300"
                  variant="flat"
                  rounded="lg"
                  class="bg-transparent mx-auto text-center mb-7"
                  v-else
                >
                  <v-img
                    class="mx-auto text-center"
                    :src="shipmentData.shipmentPhoto"
                  >
                  </v-img>
                </VCard>
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipmentName"
                  label="Shipment"
                  color="primary"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipmentLocation"
                  label="Current Location"
                  color="primary"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="units"
                  :label="`Units - ${shipmentUnits}`"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12">
                <VAutocomplete
                  :items="symbolArray"
                  v-model="shipmentsymbol"
                  color="primary"
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
                  :label="`Shipping Cost - ${shipmentshippingCost}.00`"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>

              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="priceAmount"
                  :label="`Shipment Price - ${shipmentPrice}.00`"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="vatAmount"
                  :label="`VAT - ${shipmentVat}.00`"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="insuranceAmount"
                  :label="`VAT - ${shipmentInsurance}.00`"
                  color="primary"
                  type="tel"
                  class="text-white"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="serviceChargeAmount"
                  :label="`Service Charge - ${shipmentserviceCharge}.00`"
                  color="primary"
                  class="text-white"
                  variant="outlined"
                  type="tel"
                />
              </VCol>
              <VCol cols="12" class="my-0 py-0">
                <VTextField
                  v-model="shipmentdueDate"
                  label="Due Date"
                  type="date"
                  color="primary"
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
                  >Edit Shipment
                  <span class="mx-1" v-if="shipmentfullName"> for </span>
                  {{
                    shipmentfullName.length > 7
                      ? shipmentfullName.slice(0, 7) + "..."
                      : shipmentfullName
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
  shipmentData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

//form control
const valid = ref(true);

const progress = ref("");
const shipmentProgress = computed({
  get() {
    return progress.value ? progress.value : props.shipmentData.progress;
  },
  set(val) {
    progress.value = val;
  },
});

//submit function
const submit = () => {
  if (valid.value) {
    const payload = {
      id: props.shipmentData.id,
      // client details
      passportPhoto:
        passport.value != null
          ? passport.value[0]
          : props.shipmentData.passportPhoto,
      passportP: passport.value ? true : false,
      fullName: fullName.value ? fullName.value : props.shipmentData.fullName,
      email: email.value ? email.value : props.shipmentData.email,
      phoneNumber: phoneNumber.value
        ? phoneNumber.value
        : props.shipmentData.phoneNumber,
      address: address.value ? address.value : props.shipmentData.address,

      // shipment details
      shipmentPhoto:
        shipmentPhoto.value != null
          ? shipmentPhoto.value[0]
          : props.shipmentData.shipmentPhoto,
      shipmentP: shipmentPhoto.value ? true : false,
      shipment: shipment.value ? shipment.value : props.shipmentData.shipment,
      location: location.value ? location.value : props.shipmentData.location,
      symbol: symbol.value ? symbol.value : props.shipmentData.symbol,
      shippingCost: shippingCost.value
        ? shippingCostAmount.value
        : props.shipmentData.shippingCost,
      units: units.value ? units.value : props.shipmentData.units,
      price: price.value ? priceAmount.value : props.shipmentData.price,
      vat: vat.value ? vatAmount.value : props.shipmentData.vat,
      insurance: insurance.value
        ? insuranceAmount.value
        : props.shipmentData.insurance,
      serviceCharge: serviceCharge.value
        ? serviceChargeAmount.value
        : props.shipmentData.serviceCharge,
      status: status.value ? status.value : props.shipmentData.status,
      progress: progress.value ? progress.value : props.shipmentData.progress,
      dueDate: dueDate.value ? dueDate.value : props.shipmentData.dueDate,
    };

    // console.log(payload);
    adminflow.dispatch("editShipment", payload);
    setTimeout(() => {
      emits("closeDialog");
    }, 2000);
  } else {
    console.log("Invalid Form");
  }
};

const countriess = computed(() => {
  return countries;
});

//symbol
const symbol = ref("");
const shipmentsymbol = computed({
  get() {
    return symbol.value ? symbol.value : props.shipmentData.symbol;
  },
  set(val) {
    symbol.value = val;
  },
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

console.log(props.shipmentData.fullName);

// todo getting the shipment data

const shipmentfullName = computed({
  get() {
    return fullName.value ? fullName.value : props.shipmentData.fullName;
  },
  set(val) {
    fullName.value = val;
  },
});

const email = ref("");
const shipmentEmail = computed({
  get() {
    return props.shipmentData.email;
  },
  set(val) {
    email.value = val;
  },
});

const phoneNumber = ref("");
const shipmentphoneNumber = computed({
  get() {
    return props.shipmentData.phoneNumber;
  },
  set(val) {
    phoneNumber.value = val;
  },
});

const address = ref("");
const shipmentAddress = computed({
  get() {
    return props.shipmentData.address;
  },
  set(val) {
    address.value = val;
  },
});

//shipment data
const status = ref("");
const shipmentStatus = computed({
  get() {
    return status.value ? status.value : props.shipmentData.status;
  },
  set(val) {
    status.value = val;
  },
});

const shipmentPhoto = ref(null);
const shipmentPhotoImage = ref(null);

const shipment = ref("");
const shipmentName = computed({
  get() {
    return props.shipmentData.shipment;
  },
  set(val) {
    shipment.value = val;
  },
});

const location = ref("");
const shipmentLocation = computed({
  get() {
    return props.shipmentData.location;
  },
  set(val) {
    location.value = val;
  },
});

//for shipping cost
const shippingCost = ref("");

const shipmentshippingCost = computed({
  get() {
    return props.shipmentData.shippingCost;
  },
  set(val) {
    shippingCost.value = val;
  },
});

const shippingCostAmount = computed({
  get() {
    let val = parseInt(shippingCost.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${shipmentsymbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === shipmentsymbol.value[0]) {
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
const shipmentUnits = computed({
  get() {
    return props.shipmentData.units;
  },
  set(val) {
    units.value = val;
  },
});

//shipment price
const price = ref("");

const shipmentPrice = computed({
  get() {
    return props.shipmentData.price;
  },
  set(val) {
    price.value = val;
  },
});

const priceAmount = computed({
  get() {
    let val = parseInt(price.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${shipmentsymbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === shipmentsymbol.value[0]) {
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

const shipmentVat = computed({
  get() {
    return props.shipmentData.vat;
  },
  set(val) {
    vat.value = val;
  },
});

const vatAmount = computed({
  get() {
    let val = parseInt(vat.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${shipmentsymbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === shipmentsymbol.value[0]) {
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

const shipmentInsurance = computed({
  get() {
    return props.shipmentData.insurance;
  },
  set(val) {
    insurance.value = val;
  },
});

const insuranceAmount = computed({
  get() {
    let val = parseInt(insurance.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${shipmentsymbol.value[0]} ${val}`;
    }
  },
  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === shipmentsymbol.value[0]) {
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

const shipmentserviceCharge = computed({
  get() {
    return props.shipmentData.serviceCharge;
  },
  set(val) {
    serviceCharge.value = val;
  },
});

const serviceChargeAmount = computed({
  get() {
    let val = parseInt(serviceCharge.value);
    val = val.toLocaleString();
    if (val === "NaN") {
      return "";
    } else {
      return `${shipmentsymbol.value[0]} ${val}`;
    }
  },

  async set(val) {
    // check if the first Character is ₦ and remove it
    if (val == null) {
      val = "";
    }
    const firstChar = val.charAt(0);
    if (firstChar === shipmentsymbol.value[0]) {
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

const shipmentdueDate = computed({
  get() {
    return props.shipmentData.dueDate;
  },
  set(val) {
    dueDate.value = val;
  },
});

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
