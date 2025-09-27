<template>
  <section class="hero">
    <div class="hero-content">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <!-- show current name -->
      <h1>{{ modelValue }}</h1>
      <p class="subtitle">{{ title }}</p>
      <!-- still emit custom navigation if needed -->
      <button class="cta-button" @click="$emit('navigateTo', 'contact')">
        Let's Work Together
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    modelValue: { type: String, default: 'Jay Prajapati' },
    title: { type: String, default: 'Full-Stack Developer & UI/UX Designer' }
  }
}
</script>
