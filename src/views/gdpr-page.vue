<template>
  <div>
    <VRow
      class="mx-0 bg-accent"
      align="center"
      :style="`padding: ${
        $vuetify.display.mdAndDown ? '3.3em 1em' : '5em 2em'
      }`"
      justify="center"
    >
      <VCol cols="12" md="6">
        <p
          class="text-h4 text-md-h2 text-white font-weight-bold text-center text-md-left"
        >
          Our Data Privacy Commitment
        </p>
        <p
          class="text-body-2 my-4 text-grey text-center text-md-left font-weight-light"
        >
          Data protection is non-negotiable at Parcel Perform. We are a EU-GDPR
          compliant company, and meet all legal requirements stipulated by law
          to protect your data throughout the business process. Parcel Perform
          is ISO 27001 certified by TÜV SÜD PSB Pte Ltd.
        </p>
      </VCol>
      <VCol cols="12" md="6">
        <VCard variant="flat" color="transparent" class="">
          <v-img
            src="https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2FUS8u5QzXmB3lWKKnksZjH%2Ff3b1f8594191ea3d1921f42fab1c6296%2FGDPR_new_image.svg%3Fw%3D743&w=1920&q=75"
            cover
          ></v-img>
        </VCard>
      </VCol>
    </VRow>

    <v-row
      class="mx-0 bg-white"
      align="start"
      :style="`padding: ${
        $vuetify.display.mdAndDown ? '3em 1em' : '5.5em 2em'
      }`"
      justify="center"
    >
      <VCol cols="12" md="3">
        <p
          class="text-accent font-weight-bold text-h5 text-center text-md-left"
        >
          Make customer trust and confidence one of your biggest business
          advantages.
        </p>
      </VCol>
      <VCol cols="6" md="3" v-for="award in awards" :key="award.img">
        <v-img
          :src="award.img"
          min-width="100"
          max-width="90"
          class="mx-auto text-center text-md-left mx-md-0"
        ></v-img>
        <p
          class="text-subtitle-1 text-accent my-3 font-weight-regular text-center text-md-left"
        >
          {{ award.text }}
        </p>
      </VCol>
    </v-row>

    <main class="bg-grey-lighten-3 pa-7 pa-md-15">
      <v-row class="mx-0 px-0" justify="center" align="center">
        <VCol cols="12">
          <p class="my-4 text-accent text-h5 text-md-h3 text-center">
            How we secure your parcel data
          </p>
        </VCol>
        <VCol cols="12" md="4" v-for="method in methods" :key="method.text">
          <VCard
            variant="outlined"
            elevation="0"
            class="pa-3 pa-md-5 bg-white"
            color="grey-lighten-1"
            min-height="300"
            rounded="lg"
          >
            <v-img
              :src="method.img"
              width="40"
              class="mx-auto text-center mx-md-0 text-md-left"
            ></v-img>
            <p
              class="text-accent mt-2 text-md-left font-weight-bold text-h6 text-md-h5"
            >
              {{ method.title }}
            </p>
            <p
              class="my-2 text-grey text-md-left text-regular text-subtitle-2 text-md-subtitle-1"
            >
              {{ method.text }}
            </p>
          </VCard>
        </VCol>
        <VDivider thickness="2" class="mx-4 mb-6 mt-7 mt-md-14" />

        <VCol cols="12">
          <p class="text-accent font-weight-medium text-h5 text-md-h3">
            Keeping data privacy at the forefront
          </p>
        </VCol>

        <VCol cols="12" md="4" v-for="privacy in privacies" :key="privacy.img">
          <VCard
            variant="flat"
            elevation="0"
            class="pa-3 pa-md-5 bg-transparent"
            rounded="lg"
          >
            <v-img
              :src="privacy.img"
              width="40"
              class="mx-auto text-center mx-md-0 text-md-left"
            ></v-img>
            <p
              class="text-accent mt-2 text-md-left font-weight-bold text-h6 text-md-h5"
            >
              {{ privacy.title }}
            </p>
            <p
              class="my-2 text-grey text-md-left text-regular text-subtitle-2 text-md-subtitle-1"
            >
              {{ privacy.text }}
            </p>
          </VCard>
        </VCol>
      </v-row>
    </main>

    <ExpertComp />
  </div>
</template>
<script setup>
import ExpertComp from "@/components/ExpertComp.vue";
import { computed } from "vue";

const methods = computed(() => {
  return [
    {
      img: "https://images.ctfassets.net/s384oqk42kco/eTO3gnzys6bNL90U97Bpm/f9c0e348194433196a3c312948d06f91/Robust_Data.svg",
      title: "Data Security",
      text: "All of our services are hosted and processed on servers of ISO 27001-certified cloud service providers; Amazon Web Services, Microsoft Azure and Google Cloud Platform.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/161avZotdKfVAHw99rGMRI/74275b5b33e63abca4385eb14d26afcb/user_and_acc_management_icon.svg",
      title: "User Controls",
      text: "Our system allows you to assign different kinds of user permissions to your organization’s users to restrict data access to only authorized persons.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/7yIpaOn9G6IcHAZKVTOSlP/674e5ec8d971cbcd0b8ab4d4a1713dc8/Logging_of_Data_icon.svg",
      title: "Logging of Data",
      text: "Any upload, transmission, access, and/or alteration of personal data and other data is logged by our systems.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/7lCqirGrJs2eFHRi2reHpw/e7fffefe6f3f78481cde08b9d6bbf0ff/Data_Recoverability___Reliability_icon.svg",
      title: "Data Recoverability & Reliability",
      text: "Our data recovery system monitors system statuses and can restore data as it is regularly updated and backed in our system.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/WTcLX0KkX5h7izrLs0Sao/496d82326a835c9cf09ef71774b6c450/Data_Ownership_icon.svg",
      title: "Data Ownership",
      text: "All personal data belongs to customers and we only use it to deliver our services.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/PLNTtiD4crmMnEMYv8bnK/ebc4c4a2371d2c3f88386f36bd070544/Encryption___Data_Storage_icon.svg",
      title: "Encryption & Data Storage",
      text: "Unauthorized change or access of personal data is prevented through encryption “at rest” (when stored), “in motion” (when transferred), and in backups.",
    },
  ];
});

const privacies = computed(() => {
  return [
    {
      img: "https://images.ctfassets.net/s384oqk42kco/6uOEaEXA6x8Vylv7ZdkPed/75d8b331080556fd960ee3211bb6fce1/GDPR_1.svg",
      title: "Servicing of data erasure requests",
      text: "Your customers have a “right to be forgotten” (as mandated in Art. 17 GDPR) and Parcel Perform is equipped to service such requests.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/4IjaPfDGAAU5B7UbCIq26e/17dd2c226737320ac7331657b241e8c8/GDPR_2.svg",
      title: "Compliance documentation",
      text: "We provide legal documentation to ensure compliance with GDPR including, Data Processing Agreements (DPA), Technical and Organizational Measures (TOMs) and Standard Contractual Clauses (SCCs).",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/4XTMwRj99N5iY2PEhipuq1/98c58c6897e3b07dd62f834d04e5380d/GDPR_3.svg",
      title: "EData incident response",
      text: "In case of a security incident involving breach of customer data, we ensure those customers are notified without any undue delay.",
    },
  ];
});

const awards = computed(() => {
  return [
    {
      img: "https://images.ctfassets.net/s384oqk42kco/J2M8nupgtFoQyrGckkXDN/709efcc0b5d61d83418417caa8724a18/iso_logo.webp",
      text: "Parcel Perform is ISO 27001 certified by TÜV SÜD PSB Pte Ltd",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/4XlIICsqUE4ZgCA97qXy84/2b64bdb858ca608fb4e11a91b2e578f5/new_gdpr_logo.webp",
      text: "Fully GDPR-compliant platform to protect your business and customers",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/2QqJDYLcFhtF1Fv4mERXGF/6e92e03347b248e68cb509b06ccced2e/99_9_uptime_logo.webp",
      text: "High platform reliability with 99.9% uptime",
    },
  ];
});
</script>
<style></style>
