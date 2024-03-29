<template>
    <div>
        
    <main class="bg-accent">
        <div class="pa-5 pa-md-8">
          <p class="text-white text-capitalize text-subtitle-1 text-md-h6 font-weight-medium text-center">
           <VIcon color="primary" icon="fa-thumb-tack" size="small"></VIcon> Redefined tracking, smarter control: Unified visibility for all shipments from a single platform.
          </p>
        </div>
      </main>

        <main class="bg-white pa-2 py-8 pa-md-12">
            <v-row class="mx-0 px-0" justify="center">
                <VCol cols="12" md="8">
                    <VCard rounded="xl" class="" style="border-top: 4px solid #ea580c;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                        <VCol cols="12">
                            <VCardText>
                                <p class="text-accent text-h6 text-md-h5 text-left font-weight-bold">
                                    Track Your Parcel Here
                                </p>
                                <p class="bg-primary" style="border: 1px solid #ea580c; width : 50px; height: 4px"></p>
                            </VCardText>
                            <VCardText class="my-0 py-0">
                                <VTextField
                                        v-model="parcelCode"
                                        label="Enter Your Tracking ID"
                                        class="text-accent"
                                        color="primary"
                                        variant="outlined"
                                        />
                            </VCardText>
                            <VCardText class="my-0 py-0">
                                <VBtn color="primary" variant="flat" block size="large">Proceed</VBtn>
                            </VCardText>
                        </VCol>

                        <v-card-text class="">
                            <v-img class="mx-auto text-center" src="https://www.parcelmonitor.com/images/tracking-default-image.svg" width="400" ></v-img>

                            <p class="text-grey-darken-1 text-center font-weight-light text-subtitle-1 text-md-h6 mt-3">
                                The fastest way to trace your international parcel
                            </p>
                            <p class="text-grey text-center my-3">
                                Simply enter your tracking number above and hit proceed. Parcel Monitor is the global knowledge-sharing platform dedicated to e-commerce logistics for retailers, logistics carriers, industry professionals, and end-consumers.
                            </p>
                        </v-card-text>
                       
                    </VCard>
                </VCol>
            </v-row>
        </main>

        <main class="bg-grey-lighten-5 pa-4 pa-md-8">
            <VCardText class="my-0 py-0">
                <p class="text-accent text-left  font-weight-bold text-subtitle-1 text-md-h6">
                    Want to track your parcel? We’re here to help.
                </p>
                <p class="bg-primary mb-1" style="border: 1px solid #ea580c; width : 50px; height: 4px"></p>
                
            </VCardText>
         <v-row class="mx-0 px-0 ">
            <VCol cols="12" md="6">

                <p class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left">
                    Parcel tracking for global carriers like China Post, DHL, Royal Mail, USPS and more
                </p>
                <p class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left">
                    Track your international parcels with Parcel Monitor’s global parcel tracking service. We offer real-time updates of your packages and support a wide range of global carriers, including China Post, DHL, Royal Mail and USPS. Whether you're mailing a package to a friend in another country or shipping a pallet of goods overseas, our tracking tool will keep you updated on its progress at every stage.
                </p>

              

                <p class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left">
                    Track your global TikTok, ASOS, eBay, Amazon and Shopify orders with Parcel Monitor
                </p>
                <p class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left">
                    With Parcel Monitor, you can follow your parcels every step of the way simply by entering your tracking numbers, regardless of where you purchase them from. No more waiting until your order arrives to find out what happened to it along the way! Our easy-to-use parcel tracking tool makes it easy to keep track of all your orders in one place. So whether you're an avid shopper on any of the aforementioned e-commerce platforms or you just like to order from time to time, Parcel Monitor is perfect for you.
                </p>
            </VCol>
            <VCol cols="12" md="6">
                <p class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left">
                    Enhance your online shopping experience with Parcel Monitor’s free parcel tracking tool
                </p>
                <p class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left">
                    Make purchases from your favorite e-commerce retailer or online marketplace without having to worry about your orders’ whereabouts. Regardless of the store you buy from or the carrier they use to ship your package, you can track your parcel as it travels around the world. With our parcel tracking service, you can keep track of the delivery’s progress and get peace of mind knowing that it is on the way to your doorstep.
                </p>

                <p class="text-accent my-4 font-weight-bold text-md-subtitle-1 text-subtitle-2 text-md-left">
                    Parcel tracking in the UK, US, Philippines, Canada, China, Australia and the rest of the world
                </p>
                <p class="text-accent my-4 text-md-subtitle-2 text-body-1 text-md-left">
                    Looking for a reliable way to track your international parcels? Look no further! Parcel Monitor’s parcel tracking tool provides up-to-date information on the whereabouts of your packages for free. Whether you're looking for a service that covers the United Kingdom, United States, Philippines, Canada, China, Australia or the rest of the world, we've got you covered. We work with some of the most reliable global carriers including DHL, UPS and Canada Post, so you can rest assured that your parcels are in good hands.
                </p>
            </VCol>
         </v-row>
        </main>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue';

onBeforeMount(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});


const parcelCode = ref('')
</script>
<style></style>