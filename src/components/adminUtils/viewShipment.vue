<template>
  <div>
    <VCard color="accent">
      <VCardText>
        <div class="d-flex align-center text-accent-text-subtitle-1 text-md-h6">
          <p>View Shipment</p>
          <VSpacer />
          <p>
            <VIcon
              color="primary"
              size="small"
              class="mx-2"
              icon="fa-print"
            ></VIcon>
          </p>
          <p @click.self="$emit('closeDialog')">
            <VIcon
              color="primary"
              size="large"
              icon="fa-close"
              @click.self="$emit('closeDialog')"
            ></VIcon>
          </p>
        </div>

        <!-- divider -->
        <div
          style="height: 2px; width: 100%"
          class="bg-primary rounded-xl my-2"
        ></div>

        <VCol cols="12" class="transit">
          <v-row class="mx-0 px-0 mb-2" justify="center" align="center">
            <!-- <VDivider color="white" thickness="3" class="mx-3 d-block d-md-none rounded"/> -->
            <VCol cols="12">
              <p
                class="text-left text-primary text-md-h6 font-weight-bold text-subtitle-1"
              >
                Customer Profile:
              </p>
              <VDivider thickness="0" class="my-2" />
              <VCol cols="12">
                <v-card
                  variant="flat"
                  color="bg-transparent"
                  rounded="lg"
                  class="bg-transparent transit mx-auto text-center"
                >
                  <v-img
                    :src="shipment.passportPhoto"
                    width="100"
                    height="100"
                    cover
                    class="rounded-circle"
                  >
                  </v-img>
                </v-card>
              </VCol>
              <p
                class="text-left text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Name:
                <span class="font-weight-bold text-white">{{
                  shipment.fullName
                }}</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Email:
                <span class="font-weight-bold text-white"
                  >{{ shipment.email }}
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Phone Number:
                <span class="font-weight-bold text-white">
                  {{ shipment.phoneNumber }}
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left d-flex text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                style="gap: 3px"
              >
                Residential Address:
                <span class="font-weight-bold text-white">
                  {{ shipment.address }}</span
                >
              </p>
            </VCol>

            <VCol cols="12">
              <p
                class="text-left text-primary text-md-h6 font-weight-bold text-subtitle-1"
              >
                Parcel Data:
              </p>
              <VDivider thickness="0" class="my-2" />
              <p class="text-primary font-weight-medium text-md-left transit">
                Tracking ID:
                <span class="font-weight-bold text-white">{{
                  props.shipment.trackingCode
                }}</span>
              </p>
              <VCol cols="12">
                <v-card
                  variant="flat"
                  color="bg-transparent"
                  rounded="lg"
                  class="bg-transparent transit mx-auto text-center"
                >
                  <v-img
                    :src="shipment.shipmentPhoto"
                    class="mx-auto text-center rounded-sm"
                    width="300"
                    height="300"
                    cover
                  >
                  </v-img>
                </v-card>
              </VCol>
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Shipment:
                <span class="font-weight-bold text-white">
                  {{ shipment.shipment }}
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left d-flex text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
                style="gap: 3px"
              >
                Current Location:
                <span class="font-weight-bold text-white"
                  >{{ shipment.location }}
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Shipping Cost:
                <span class="font-weight-bold text-white"
                  >{{ shipment.shippingCost }}
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Unit :
                <span class="font-weight-bold text-white">
                  {{ shipment.units }}</span
                >
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Price :
                <span class="font-weight-bold text-white">
                  {{ shipment.price }}
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                VAT:
                <span class="font-weight-bold text-white">
                  {{ shipment.vat }}</span
                >
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Insurance:
                <span class="font-weight-bold text-white">
                  {{ shipment.insurance }}</span
                >
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Service Charge:
                <span class="font-weight-bold text-white">{{
                  shipment.serviceCharge
                }}</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Due Date:
                <span class="font-weight-bold text-white">
                  {{ shipment.dueDate }}</span
                >
              </p>
            </VCol>
            <VCol cols="12">
              <p
                class="text-left text-center text-uppercase text-primary text-md-subtitle-1 font-weight-light text-subtitle-2"
              >
                Parcel Status: {{ shipment.status }}
                <!-- <v-progress-circular :indeterminate="loading" size="small" color="white" model-value="50"></v-progress-circular> -->
              </p>
              <v-progress-linear
                buffer-value="0"
                color="primary"
                model-value="50"
                rounded="lg"
                striped
                height="7"
              ></v-progress-linear>
              <!-- <p class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2">
                                  Phase: <span class="font-weight-bold text-uppercase text-white">Ongoing
                                      <v-progress-circular model-value="20"></v-progress-circular></span>
                              </p> -->
            </VCol>
          </v-row>
        </VCol>
      </VCardText>
    </VCard>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// const emits = defineEmits(["closeDialog"]);

const props = defineProps({
  shipment: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>
<style></style>
