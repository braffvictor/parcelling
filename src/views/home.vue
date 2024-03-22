<template>
  <div>
    <!-- section 1 -->
    <VRow
      class="mx-0 bg-accent"
      align="center"
      :style="`padding: ${
        $vuetify.display.mdAndDown ? '6.7em 1em' : '5.5em 2em'
      }`"
      justify="center"
    >
      <VCol cols="12" md="6">
        <p
          class="text-h4 text-md-h2 text-white font-weight-bold text-center text-md-left"
        >
          Delivering<span class="text-primary"> satisfaction</span>, <br />
          one package at a time.
        </p>
        <p
          class="text-body-2 my-4 text-grey text-center text-md-left font-weight-light"
        >
          Parcel Perform is a team of logistics and data experts setting the bar
          for the delivery experience from pre-checkout to returns.
        </p>
      </VCol>
      <VCol cols="12" md="6">
        <VCard variant="flat" color="transparent" tile>
          <v-img
            src="https://images.ctfassets.net/s384oqk42kco/7pihbnmyU2Dr3xsDPWjKtz/a9250128785463052c02101afc12be45/parcelperform-seo-image.webp"
            cover
          ></v-img>
        </VCard>
      </VCol>
    </VRow>

    <!-- section2 -->
    <v-row
      class="mx-0 bg-grey-lighten-3"
      align="start"
      :style="`padding: ${
        $vuetify.display.mdAndDown ? '3em 1em' : '5.5em 2em'
      }`"
      justify="center"
    >
      <VCol cols="12">
        <p
          class="text-accent my-3 text-center text-h5 text-md-h3 font-weight-bold"
        >
          The
          <span class="text-primary">Data & Delivery Experience</span> platform
        </p>
        <p
          class="text-accent my-3 text-center text-h6 text-md-h6 font-weight-regular"
        >
          At Parcel Perform, we believe in the transformative power of data.
        </p>
        <p
          class="text-accent my-3 text-center text-h6 text-md-h6 font-weight-thin"
        >
          Our comprehensive data pipeline aggregates all logistics event data
          across 1,045+ carriers into one cohesive, global standard. We
          streamline location, language, and timezone data with crucial
          information such as AI-generated estimated delivery dates,
          proof-of-delivery, shipping service, and more.
        </p>
      </VCol>

      <VCol
        cols="6"
        md="3"
        class="my-3 my-md-6"
        v-for="feature in features"
        :key="feature.number"
      >
        <div class="text-accent font-weight-bold text-h4 text-md-h2">
          {{ feature.number }}
        </div>
        <div class="text-grey">{{ feature.text }}</div>
      </VCol>
      <VDivider thickness="3" class="m-y4 my-md-8" />
      <VCol cols="12">
        <p
          class="text-accent my-3 text-center text-h5 text-md-h3 font-weight-bold"
        >
          Our
          <span class="text-primary">enterprise-ready</span> platform & services
        </p>
      </VCol>
      <VCol
        cols="12"
        md="4"
        v-for="enterprise in enterprises"
        :key="enterprise.text"
      >
        <v-img
          :src="enterprise.img"
          min-width="40"
          max-width="50"
          class="mx-auto text-center text-md-left mx-md-0"
        ></v-img>
        <p
          class="my-3 text-accent font-weight-bold text-h5 text-center text-md-left"
        >
          {{ enterprise.title }}
        </p>
        <p
          class="text-subtitle-1 text-grey font-weight-regular text-center text-md-left"
        >
          {{ enterprise.text }}
        </p>
      </VCol>
    </v-row>

    <!-- section3 -->
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
  </div>
  <div style="overflow: hidden" class="bg-grey-lighten-3 py-5 py-md-10 pb-13">
    <p class="text-center text-h6 font-weight-bold text-md-h4 my-7 mx-3">
      Access tracking across
      <span class="text-primary">1,045+ carriers</span> globally
    </p>
    <div class="d-flex transit" :style="`transform: translateX(${tranX}%);`">
      <div v-for="logo in logos" :key="logo.img">
        <v-img
          :src="logo.img"
          :width="$vuetify.display.mdAndDown ? '100' : '200'"
          rounded="lg"
          class="mx-3"
        ></v-img>
      </div>
    </div>
  </div>

  <!-- section4 -->
  <v-row
    class="mx-0 bg-accent"
    align="center"
    :style="`padding: ${$vuetify.display.mdAndDown ? '3em 1em' : '5.5em 2em'}`"
    justify="center"
  >
    <VCol cols="12">
      <p class="text-md-h2 text-h5 font-weight-bold text-md-left">
        Our <span class="text-primary">Values</span>
      </p>
      <p
        class="text-white my-2 my-md-5 text-md-left text-subtitle-1 font-weight-medium"
      >
        Our values represents a core set of values, rules and regulations that
        guide our conduct and build trust-based relationships with partners and
        customers, employees and guarantors. Our values guide our decisions,
        behaviors, and reflect how we seek to serve our communities better.
      </p>
    </VCol>
    <VCol cols="12" md="6">
      <vContainer>
        <div
          class="d-flex align-center my-5"
          style="gap: 12px"
          v-for="value in values"
          :key="value.img"
        >
          <div class="bg-white rounded-pill pa-2">
            <v-img :src="value.img" min-width="50" max-width="60"></v-img>
          </div>
          <div>
            <p
              class="text-white font-weight-bold text-h6 text-left text-uppercase"
            >
              {{ value.title }}
            </p>
            <p
              class="text-subtitle-2 font-weight-medium text-left text-grey-lighten-2"
            >
              {{ value.text }}
            </p>
          </div>
        </div>
      </vContainer>
    </VCol>
    <VCol cols="12" md="6">
      <vContainer>
        <v-card variant="outlined" rounded="lg">
          <v-img src="https://swiftdispatch.online/bg/14.jpg"></v-img>
        </v-card>
      </vContainer>
    </VCol>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
let tranX = ref(0);

const translate = setInterval(() => {
  tranX.value -= 10;
  if (tranX.value == -200) {
    tranX.value = 0;
  }
}, 1000);

const logos = computed(() => {
  return [
    {
      img: "https://images.ctfassets.net/s384oqk42kco/hY9BEiySrO55RvG6j0qR4/4ac0fbf52852275c9a3a438dd02da7ec/chrpof.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/J064GpK2gEohCR3ps8Ceo/3e6bfdaae028bd537c3b826a16751068/eurodi.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/AHX1UHKnnCkdMvVVn0ZSx/c9b6d6b5a05d612326502d8e60745a59/Spring.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/3ngI057G4Bzqc5o3XrIs6N/d4943c747d01ff84bcadb5afb89198cb/tntaus.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/2BFrXtArCagNj056lbCSYK/63f57d94b203087446b3e9d3c3ec61ba/upsfre.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/IU8lliPNASeY5l4dyQJ3Q/648f8b46c7c7b93a08fcb5031b452a26/chnpos.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/2XnQhsh7e0Oua99Pwzo1f9/b1208bd737f5505377792a6cb81ba926/yunexp.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/72Faf7AAhBLFaLW62kosPH/45288c8b0d5a47b6548696c7c67387e1/dpdbel.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/78P2WACgNY3jI64oufZoe1/d8c78a8d2e15761f05beebe83d2eac40/whistl.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/5Rktd4x142GohTMkjduEFH/1c40d61247e07c8ca863fefd97214e7b/yodint.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/4Ah9ugku7f8koWTKWLJiN8/029585cf71c02fe8376cd47612aea9eb/lasshi.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/7jAHx45Y86eTUnxXBLZ7y9/c186df99b1a1f6d9e332b73425684cd0/nzposp.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/1AMJSm5OQrlBLoReKVa730/214ae4e74d6ed796fd630d70dc62e612/pafouk.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/5vWDLZzqR1jZLBY5s9m4Mf/c0bacde59023811d1df683bfc4aa02c8/coliss.svg",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/27VdzcObTKVJ2R7TROR68k/2041bfb350fb5bbb37d2a04a4691daf9/fedxbr.svg",
    },
  ];
});

const features = computed(() => {
  return [
    {
      number: "100m",
      text: "Parcel tracking updates daily",
    },
    {
      number: "1045+",
      text: "carrier partners integrated globally",
    },
    {
      number: "160+",
      text: "countries covered by tracking",
    },
    {
      number: "155+",
      text: "standard shipping event types",
    },
  ];
});

const enterprises = computed(() => {
  return [
    {
      img: "https://images.ctfassets.net/s384oqk42kco/4720QDerdyC2BU6Wir4oxE/5e613181f0f4004be0c77768df0ae646/Group-1.svg",
      title: "Speed",
      text: "If speed is your priority, we offer air freight services for even faster deliveries. Our haulage and inland logistics are sure to get your products to your doorstep all within the supervision of industry experts with seasoned experience in the business of transportation.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/44Y2T1OXpTcsFwc82SQ8J2/9064e2e290d8cd5cc28dcbd2ecd841ff/Logistics_and_operations_teams.svg",
      title: "Excellent Storage Facilities",
      text: "Worthy to note is the fact that we offer storage facilities to our customers courtesy of our state of the art warehouse. This can be beneficial to customers who have bulk quantity goods but with no storage space. Our storage space leasing arrangement, just like every other service we render, can be uniquely tailored to your needs.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/eTO3gnzys6bNL90U97Bpm/f9c0e348194433196a3c312948d06f91/Robust_Data.svg",
      title: "Scalable & Secure Platform",
      text: "Globally scalable & available in 36+ languages. GDPR-compliant & ISO 27001 certified.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/161avZotdKfVAHw99rGMRI/74275b5b33e63abca4385eb14d26afcb/user_and_acc_management_icon.svg",
      title: "User & Account Management",
      text: "Unlimited free users, advanced access and UI rights management.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/3XfcNnDvPcjRxY9bRSb6hQ/c111d9efefad922a4f2fe2065b791b1a/wrench.svg",
      title: "Configurable & Customizable",
      text: "Built to match your business requirements and brand. Includes extensive configuration and customization options.",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/51Tc0swtJP1Z8CcJ1IdEoN/bd90a5fc874245ed760220f1ddc0e406/Care_benefit_-_2.svg",
      title: "24h Customer Support",
      text: "Dedicated KAM for fast onboarding and continuous support. Resolve technical and UX questions via live chat.",
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

const values = computed(() => {
  return [
    {
      img: "https://images.ctfassets.net/s384oqk42kco/4U3ZQKpcrl4tkBEM9GVndq/da69ccfb8da80e0e3f47f2bc74eb26d6/Care.svg",
      title: "VALUE OF CLIENT",
      text: "Our priority is the optimization of our customers values, time, money and satisfaction",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/1QwzImKEndRBnP2kiTejKG/052a2af037bffe6a0dc98d1f106edfd4/data_open_platform_icon.svg",
      title: "INNOVATION",
      text: "Leveraging technology to ensure environement sustainability and digital smartness that speaks of the digital tomorrow",
    },
    {
      img: "https://images.ctfassets.net/s384oqk42kco/5VnbvLSKKnJiaTttLauQ0/2f6fcb3177973ef2ee2456d6472c4ca4/Analyze.svg",
      title: "TRANSPARENCY",
      text: "Visibility of data on every shipment so you could do efficient decision-making concerned with growth and performance",
    },
  ];
});
</script>

<style>
.transit {
  transition: all 2s linear;
}
</style>
