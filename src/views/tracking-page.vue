<template>
  <div>
    <main class="bg-accent">
      <div class="pa-5 pa-md-8">
        <p
          class="text-white text-capitalize text-subtitle-1 text-md-h6 font-weight-medium text-center"
        >
          <VIcon color="primary" icon="fa-thumb-tack" size="small"></VIcon>
          Redefined tracking, smarter control: Unified visibility for all
          shipments from a single platform.
        </p>
      </div>
    </main>

    <main class="bg-white pa-2 py-8 pa-md-12">
      <v-row class="mx-0 px-0" justify="center">
        <VCol cols="12" md="7">
          <VCard
            variant="outlined"
            rounded="lg"
            class="transit"
            color="grey-lighten-3"
            :disabled="disableCard"
            style="
              box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
              border-top: 3px solid #ea580c;
            "
          >
            <VBtn
              color="primary"
              style="z-index: 100000"
              class="rounded-circle mt-15"
              v-if="btn"
              icon
              :loading="btn"
              location="top center"
              position="absolute"
            ></VBtn>

            <VCol cols="12">
              <VCardText>
                <p
                  class="text-accent text-h6 text-md-h5 text-left font-weight-bold"
                >
                  Monitor Your Shipment Here
                </p>
                <p
                  class="bg-primary"
                  style="border: 1px solid #ea580c; width: 70px; height: 4px"
                ></p>
              </VCardText>

              <VCardText class="my-0 py-0">
                <VTextField
                  v-model="searchCode"
                  label="Enter Your Tracking ID"
                  class="text-accent"
                  type="tel"
                  color="primary"
                  variant="outlined"
                />
              </VCardText>
              <VCardText class="my-0 py-0">
                <VBtn
                  color="primary"
                  @click.prevent="getShipment"
                  variant="flat"
                  block
                  :disabled="updateBtn"
                  type="submit"
                  size="large"
                  >Proceed</VBtn
                >
              </VCardText>
            </VCol>

            <VCol cols="12" v-if="!show">
              <v-card-text class="">
                <v-img
                  class="mx-auto text-center"
                  src="https://www.parcelmonitor.com/images/tracking-default-image.svg"
                  width="400"
                ></v-img>

                <p
                  class="text-grey-darken-1 text-center font-weight-light text-subtitle-1 text-md-h6 mt-3"
                >
                  The fastest way to trace your international shipments
                </p>
                <p class="text-grey text-center my-3">
                  Simply enter your tracking number above and hit proceed.
                  Parcel Monitor is the global knowledge-sharing platform
                  dedicated to e-commerce logistics for retailers, logistics
                  carriers, industry professionals, and end-consumers.
                </p>
              </v-card-text>
            </VCol>

            <VCol cols="12" class="transit" v-if="show">
              <p
                class="text-accent mx-3 font-weight-medium text-md-left text-h6 text-md-h5 transit"
              >
                Tracking ID :
                <span class="font-weight-bold text-primary">{{
                  shipment && shipment.trackingCode
                }}</span>
              </p>
              <v-row class="mx-0 px-0 mb-2" justify="center" align="center">
                <!-- <VDivider color="primary" thickness="3" class="mx-3 d-block d-md-none rounded"/> -->
                <VCol cols="12">
                  <p
                    class="text-md-left text-center text-accent text-md-h6 font-weight-bold text-subtitle-1"
                  >
                    Customer Profile:
                  </p>
                  <VCol cols="12">
                    <v-card
                      variant="flat"
                      color="bg-transparent"
                      rounded="lg"
                      class="bg-transparent transit mx-auto text-center"
                    >
                      <v-img
                        :src="shipment && shipment.passportPhoto"
                        width="100"
                        height="100"
                        cover
                        class="rounded-circle text-center text-md-left mx-auto mx-md-0"
                      >
                      </v-img>
                    </v-card>
                  </VCol>
                  <VDivider thickness="0" class="my-2" />
                  <p
                    class="text-left text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Name:
                    <span class="font-weight-bold text-primary">{{
                      shipment && shipment.fullName
                    }}</span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Email:
                    <span class="font-weight-bold text-primary"
                      >{{ shipment && shipment.email }}
                    </span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Phone Number:
                    <span class="font-weight-bold text-primary">{{
                      shipment && shipment.phoneNumber
                    }}</span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left d-flex text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                    style="gap: 3px"
                  >
                    Residential Address:
                    <span class="font-weight-bold text-primary">
                      {{ shipment && shipment.address }}</span
                    >
                  </p>
                </VCol>

                <VCol cols="12">
                  <p
                    class="text-md-left text-center text-accent text-md-h6 font-weight-bold text-subtitle-1"
                  >
                    Shipment Data:
                  </p>
                  <VCol cols="12" md="6">
                    <v-card
                      variant="outlined"
                      color="grey"
                      rounded="lg"
                      class="bg-transparent transit mx-auto text-center"
                    >
                      <v-img
                        :src="shipment && shipment.shipmentPhoto"
                        class="mx-auto text-center"
                      >
                      </v-img>
                    </v-card>
                  </VCol>
                  <VDivider thickness="0" class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Shipment:
                    <span class="font-weight-bold text-primary">{{
                      shipment && shipment.shipment
                    }}</span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left d-flex text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                    style="gap: 3px"
                  >
                    Current Location:
                    <span class="font-weight-bold text-primary">
                      {{ shipment && shipment.location }}
                    </span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Shipping Cost:
                    <span class="font-weight-bold text-primary">
                      {{ shipment && shipment.shippingCost }}.00</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Units:
                    <span class="font-weight-bold text-primary">
                      {{ shipment && shipment.units }}</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Price:
                    <span class="font-weight-bold text-primary">
                      {{ shipment && shipment.price }}.00
                    </span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    VAT:
                    <span class="font-weight-bold text-primary"
                      >{{ shipment && shipment.vat }}.00</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Insurance:
                    <span class="font-weight-bold text-primary">
                      {{ shipment && shipment.insurance }}.00</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Service Charge:
                    <span class="font-weight-bold text-primary"
                      >{{ shipment && shipment.serviceCharge }}.00</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Due Date:
                    <span class="font-weight-bold text-primary">
                      {{ shipment && shipment.dueDate }}</span
                    >
                  </p>
                </VCol>
                <VCol cols="12">
                  <p
                    class="text-left text-center text-uppercase text-accent text-md-subtitle-1 font-weight-light text-subtitle-2"
                  >
                    Shipments Status: {{ textProgress() }} ({{
                      checkProgress(shipment && shipment.status)
                    }}%)
                    <!-- <v-progress-circular :indeterminate="loading" size="small" color="primary" model-value="50"></v-progress-circular> -->
                  </p>
                  <v-progress-linear
                    buffer-value="0"
                    :color="colorProgress(shipment && shipment.status)"
                    :model-value="checkProgress(shipment && shipment.status)"
                    rounded="lg"
                    striped
                    height="7"
                  ></v-progress-linear>
                  <!-- <p class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2">
                                        Phase: <span class="font-weight-bold text-uppercase text-primary">Ongoing
                                            <v-progress-circular model-value="20"></v-progress-circular></span>
                                    </p> -->
                </VCol>
              </v-row>
            </VCol>
          </VCard>
        </VCol>
      </v-row>
    </main>

    <main class="bg-grey-lighten-5 pa-4 pa-md-8">
      <VCardText class="my-0 py-0">
        <p
          class="text-accent text-center font-weight-bold text-subtitle-1 text-md-h6"
        >
          Want to track your Shipment? We’re here to help.
        </p>
        <p
          class="bg-primary mb-1 text-center mx-auto"
          style="border: 1px solid #ea580c; width: 50px; height: 4px"
        ></p>
      </VCardText>
      <v-row class="mx-0 px-0" justify="center">
        <VCol cols="12" md="6">
          <p
            class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left"
          >
            Shipment tracking for global carriers like China Post, DHL, Royal
            Mail, USPS and more
          </p>
          <p
            class="text-accent my-4 text-md-subtitle-2 font-weight-thin text-md-left"
          >
            Track your international Shipment with Shipment Monitor’s global
            Shipment tracking service. We offer real-time updates of your
            packages and support a wide range of global carriers, including
            China Post, DHL, Royal Mail and USPS. Whether you're mailing a
            package to a friend in another country or shipping a pallet of goods
            overseas, our tracking tool will keep you updated on its progress at
            every stage.
          </p>
        </VCol>
      </v-row>
    </main>
  </div>
