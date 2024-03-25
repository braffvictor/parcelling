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
          About <span class="text-primary"> Parcel Perform</span>
        </p>
        <p
          class="text-body-2 my-4 text-grey text-center text-md-left font-weight-light"
        >
          We are an international team of over 400,000 shipping professionals,
          united by a passion for logistics. And we work in a unique
          environment. Swift Dispatch is as innovative as a start-up, with the
          power of an international organization. Our solutions are powered by
          trade, logistics and the drive and passion of all our employees. In
          every country, across all divisions at Swift Dispatch, we each have
          the potential to make a global difference.
        </p>
      </VCol>
      <VCol cols="12" md="6">
        <VCard variant="flat" color="transparent" class="">
          <v-img
            src="https://images.ctfassets.net/s384oqk42kco/XiQha6fhy7gp7yrvbLCjp/0345f7529f9e0dde02d5f936de7c2ead/dv1.webp?w=870"
            cover
          ></v-img>
        </VCard>
      </VCol>
    </VRow>

    <v-row
      class="mx-0 px-0 bg-white py-5 py-md-10 px-5 px-md-10"
      justify="center"
    >
      <VCol cols="12">
        <p class="text-center text-h5 text-md-h3 font-weight-bold text-primary">
          A strong, global team of Parcel Performers
        </p>
      </VCol>
      <VCol
        cols="6"
        md="3"
        class="my-5 my-md-8"
        v-for="speck in specks"
        :key="speck.number"
      >
        <p class="font-weight-bold text-accent text-h4 text-md-h3">
          {{ speck.number }}
        </p>
        <p class="text-grey text-subtitle-1">{{ speck.text }}</p>
      </VCol>
    </v-row>

    <main class="bg-white">
      <vContainer>
        <VRow
          class="mx-0 px-4 px-md-7 py-3 py-md-4"
          align="center"
          justify="center"
        >
          <VCol cols="12" md="6">
            <VCard variant="flat" color="transparent" class="">
              <v-img
                src="https://images.ctfassets.net/s384oqk42kco/frShgV3IK3L5YsdqGOX7u/470f1c18dd3723b09e8e6c3dc4b46c5f/Logistics_Leaders.png"
                cover
              ></v-img>
            </VCard>
          </VCol>
          <VCol cols="12" md="6">
            <p
              class="text-h4 text-md-h2 text-accent font-weight-bold text-center text-md-left"
            >
              We Are <span class="text-primary">Growth Frontiers</span>
            </p>
            <p
              class="text-body-2 my-4 text-grey text-center text-md-left font-weight-light"
            >
              You'll thrive on the beneficial implications of your role - you'll
              play an integral part in creating connections that deliver
              opportunity and prosperity all over the world. Our concerns go far
              beyond the people who work for us. Which is why we support
              initiatives impacting the environment and our society. We provide
              plenty of opportunities to develop your role and gain knowledge
              and experience. We'll also ensure we reward your hard work at a
              competitive rate.
            </p>
          </VCol>
        </VRow>
      </vContainer>
    </main>

    <main class="bg-white">
      <vContainer>
        <VRow class="mx-0" align="center">
          <VCol cols="12" class="my-3 my-md-6">
            <p class="text-h4 text-accent text-md-h3 font-weight-bold">
              <span class="text-primary">Perks</span> of Working With Us
            </p>
          </VCol>
          <VCol cols="12" class="px-5 px-md-10">
            <v-row class="mx-0 px-0" justify="center">
              <VCol cols="12" md="4">
                <div
                  class="d-flex my-5 my-md-10 align-baseline justify-center"
                  style="gap: 7px"
                  v-for="perk in perks.slice(0, 3)"
                  :key="perk.icon"
                >
                  <VIcon
                    :icon="perk.icon"
                    color="accent"
                    size="x-small"
                  ></VIcon>
                  <div class="text-accent text-center">{{ perk.text }}</div>
                </div>
              </VCol>
              <VCol cols="12" md="4">
                <VCard variant="flat">
                  <v-img
                    class="text-center mx-auto"
                    src="https://www.parcelpending.com/wp-content/uploads/2021/07/Group-720-2.png"
                  >
                  </v-img>
                </VCard>
              </VCol>
              <VCol cols="12" md="4">
                <div
                  class="d-flex my-5 my-md-10 align-baseline justify-center"
                  style="gap: 7px"
                  v-for="perk in perks.slice(3, 6)"
                  :key="perk.icon"
                >
                  <VIcon
                    :icon="perk.icon"
                    size="x-small"
                    color="accent"
                  ></VIcon>
                  <div class="text-accent">{{ perk.text }}</div>
                </div>
              </VCol>
            </v-row>
          </VCol>
        </VRow>
      </vContainer>
    </main>

    <main class="bg-grey-lighten-3 px-4 px-md-10 py-5 py-md-8">
      <vContainer>
        <VCol cols="12">
          <p
            class="text-accent text-h4 text-md-h3 text-md-left font-weight-bold"
          >
            What People
            <span class="text-primary">Say About Us</span>
          </p>
          <p
            class="text-accent font-weight-regular text-md-left text-subtitle-1"
          >
            Since inception, We like to put our customers first. We provide
            multiple service options to meet our client’s needs – Same Day
            Service, Overnight, Route Service, Warehousing, Distribution,
            Freight, Legal Services, Shredding.
          </p>
        </VCol>
      </vContainer>
    </main>

    <main class="bg-grey-lighten-3 pb-10">
      <v-row class="mx-0 px-0" justify="center" align="center">
        <!-- <VCol cols="3" v-for="logo in reviews" :key="logo.logo">
          <v-img
            class="mx-auto text-center"
            style="filter: grayscale(1)"
            :src="logo.logo"
            width="150"
          ></v-img>
        </VCol> -->
        <VCol cols="12"></VCol>
        <VCol cols="2" class="d-none d-md-block">
          <VBtn
            color="accent"
            @click="num--"
            size="small"
            :disabled="num == 0"
            icon="fa-chevron-left"
            class="rounded-circle"
            variant="outlined"
          ></VBtn>
        </VCol>
        <VCol cols="12" md="8">
          <VCard elevation="15" rounded="lg" class="py-4 py-md-0">
            <v-row class="mx-0 px-0" justify="center" align="center">
              <VCol cols="6" class="mx-0 px-0 d-none d-md-block">
                <v-img
                  class="rounded-be-circle rounded-te-circle transit"
                  :src="reviews[num].image"
                  cover
                  height="500"
                  width="1000"
                >
                </v-img>
              </VCol>
              <VCol cols="12" md="6">
                <section class="d-flex" style="gap: 12px">
                  <div
                    style="border: 1px solid #ea580c; height: 15%; width: 15%"
                    class="rounded-circle"
                  >
                    <v-img
                      class="rounded-circle text-center mx-auto text-md-left mx-md-0 transit"
                      :src="reviews[num].pic"
                      cover
                    ></v-img>
                  </div>
                  <div>
                    <p class="text-accent text-left font-weight-bold transit">
                      {{ reviews[num].name }}
                    </p>
                    <p
                      class="text-accent text-left font-weight-regular transit"
                    >
                      {{ reviews[num].title }}
                    </p>
                  </div>
                </section>
                <p
                  class="font-weight-bold text-subtitle-1 text-h6 my-4 text-accent text-left transit"
                >
                  <VIcon icon="fa-quote-left"></VIcon>
                  {{ reviews[num].text }}
                  <VIcon icon="fa-quote-right"></VIcon>
                </p>
                <div class="my-4">
                  <v-img
                    :src="reviews[num].logo"
                    width="140"
                    class="mx-auto text-center transit"
                  ></v-img>
                </div>
              </VCol>
            </v-row>
          </VCard>
        </VCol>
        <VCol cols="2" class="d-none d-md-block">
          <VBtn
            @click="num++"
            color="accent"
            size="small"
            :disabled="num == 2"
            icon="fa-chevron-right"
            class="rounded-circle"
            variant="outlined"
          ></VBtn>
        </VCol>
        <VCol cols="12" class="d-block d-md-none">
          <div class="d-flex justify-center" style="gap: 7px">
            <VBtn
              color="accent"
              icon="fa-circle"
              @click="num = 0"
              :variant="num == 0 ? 'text' : 'plain'"
              class=""
              size="40"
            ></VBtn>
            <VBtn
              color="accent"
              icon="fa-circle"
              class=""
              @click="num = 1"
              :variant="num == 1 ? 'text' : 'plain'"
              size="40"
            ></VBtn>
            <VBtn
              color="accent"
              icon="fa-circle"
              @click="num = 2"
              :variant="num == 2 ? 'text' : 'plain'"
              class=""
              size="40"
            ></VBtn>
          </div>
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

