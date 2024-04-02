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
        <VCol cols="12" md="8">
          <VCard
            rounded="xl"
            class="transit"
            style="
              border-top: 4px solid #ea580c;
              box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            "
          >
            <!-- <VBtn color="primary" icon class="rounded-circle mt-15" loading location="top center" position="absolute">text</VBtn> -->

            <VCol cols="12">
              <VCardText>
                <p
                  class="text-accent text-h6 text-md-h5 text-left font-weight-bold"
                >
                  Monitor Your Parcel Here
                </p>
                <p
                  class="bg-primary"
                  style="border: 1px solid #ea580c; width: 70px; height: 4px"
                ></p>
              </VCardText>
              <VCardText class="my-0 py-0">
                <VTextField
                  v-model="parcelCode"
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
                  @click="showParcel"
                  variant="flat"
                  block
                  size="large"
                  >Proceed</VBtn
                >
              </VCardText>
            </VCol>

            <VCol cols="12" v-if="show">
              <v-card-text class="">
                <v-img
                  class="mx-auto text-center"
                  src="https://www.parcelmonitor.com/images/tracking-default-image.svg"
                  width="400"
                ></v-img>

                <p
                  class="text-grey-darken-1 text-center font-weight-light text-subtitle-1 text-md-h6 mt-3"
                >
                  The fastest way to trace your international parcel
                </p>
                <p class="text-grey text-center my-3">
                  Simply enter your tracking number above and hit proceed.
                  Parcel Monitor is the global knowledge-sharing platform
                  dedicated to e-commerce logistics for retailers, logistics
                  carriers, industry professionals, and end-consumers.
                </p>
              </v-card-text>
            </VCol>

            <VCol cols="12" class="transit" v-if="!show">
              <p
                class="text-accent mx-3 font-weight-medium text-md-left text-h6 text-md-h5 transit"
              >
                Tracking ID :
                <span class="font-weight-bold text-primary">523453</span>
              </p>
              <v-row class="mx-0 px-0 mb-2" justify="center" align="center">
                <VCol cols="12" md="6">
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
                <!-- <VDivider color="primary" thickness="3" class="mx-3 d-block d-md-none rounded"/> -->
                <VCol cols="12" md="6">
                  <p
                    class="text-left text-accent text-md-h6 font-weight-bold text-subtitle-1"
                  >
                    Customer Profile:
                  </p>
                  <VDivider thickness="0" class="my-2" />
                  <p
                    class="text-left text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Name:
                    <span class="font-weight-bold text-primary"
                      >Dallas Elle White Wells</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Email:
                    <span class="font-weight-bold text-primary"
                      >Tomlyons822@gmail.com
                    </span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Phone Number:
                    <span class="font-weight-bold text-primary"
                      >+1-(617)-294-9720</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left d-flex text-accent transit font-weight-light text-md-subtitle-1 text-subtitle-2"
                    style="gap: 3px"
                  >
                    Residential Address:
                    <span class="font-weight-bold text-primary">
                      1211 Bay St Morehead City, North Carolina. 28557</span
                    >
                  </p>
                </VCol>

                <VCol cols="12">
                  <p
                    class="text-left text-accent text-md-h6 font-weight-bold text-subtitle-1"
                  >
                    Parcel Data:
                  </p>
                  <VDivider thickness="0" class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Parcel:
                    <span class="font-weight-bold text-primary"
                      >Kia Sorento 2022</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left d-flex text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                    style="gap: 3px"
                  >
                    Current Location:
                    <span class="font-weight-bold text-primary"
                      >Incheon International Airport corporation: Incheon
                      Jung-gu Airport Rd.
                    </span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Shipping Cost:
                    <span class="font-weight-bold text-primary">
                      $3,500.00</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Unit : <span class="font-weight-bold text-primary"> 2</span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Price :
                    <span class="font-weight-bold text-primary"> $7,880</span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    VAT:
                    <span class="font-weight-bold text-primary">$950.00</span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Insurance:
                    <span class="font-weight-bold text-primary">
                      $1,200.00</span
                    >
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Service Charge:
                    <span class="font-weight-bold text-primary">$350.00</span>
                  </p>
                  <VDivider class="my-2" />
                  <p
                    class="text-left text-accent font-weight-light text-md-subtitle-1 text-subtitle-2"
                  >
                    Due Date:
                    <span class="font-weight-bold text-primary">
                      06/12/2025</span
                    >
                  </p>
                </VCol>
                <VCol cols="12">
                  <p
                    class="text-left text-center text-uppercase text-accent text-md-subtitle-1 font-weight-light text-subtitle-2"
                  >
                    Parcel Status: Ongoing
                    <!-- <v-progress-circular :indeterminate="loading" size="small" color="primary" model-value="50"></v-progress-circular> -->
                  </p>
                  <v-progress-linear
                    buffer-value="0"
                    color="primary"
                    :indeterminate="loading"
                    model-value="50"
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
          class="text-accent text-left font-weight-bold text-subtitle-1 text-md-h6"
        >
          Want to track your parcel? We’re here to help.
        </p>
        <p
          class="bg-primary mb-1"
          style="border: 1px solid #ea580c; width: 50px; height: 4px"
        ></p>
      </VCardText>
      <v-row class="mx-0 px-0">
        <VCol cols="12" md="6">
          <p
            class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left"
          >
            Parcel tracking for global carriers like China Post, DHL, Royal
            Mail, USPS and more
          </p>
          <p
            class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left"
          >
            Track your international parcels with Parcel Monitor’s global parcel
            tracking service. We offer real-time updates of your packages and
            support a wide range of global carriers, including China Post, DHL,
            Royal Mail and USPS. Whether you're mailing a package to a friend in
            another country or shipping a pallet of goods overseas, our tracking
            tool will keep you updated on its progress at every stage.
          </p>

          <p
            class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left"
          >
            Track your global TikTok, ASOS, eBay, Amazon and Shopify orders with
            Parcel Monitor
          </p>
          <p
            class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left"
          >
            With Parcel Monitor, you can follow your parcels every step of the
            way simply by entering your tracking numbers, regardless of where
            you purchase them from. No more waiting until your order arrives to
            find out what happened to it along the way! Our easy-to-use parcel
            tracking tool makes it easy to keep track of all your orders in one
            place. So whether you're an avid shopper on any of the
            aforementioned e-commerce platforms or you just like to order from
            time to time, Parcel Monitor is perfect for you.
          </p>
        </VCol>
        <VCol cols="12" md="6">
          <p
            class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left"
          >
            Enhance your online shopping experience with Parcel Monitor’s free
            parcel tracking tool
          </p>
          <p
            class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left"
          >
            Make purchases from your favorite e-commerce retailer or online
            marketplace without having to worry about your orders’ whereabouts.
            Regardless of the store you buy from or the carrier they use to ship
            your package, you can track your parcel as it travels around the
            world. With our parcel tracking service, you can keep track of the
            delivery’s progress and get peace of mind knowing that it is on the
            way to your doorstep.
          </p>

          <p
            class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left"
          >
            Parcel tracking in the UK, US, Philippines, Canada, China, Australia
            and the rest of the world
          </p>
          <p
            class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left"
          >
            Looking for a reliable way to track your international parcels? Look
            no further! Parcel Monitor’s parcel tracking tool provides
            up-to-date information on the whereabouts of your packages for free.
            Whether you're looking for a service that covers the United Kingdom,
            United States, Philippines, Canada, China, Australia or the rest of
            the world, we've got you covered. We work with some of the most
            reliable global carriers including DHL, UPS and Canada Post, so you
            can rest assured that your parcels are in good hands.
          </p>
        </VCol>
      </v-row>
    </main>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";

onBeforeMount(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});

const parcelCode = ref("");
const show = ref(false);

const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 5000);

const showParcel = () => {
  if (parcelCode.value == "123456") {
    show.value = false;
  } else {
    show.value = true;
  }
};
</script>
<style>
.transit {
  transition: all 1s linear;
}
</style>