</template>
<script setup>
import adminflow from "@/store/adminflow";
import userflow from "@/store/userflow";
import { ref, onBeforeMount, onMounted, watch } from "vue";

const updateBtn = ref(true);
const searchCode = ref("");

watch(searchCode, () => {
  if (searchCode.value != "") {
    updateBtn.value = false;
  } else {
    updateBtn.value = true;
  }
});

onBeforeMount(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});

onMounted(() => {
  adminflow.dispatch("initAllShipments");
});

const btn = ref(false);
const disableCard = ref(false);
const shipment = ref(null);

const show = ref(false);

function getShipment() {
  const trackingCode = adminflow.state.shipments.find((shipment) => {
    return shipment.trackingCode == searchCode.value;
  });

  if (searchCode.value == (trackingCode && trackingCode.trackingCode)) {
    btn.value = true;
    disableCard.value = true;
    setTimeout(() => {
      shipment.value = trackingCode;
      show.value = true;
      btn.value = false;
      disableCard.value = false;

      userflow.dispatch("initAlert", {
        type: "success",
        message: `${shipment.value.fullName} Shipment Found For This Tracking ID "${searchCode.value}" `,
        is: true,
        timer: 7000,
        close: true,
      });
      searchCode.value = "";
    }, 3000);
  } else {
    btn.value = true;
    disableCard.value = true;
    setTimeout(() => {
      show.value = false;
      btn.value = false;
      disableCard.value = false;

      userflow.dispatch("initAlert", {
        type: "error",
        message: `No Shipment Found For This Tracking ID ${
          searchCode.value == "" ? null : `"${searchCode.value}"`
        }`,
        is: true,
        timer: 9000,
      });
      searchCode.value = "";
    }, 3000);
  }
}

function checkProgress(status) {
  if (status == "Completed") {
    return "100";
  } else if (status == "Closed") {
    return "0";
  } else {
    return shipment.value && shipment.value.progress;
  }
}

function colorProgress(status) {
  if (
    status == "Completed" ||
    (shipment.value && shipment.value.progress) == "100"
  ) {
    return "green";
  } else if (
    status == "Closed" ||
    (shipment.value && shipment.value.progress) == "0"
  ) {
    return "red";
  } else {
    return "primary";
  }
}

function textProgress() {
  if ((shipment.value && shipment.value.progress) == "100") {
    return "Completed";
  } else if ((shipment.value && shipment.value.progress) == "0") {
    return "Closed";
  } else {
    return shipment.value && shipment.value.status;
  }
}
</script>
<style>
.transit {
  transition: all 1s linear;
}
</style>