const num = ref(0);

const specks = computed(() => {
  return [
    {
      number: "200",
      text: "Parcel Performers",
    },
    {
      number: "1:1",
      text: "Females to males ratio",
    },
    {
      number: "16",
      text: "Nationalities",
    },
    {
      number: "5",
      text: "offices globally",
    },
  ];
});

const perks = computed(() => {
  return [
    {
      icon: "fa-medkit",
      text: "Healthcare Coverage",
    },
    {
      icon: "fa-calendar",
      text: "Paid Time Off/Time Away",
    },
    {
      icon: "fa-headphones",
      text: "Employee Assistance Plan",
    },
    {
      icon: "fa-graduation-cap",
      text: "Continuing Education",
    },
    {
      icon: "fa-certificate",
      text: "Remote Work Opportunities",
    },
    {
      icon: "fa-hashtag",
      text: "Regular Employee Engagement",
    },
  ];
});

const reviews = computed(() => {
  return [
    {
      logo: "https://images.ctfassets.net/s384oqk42kco/3pygPzzoqW8YVtpCivxcHk/58b77be53c8260ddc7f45727dccd8240/expondo.svg",
      image:
        "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F4aMPfxC9Q3jDbyGyk6UmAA%2F4a22ad4902b48770cb412e4efe44f5ec%2Fpp-customer-nespresso-3.png%3Fw%3D700%26fm%3Dpng&w=1920&q=75",
      pic: "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F7vO0hnMRlGOVb7KFrBLZBF%2F76f4d86b1fdfd2d8c3f174135b5e0a5f%2FNespresso_Davide.webp%3Fw%3D78%26fm%3Dpng&w=1920&q=75",
      name: "Patrick Stan",
      title: "Global Delivery Services Manager at Nepresso",
      text: "Our Customer Service and Ops team has full visibility into the parcel journey. We can easily filter shipments based on different parameters. The various platform functionalities have helped us respond efficiently to customer queries",
    },
    {
      logo: "https://images.ctfassets.net/s384oqk42kco/4Yan3kawjcYmKY81e0iyTB/1f117ab4565b3c8728c2a48c43887b16/website_logo.png",
      image:
        "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F1dKWp0smwzFwHwLX47n80R%2Fcdc078150cc4feb3a3f1828a7dc25672%2Fmister_spex_image__1_.webp%3Fw%3D700%26fm%3Dpng&w=1920&q=75",
      pic: "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F4DjvEtBzoRw6BXifYDXYUG%2F7c23d06fe18400ced5ac56f92388cf5d%2Fimage_2.png%3Fw%3D78%26fm%3Dpng&w=1920&q=75",
      name: "William Carlson",
      title: "Head of Supply Chain at Spex",
      text: "Tracking assistance is one of the top reasons for customer queries. In some markets, we have seen a 45% decrease of such calls. Customers also revsit the track & trace webpge 4-6 times during the delivery journey, proving it is an essential feaure to boost customer experience",
    },
    {
      logo: "https://images.ctfassets.net/s384oqk42kco/6QCdXvVrphcDJlpZcq0ob8/069fb47dc95946dd7ca975e883cc23f0/byrd_technologies_1_1x.webp",
      image:
        "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F5GKZ2kjIifQf9j4ndA0iF3%2F9658f6d28aaae9b2e9f9c80b8abd93f3%2Fbyrd_testimonial_imagex.webp%3Fw%3D700%26fm%3Dpng&w=1920&q=75",
      pic: "https://www.parcelperform.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fs384oqk42kco%2F2rcXrPJHMjb3yKwuePXJDD%2Fbe4ec2207144eb10d9464dda157cfe8d%2Fpetra_image_byrd.webp%3Fw%3D78%26fm%3Dpng&w=1920&q=75",
      name: "Lilian Dobrocka",
      title: "CCO of byrd",
      text: `As Europe's leading e-commerce fulfillment platform, we work with multiple regional carrires. We wanted a partner that could handle the highest degree of data complexity to help our customers improve operational efficiency and elevate the delivery experience`,
    },
  ];
});
</script>
<style>
.transit {
  transition: all 2s linear;
}
</style>
