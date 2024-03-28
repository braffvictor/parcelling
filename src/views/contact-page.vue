<template>
  <div>
    <main class="bg-white pa-7 pa-md-14">
      <v-row class="mx-0 px-0">
        <VCol cols="12" md="6">
          <p
            class="font-weight-bold text-md-left text-h4 text text-md-h2 text-accent"
          >
            Have a question about Parcel Perform?
          </p>
          <p
            class="text-primary text-md-h2 text-h4 text-md-left font-weight-bold"
          >
            We're here to help.
          </p>
          <p class="my-4 font-weight-regular text-grey text-md-left">
            Parcel Perform is the leading Data & Delivery Experience platform
            that turns your e-commerce delivery process into a business
            advantage.
          </p>
          <p class="my-4 font-weight-regular text-grey text-md-left">
            Have questions about our platform, product features, or pricing?
            Tell us about your business and a product expert will contact you
            shortly.
          </p>
          <p class="my-4 font-weight-regular text-grey text-md-left">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>

          <div class="my-3 d-flex align-center" style="gap: 8px">
            <VIcon icon="fa-phone" size="large" color="primary"></VIcon>
            <div class="my-3 text-grey text-left">
              <p>tel:+14697189814</p>
            </div>
          </div>
          <div class="my-3 d-flex align-center" style="gap: 8px">
            <VIcon icon="fa-envelope" size="large" color="primary"></VIcon>
            <div class="my-3 text-grey text-left">
              <p>info@swiftdispatch.online</p>
            </div>
          </div>

          <p class="my-4 font-weight-regular text-grey text-md-left">
            <VIcon icon="fa-search" size="x-small" color="primary"></VIcon>
            Looking to track a single parcel?
            <VBtn color="primary" variant="tonal" size="x-small"
              >Track Parcel</VBtn
            >
          </p>
          <p class="my-4 font-weight-regular text-grey text-md-left">
            <VIcon icon="fa-handshake" size="x-small" color="primary"></VIcon>
            Trusted by top brands, marketplaces and carriers worldwide:
          </p>
          <v-row class="mx-0 px-0">
            <VCol cols="6" md="3" v-for="logo in logos" :key="logo.pic">
              <v-img :src="logo.pic"></v-img>
            </VCol>
          </v-row>
        </VCol>
        <VCol cols="12" md="6">
          <VCol cols="12">
            <p class="text-h4 text-accent font-weight-medium text-left">
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
                      class="text-accent"
                    />
                  </VCol>
                  <VCol cols="12" md="6">
                    <VTextField
                      v-model="lastName"
                      label="Last Name"
                      class="text-accent"
                      color="primary"
                      variant="underlined"
                      density="compact"
                    />
                  </VCol>
                  <VCol cols="12">
                    <VTextField
                      v-model="companyEmail"
                      label="Company Email"
                      class="text-accent"
                      color="primary"
                      variant="underlined"
                      density="compact"
                    />
                  </VCol>
                  <VCol cols="12" md="6">
                    <VTextField
                      v-model="companyName"
                      label="Company Name"
                      class="text-accent"
                      color="primary"
                      variant="underlined"
                      density="compact"
                    />
                  </VCol>
                  <VCol cols="12" md="6">
                    <VTextField
                      v-model="companyCountry"
                      label="Company Country"
                      class="text-accent"
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
                      class="text-accent"
                      variant="underlined"
                      density="compact"
                    />
                  </VCol>
                  <VCol cols="12">
                    <VTextField
                      v-model="help"
                      label="How can we help?"
                      color="primary"
                      class="text-accent"
                      variant="underlined"
                      density="compact"
                    />
                  </VCol>
                  <VCol cols="12">
                    <VCheckbox
                      label="By submitting this form, you agree to receive promotional and marketing communications from Parcel Perform, in accordance to our privacy and cookies policy."
                      v-model="terms"
                      color="primary"
                      class="text-accent text-left"
                      false-icon="fa-square"
                    ></VCheckbox>
                  </VCol>
                  <VCol cols="12">
                    <VBtn color="primary" variant="flat" block>Submit</VBtn>
                  </VCol>
                </v-row>
              </v-form>
            </div>
          </VCol>
        </VCol>
      </v-row>
    </main>

    <main class="bg-white">
      <v-row class="mx-0 px-0">
        <VCol cols="12">
          <p
            class="font-weight-bold text-md-h4 text-h6 text-accent text-md-left pa-5 pa-md-10"
          >
            How <span class="text-primary">Parcel Perform</span> is leading the
            industry
          </p>
        </VCol>
        <VCol cols="6" md="4" v-for="feat in features" :key="feat.icon">
          <div
            class="d-flex align-center justify-center text-center"
            style="gap: 7px"
          >
            <VIcon :icon="feat.icon" color="primary"></VIcon>
            <p class="text-md-h4 text-accent text-h5">{{ feat.title }}</p>
          </div>
          <p class="text-grey font-weight-regular my-5">
            {{ feat.text }}
          </p>
        </VCol>
      </v-row>
    </main>

    <main class="bg-white pa-7 pa-md-14">
      <v-row class="mx-0 px-0 bg-grey-lighten-3" align="center">
        <VCol
          cols="12"
          md="4"
          class=""
          v-for="(review, i) in reviews"
          :key="review.text"
        >
          <v-card variant="flat" class="bg-transparent">
            <div class="text-center mx-auto">
              <v-img
                :src="review.logo"
                width="150"
                class="text-center mx-auto my-2"
              ></v-img>
            </div>
            <p class="text-accent font-weight-regular">
              {{ review.text }}
            </p>
            <div class="text-center mx-auto rounded-circle">
              <v-img
                :src="review.pic"
                width="50"
                class="text-center mx-auto my-5 rounded-circle"
              ></v-img>
            </div>

            <p class="mt-3 text-accent text-center">{{ review.name }}</p>
            <p class="text-accent text-center">
              {{ review.title }}
            </p>
          </v-card>
          <VDivider thickness="2" class="mt-7 d-md-none" v-if="i+1 != reviews.length"/>
        </VCol>
      </v-row>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from "vue";

