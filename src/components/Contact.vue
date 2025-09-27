<template>
  <section id="contact" class="contact py-16">
    <div class="container mx-auto px-4">
      <div class="contact-content text-center space-y-8">
        <h2 class="font-bold text-white text-4xl">
          Let's Build Something Amazing
        </h2>

        <p class="text-lg text-gray-300 mb-12">
          Ready to start your next project? Get in touch!
        </p>

        <div class="contact-info space-y-6">
          <div class="contact-item flex justify-center items-center gap-3">
            <span>📧</span>
            <span 
              class="cursor-pointer hover:underline text-white"
              @click="sendEmail"
            >
              {{ email }}
            </span>
          </div>

          <div class="contact-item flex justify-center items-center gap-3">
            <span>💼</span>
            <span class="text-white">Available on Upwork</span>
          </div>

          <div class="contact-item flex justify-center items-center gap-3">
            <span>🌍</span>
            <span class="text-white">{{ location }}</span>
          </div>
        </div>

        <button
          class="contact-button mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          @click="openUpwork"
        >
          Hire Me on Upwork
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  email: { type: String, default: 'jay.prajapti64@outlook.com' },
  location: { type: String, default: 'Ahemdabad, India' }
});

function openUpwork() {
  window.open('https://www.upwork.com', '_blank');
}

function sendEmail() {
  window.location.href = `mailto:${props.email}`;
}
</script>
