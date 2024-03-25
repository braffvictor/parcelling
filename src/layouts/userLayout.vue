<template>
  <div>
    <!-- app bar -->
    <v-app-bar
      color="accent"
      class="align-center"
      :height="$vuetify.display.mdAndDown ? '67' : '75'"
      flat
    >
      <div class="w-25 mx-7">
        <v-img
          src="https://www.parcelperform.com/images/parcel-perform-logo.svg"
          min-width="160"
          max-width="200"
          @click="$router.push('/')"
          class="cursor-pointer"
        ></v-img>
      </div>

      <VSpacer />
      <div class="">
        <VToolbar height="90" class="bg-transparent">
          <VToolbarItems class="px-2 d-none d-md-block bg-transparent">
            <VBtn
              :to="link.to"
              color="white"
              variant="text"
              class="pt-3"
              :style="`border-bottom: ${
                route.path == link.to ? '2px solid #ea580c' : ''
              }; height: 92%`"
              size="large"
              v-for="link in links"
              :key="link.name"
              >{{ link.name }}</VBtn
            >
          </VToolbarItems>
        </VToolbar>
        <!-- <VBtn
          color="white"
          variant="text"
          size="large"
          v-for="link in links"
          :key="link.name"
          >{{ link.name }}</VBtn
          > -->
      </div>

      <div class="d-block d-md-none mx-4">
        <VIcon icon="fa-bars" size="small" @click="drawer = !drawer"></VIcon>
      </div>
    </v-app-bar>

    <!-- navigation drawer -->
    <VNavigationDrawer
      temporary
      v-model="drawer"
      color="white"
      tile
      class="pa-0 py-5"
      location="right"
      floating
    >
      <VCard
        v-for="link in links"
        :key="link.name"
        variant="flat"
        tile
        :to="link.to"
        height="50"
        class="d-flex pa-3 w-100 align-center text-shades-white"
        :color="route.path == link.to ? 'accent' : 'transparent'"
        @click="() => {}"
      >
        <div class="mx-3">
          <v-img :src="link.img" min-width="30"></v-img>
        </div>
        <!-- <VSpacer /> -->
        <div
          class="font-weight-medium"
          :class="route.path == link.to ? 'text-white' : 'text-accent'"
        >
          {{ link.name }}
        </div>
      </VCard>
    </VNavigationDrawer>

    <v-main class="bg-accent">
      <Transition duration="1000">
        <slot></slot>
      </Transition>
    </v-main>

    <!-- somewhat footer form component -->
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

    <!-- now the main footer -->
    <VFooter height="auto" class="bg-accent">
      <v-row class="mx-0 px-0 bgfooter" justify="center" align="start">
        <VCol cols="12" md="6">
          <div class="w-100">
            <v-img
              src="https://www.parcelperform.com/images/parcel-perform-logo.svg"
              min-width="180"
              max-width="220"
              class="text-center mx-auto text-md-left mx-md-0"
            ></v-img>
            <p
              class="my-0 py-0 text-white text-center text-md-left font-weight-bold text-h5"
            >
              The leading <span class="text-primary">Delivery</span> Experience
              Platform for businesses worldwide.
            </p>
          </div>
        </VCol>
        <VCol cols="12" md="6" class="mt-3">
          <p
            class="text-center text-md-left text-h5 text-white font-weight-bold"
          >
            JOIN OUR MONTHLY NEWSLETTERS
          </p>
          <VCol cols="12" class="ma-0 mt-4 pa-0">
            <VTextField
              v-model="news"
              label="Enter Your Email"
              variant="solo"
              color="primary"
              class="text-white"
              density="compact"
            />
          </VCol>
          <VCol cols="12" class="ma-0 pa-0">
            <VCheckbox
              label="I agree to receive promotional messages from parcel perform in accordance with its privacy and cookies policy"
              v-model="newsCheck"
              color="primary"
              class="text-white text-left"
              false-icon="fa-square"
            ></VCheckbox>
          </VCol>
          <VCol cols="12" class="ma-0 pa-0">
            <VBtn color="primary" variant="flat" block class="text-uppercase"
              >Subscribe</VBtn
            >
          </VCol>
        </VCol>
        <VDivider thickness="1" />
        <VCol cols="12">
          <v-row class="mx-0 px-0" justify="center">
            <VCol cols="6" md="2" v-for="link in links" :key="link.name">
              <VBtn
                :to="link.to"
                :color="route.path == link.to ? 'primary' : 'white'"
                variant="text"
                block
                size="large"
                >{{ link.name }}</VBtn
              >
            </VCol>
          </v-row>
        </VCol>
        <VDivider thickness="1" />
        <VCol cols="12">
          <p
            class="text-center text-md-left font-weight-bold my-4 text-white text-uppercase"
          >
            we are global, meet our team
          </p>
          <VRow class="mx-0 px-0" justify="start" align="center">
            <v-col
              cols="6"
              md="3"
              v-for="location in locations"
              :key="location.country"
            >
              <section class="d-flex align-center" style="gap: 3px">
                <VIcon
                  icon="fa-map-marker"
                  color="primary"
                  size="x-small"
                ></VIcon>
                <div>{{ location.country }}</div>
              </section>
              <p class="text-white text-left font-weight-regular">
                {{ location.street }}
              </p>
            </v-col>
          </VRow>
        </VCol>

        <VCol cols="12">
          <p class="text-grey text-center text-caption">
            © 2023 Parcel Perform Pte Ltd. All Rights Reserved
            <span
              ><VBtn
                color="primary"
                variant="text"
                size="x-small"
                class="text-caption"
                >Term of Use</VBtn
              ></span
            >
            <span
              ><VBtn
                color="primary"
                variant="text"
                size="x-small"
                class="text-caption"
                >Privacy Policy</VBtn
              ></span
            >
          </p>
        </VCol>
      </v-row>
    </VFooter>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const drawer = ref(false);

// form data
const firstName = ref("");
const lastName = ref("");
const companyEmail = ref("");
const companyName = ref("");
const companyCountry = ref("");
const jobTitle = ref("");
const help = ref("");
const terms = ref(false);

// newsletters
const news = ref("");
const newsCheck = ref(false);

const links = computed(() => {
  return [
    {
      name: "Track",
      to: "/track",
      icon: "fa-thumb-tack",
      img: "https://images.ctfassets.net/s384oqk42kco/2B9LKeSGBq3X38oUJ4xOuq/24d171417d3c947469e47d8206cf8ec1/Logomark_dark.svg",
    },
    {
      name: "Product",
      to: "/product",
      icon: "fa-code-fork",
      img: "https://images.ctfassets.net/s384oqk42kco/4720QDerdyC2BU6Wir4oxE/5e613181f0f4004be0c77768df0ae646/Group-1.svg",
    },
    {
      name: "Carrier",
      to: "/carrier",
      icon: "fa-truck",
      img: "https://images.ctfassets.net/s384oqk42kco/RCUPqmIJf8Ky16CIWKSPL/a48c4d5d1526deb217fad0e7eaabcd33/Carrier_Integrations.svg",
    },
    {
      name: "Rate",
      to: "/rate",
      icon: "fa-star",
      img: "https://images.ctfassets.net/s384oqk42kco/KsyD6QAVBKfzJL4EaiwDk/a51d4ac6ac583cdff709978ef8ab234a/Rate.svg",
    },
    {
      name: "Customer Service",
      to: "/customer-service",
      icon: "fa-phone",
      img: "https://images.ctfassets.net/s384oqk42kco/5r44zBhhPTz8hLOYIdC12i/71c41b200155f6fd8f8b3341a31cebe7/Customer_service_navigation_icon.svg",
    },
    {
      name: "About Us",
      to: "/about",
      icon: "fa-globe fa-spin ",
      img: "https://images.ctfassets.net/s384oqk42kco/1X8dbPpmzYTr5KNSPmEsaW/25bc40e34fae91f567c6d0f114d1931a/Group_4082.svg",
    },
  ];
});

const locations = computed(() => {
  return [
    {
      country: "Singapore",
      street: "138 Cecil Street, Singapore 069538",
    },
    {
      country: "Germany",
      street: "Brunnenstrasse 194, 10119 Berlin",
    },
    {
      country: "Vietnam",
      street: "71 Hoang Van Thai Street, Tan Phu, District 7, HCMC",
    },
    {
      country: "United States",
      street: "411 W Monroe St, Austin, TX 78704",
    },
    {
      country: "Netherlands",
      street: "Prinsengracht 769, 1017 JZ Amsterdam",
    },
  ];
});
</script>

<style>
.footer-bg {
  background-image: url(https://images.ctfassets.net/s384oqk42kco/2Qb6RS1DZeUzU4sQPu2UUk/fa2f03dbde179bb8754f1e01527dfea8/leads_form_background_image.webp);
  background-position: center;
  background-size: cover;
}
.bgfooter {
  background-image: url(https://www.parcelmonitor.com/_next/image?url=%2Fimages%2Ffooter-background.svg&w=1920&q=75);
  background-position: right;
  background-size: cover;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