onBeforeMount(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});

// form data
const firstName = ref("");
const lastName = ref("");
const companyEmail = ref("");
const companyName = ref("");
const companyCountry = ref("");
const jobTitle = ref("");
const help = ref("");
const terms = ref(false);

const features = computed(() => {
  return [
    {
      icon: "fa-globe",
      title: "100m",
      text: "Global parcel tracking updates",
    },
    {
      icon: "fa-thumbs-up",
      title: "80m",
      text: "Consumer engagement touchpoints",
    },
    {
      icon: "fa-language",
      title: "36",
      text: "Most used languages supported",
    },
    {
      icon: "fa-truck",
      title: "1,045+",
      text: "Carrier partners integrated globally",
    },
    {
      icon: "fa-compass",
      title: "160+",
      text: "Countries covered by tracking",
    },
    {
      icon: "fa-calendar",
      title: "155+",
      text: "Shipping events standardized",
    },
  ];
});

const reviews = computed(() => {
  return [
    {
      logo: "https://images.ctfassets.net/s384oqk42kco/3pygPzzoqW8YVtpCivxcHk/58b77be53c8260ddc7f45727dccd8240/expondo.svg",
      image:
        "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F5lVasDFFPSBakliefyKF79%2Fa88fa6166d994233eda9b7e9368bd1e5%2Fpp-customer-expondo-1.jpg%3Fw%3D700%26fm%3Dpng&w=1920&q=75",
      pic: "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F7vO0hnMRlGOVb7KFrBLZBF%2F76f4d86b1fdfd2d8c3f174135b5e0a5f%2FNespresso_Davide.webp%3Fw%3D78%26fm%3Dpng&w=1920&q=75",
      name: "Patrick Stan",
      title: "Global Delivery Services Manager at Expondo",
      text: "Our Customer Service and Ops team has full visibility into the parcel journey. We can easily filter shipments based on different parameters. The various platform functionalities have helped us respond efficiently to customer queries",
    },
    {
      logo: "https://images.ctfassets.net/s384oqk42kco/4Yan3kawjcYmKY81e0iyTB/1f117ab4565b3c8728c2a48c43887b16/website_logo.png",
      image:
        "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F5gt6qQqHqGS0K7xk4CAuLl%2F88458b3d78ace100b17c614c16d88932%2Fpp-customer-bikesonline-3.jpg%3Fw%3D700%26fm%3Dpng&w=1920&q=75",
      pic: "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F4DjvEtBzoRw6BXifYDXYUG%2F7c23d06fe18400ced5ac56f92388cf5d%2Fimage_2.png%3Fw%3D78%26fm%3Dpng&w=1920&q=75",
      name: "William Carlson",
      title: "Director of Operation, Bikes Online, US",
      text: "Tracking assistance is one of the top reasons for customer queries. In some markets, we have seen a 45% decrease of such calls. Customers also revsit the track & trace webpge 4-6 times during the delivery journey, proving it is an essential feaure to boost customer experience",
    },
    {
      logo: "https://images.ctfassets.net/s384oqk42kco/6QCdXvVrphcDJlpZcq0ob8/069fb47dc95946dd7ca975e883cc23f0/byrd_technologies_1_1x.webp",
      image:
        "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F5GKZ2kjIifQf9j4ndA0iF3%2F9658f6d28aaae9b2e9f9c80b8abd93f3%2Fbyrd_testimonial_imagex.webp%3Fw%3D700%26fm%3Dpng&w=1920&q=75",
      pic: "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F2rcXrPJHMjb3yKwuePXJDD%2Fbe4ec2207144eb10d9464dda157cfe8d%2Fpetra_image_byrd.webp%3Fw%3D78%26fm%3Dpng&w=1920&q=75",
      name: "Petra Dobrocka",
      title: "CCO of byrd",
      text: `As Europe's leading e-commerce fulfillment platform, we work with multiple regional carrires. We wanted a partner that could handle the highest degree of data complexity to help our customers improve operational efficiency and elevate the delivery experience`,
    },
  ];
});

const logos = computed(() => {
  return [
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/Nespresso.png?width=216&height=45&name=Nespresso.png",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/zalando.png?width=209&height=45&name=zalando.png",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/expondo%201.webp?width=189&height=45&name=expondo%201.webp",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/shopify.png?width=159&height=45&name=shopify.png",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/Emma-logo.png?width=129&height=45&name=Emma-logo.png",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/bikesonline.png?width=146&height=45&name=bikesonline.png",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/babymarkt-logo.png?width=162&height=45&name=babymarkt-logo.png",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/geodis%20logo.webp?width=117&height=45&name=geodis%20logo.webp",
    },
    {
      pic: "https://resources.parcelperform.com/hs-fs/hubfs/byrd%20logo.webp?width=101&height=45&name=byrd%20logo.webp",
    },
  ];
});
</script>
<style></style>
