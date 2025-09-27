<template>
  <header class="header" :class="{ scrolled: scrolled }">
    <div class="container">
      <nav class="nav">
        <!-- display the reactive name -->
        <div class="logo">{{ modelValue }}</div>
        <ul class="nav-links">
          <li><a @click.prevent="go('about')">About</a></li>
          <li><a @click.prevent="go('skills')">Skills</a></li>
          <li><a @click.prevent="go('projects')">Projects</a></li>
          <li><a @click.prevent="go('contact')">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// props: use modelValue instead of name
defineProps({
  modelValue: { type: String, default: 'Jay Prajapati' }
});

// events: support v-model + navigateTo
const emit = defineEmits(['update:modelValue', 'navigateTo']);

const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 100;
}

function go(id) {
  emit('navigateTo', id);
}

onMounted(() => window.addEventListener('scroll', onScroll));
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>
