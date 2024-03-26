<template>
  <div>
    <main class="bg-white">
      <v-row class="mx-0 px-0 pa-5 pa-md-12" align="center">
        <VCol cols="12">
          <p class="font-weight-bold text-h4 text-md-h3 text-accent">
            Our Services
          </p>
        </VCol>
        <VCol cols="12" md="6">
          <VCard variant="flat">
            <v-img
              src="https://images.ctfassets.net/s384oqk42kco/1BqZIt9eYMN10bLrFJPhKk/16dc227bbb11eaa94b818e8d836deadc/Customer_Service_Teams.png"
            ></v-img>
          </VCard>
        </VCol>
        <VCol cols="12" md="6">
          <p
            class="text-accent font-weight-bold text-h6 text-md-h5 text-md-left text-uppercase"
          >
            HONEST, DEPENDABLE, EFFICIENT, AND PRODUCTIVE.
          </p>
          <p
            class="text-primary font-weight-bold text-h4 text-md-h3 text-md-left text-uppercase"
          >
            WHAT WE DO
          </p>
          <p
            class="text-grey text-md-left my-2 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
          >
            Swift Dispatch Logistics Transport Services had become the parent
            company for many other logistics websites. This includes Heavy
            Haulers and Tractor Transport, two hugely successful branches. We
            specialize in everything from car transport, to LTL, to oversize
            loads. No matter how small or how large, we transport it all. We
            care, and you can depend on us.
          </p>
          <p
            class="text-grey text-md-left my-2 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
          >
            Listed as one of America's Top Growing Private Companies in Inc 500
            several years in a row, we set the bar for quality logistics. With
            an A+ BBB rating, we always provide quality transport services. We
            ship domestically and internationally, providing custom shipping
            solutions to fit your needs.
          </p>
          <p
            class="text-grey text-md-left my-2 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
          >
            Swift Dispatch Logistics Transport Services continues to grow. We
            strive to set the bar for logistics companies everywhere. by
            creating a quality and secure transport you can have confidence in.
          </p>
        </VCol>
      </v-row>
    </main>

    <main class="bg-grey-lighten-3 pa-5 pa-md-12">
      <v-row class="mx-0 px-0">
        <VCol cols="12">
          <p
            class="text-text-h5 font-weight-bold text-md-h4 text-accent text-capitalize"
          >
            Our Expert Services
          </p>
          <p
            class="my-3 text-grey text-subtitle-2 text-md-subtitle-1 text-capitalize"
          >
            We offer logistics planning for several trucking, shipping and
            hauling methods.
          </p>
        </VCol>

        <VCol cols="12" md="3" v-for="{ title, text } in services" :key="text">
          <div class="text-center text-md-left">
            <VIcon
              icon="fa-check-square"
              class="text-left"
              color="primary"
            ></VIcon>
          </div>
          <p
            class="text-accent font-weight-medium text-subtitle-2 text-md-subtitle-1 text-md-left"
          >
            {{ title }}
          </p>
          <p class="text-grey font-weight-thin text-md-left">
            {{ text }}
          </p>
        </VCol>
      </v-row>
    </main>

    <BgFooter
      bg-image="https://swiftdispatch.online/bg/home1.png"
      style="border-bottom: 1px solid white"
    >
      <template #title> We Make Transportation Easier, Join Us Today </template>
    </BgFooter>

    <main class="bg-accent pa-5 pa-md-12">
      <v-row class="mx-0 px-0" align="center">
        <VCol cols="12" md="6">
          <p
            class="text-white text-md-subtitle-1 text-subtitle-2 font-weight-light text-md-left"
          >
            SMOOTHING OUT THE SHIPPING PROCESS.
          </p>
          <p
            class="text-primary text-h5 text-md-h4 text-md-left font-weight-bold"
          >
            CHOOSE AN INDUSTRY-LEADING LOGISTICS COMPANY
          </p>
          <p
            class="text-grey text-md-left my-2 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
          >
            Your logistics broker wants to give you the best transportation
            experience possible. They'll follow up throughout shipping to check
            on your order's status. If any problems arise, our team will work to
            resolve them quickly. We also offer load tracking to help you stay
            updated on the shipment. Your specialist will even confirm that the
            destination facility received your freight within the anticipated
            time frame.
          </p>
          <p
            class="text-grey text-md-left my-2 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
          >
            At Swift Dispatch Logistics Transport Services, we set industry
            standards for custom solutions and quality service. We've earned a
            place on Inc. 5000's list of fastest-growing companies in the U.S.
            for four consecutive years. Our clients trust our company because
            we're experienced, flexible and committed to providing the best
            solutions possible.
          </p>
          <p
            class="text-grey text-md-left my-2 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
          >
            Connect with Swift Dispatch Logistics Transport Services for more
            information about freight management services. You can also request
            a freight shipping quote online, and our team will contact you.
          </p>
        </VCol>
        <VCol cols="12" md="6">
          <VCard variant="text">
            <v-img
              src="https://images.ctfassets.net/s384oqk42kco/3CuEWPMeOax1C4mNFSShOK/2efc6d942f33d877a467cd4cc73ea25a/parcelmonitor_image.webp?w=960"
            ></v-img>
          </VCard>
        </VCol>
      </v-row>
    </main>
  </div>
</template>
<script setup>
import BgFooter from "@/components/BgFooter.vue";
import { onBeforeMount, computed } from "vue";

onBeforeMount(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});

const services = computed(() => {
  return [
    {
      title: "FREIGHT SHIPPING",
      text: "Transport domestic or international freight through various trucking services. Freight shipping is excellent for lighter loads, oversize freight, vehicles and miscellaneous equipment.",
    },
    {
      title: "INTERNATIONAL EXPORT",
      text: `Our international export team understands the complexities of exporting vehicles and other equipment. Besides our port-to-port services, we can help you with customs paperwork and other details.`,
    },
    {
      title: "HEAVY HAULING",
      text: "Wide loads, plus oversize and overweight loads, are good candidates for heavy hauling. Moving these loads can be intricate, but we have the expertise and resources to create a detailed plan for your order.",
    },
    {
      title: "AUTO TRANSPORTATION",
      text: "Request hauling for any sized car or vehicle. We can get your car to any city in any state through options such as trailer shipping or drive-away services.",
    },
    {
      title: "DRAYAGE",
      text: "Our drayage services help entrepreneurs and small businesses transport their equipment over small distances. We can plan a transport within your community, across state lines or even throughout the country.",
    },
    {
      title: "SUPER LOAD/BREAK BULK SOLUTION",
      text: "Our highly trained super load and break bulk team can map out transport for large pieces of equipment and machinery that cannot be broken down into pieces. Construction equipment and agricultural implements are great candidates for these services.",
    },
    {
      title: "AGRICULTURE EQUIPMENT AND COMMODITY TRANSPORT",
      text: "Farming equipment and commodity transport benefits both farmers and industrial agricultural companies. Our team can arrange for the delivery of your new equipment at the farm or create an export plan for harvesting machinery.",
    },
    {
      title: "POWER-ONLY TRANSPORTATION",
      text: `If you can provide your own trailer, all you need is a power source. When you ask for a power-only transport, we'll choose the best truck and driver combination to get your trailer wherever it needs to go.`,
    },
  ];
});
</script>
<style></style>
