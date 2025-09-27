<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-text">
        <div style="text-align: center; max-width: 800px; margin: 0 auto; font-size: 1.1rem; line-height: 1.8; color: #666;">
          {{ about }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  about: { type: String, default: "I'm a passionate freelance developer..." }
});
</script>
