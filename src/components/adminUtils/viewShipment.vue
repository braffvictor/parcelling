<template>
  <div>
    <VCard color="accent">
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

        <VCol cols="12" class="transit">
          <p
            class="text-white mx-3 font-weight-medium text-md-left text-h6 text-md-h5 transit"
          >
            Tracking ID :
            <span class="font-weight-bold text-white">523453</span>
          </p>
          <v-row class="mx-0 px-0 mb-2" justify="center" align="center">
            <VCol cols="10">
              <v-card
                variant="outlined"
                color="grey"
                rounded="lg"
                class="bg-transparent transit mx-auto text-center"
              >
                <v-img
                  src="https://swiftdispatch.online/bg/home1.png"
                  class="mx-auto text-center"
                >
                </v-img>
              </v-card>
            </VCol>
            <!-- <VDivider color="white" thickness="3" class="mx-3 d-block d-md-none rounded"/> -->
            <VCol cols="12">
              <p
                class="text-left text-primary text-md-h6 font-weight-bold text-subtitle-1"
              >
                Customer Profile:
              </p>
              <VDivider thickness="0" class="my-2" />
              <p
                class="text-left text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Name:
                <span class="font-weight-bold text-white"
                  >Dallas Elle White Wells</span
                >
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Email:
                <span class="font-weight-bold text-white"
                  >Tomlyons822@gmail.com
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Phone Number:
                <span class="font-weight-bold text-white"
                  >+1-(617)-294-9720</span
                >
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left d-flex text-primary transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                style="gap: 3px"
              >
                Residential Address:
                <span class="font-weight-bold text-white">
                  1211 Bay St Morehead City, North Carolina. 28557</span
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
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Parcel:
                <span class="font-weight-bold text-white"
                  >Kia Sorento 2022</span
                >
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left d-flex text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
                style="gap: 3px"
              >
                Current Location:
                <span class="font-weight-bold text-white"
                  >Incheon International Airport corporation: Incheon Jung-gu
                  Airport Rd.
                </span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Shipping Cost:
                <span class="font-weight-bold text-white"> $3,500.00</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Unit : <span class="font-weight-bold text-white"> 2</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Price :
                <span class="font-weight-bold text-white"> $7,880</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                VAT:
                <span class="font-weight-bold text-white">$950.00</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Insurance:
                <span class="font-weight-bold text-white"> $1,200.00</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Service Charge:
                <span class="font-weight-bold text-white">$350.00</span>
              </p>
              <VDivider class="my-2" />
              <p
                class="text-left text-primary font-weight-light text-md-subtitle-1 text-subtitle-2"
              >
                Due Date:
                <span class="font-weight-bold text-white"> 06/12/2025</span>
              </p>
            </VCol>
            <VCol cols="12">
              <p
                class="text-left text-center text-uppercase text-primary text-md-subtitle-1 font-weight-light text-subtitle-2"
              >
                Parcel Status: Ongoing
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
import { defineEmits } from "vue";
const emits = defineEmits(["closeDialog"]);
</script>
<style></style>
