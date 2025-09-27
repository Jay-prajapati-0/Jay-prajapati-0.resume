<template>
  <div id="app">
    <!-- HeaderBar emits 'navigateTo' when nav links are clicked -->
    <HeaderBar :name="name" @navigateTo="scrollTo" />

    <!-- Router view renders the Home page which contains Hero/About/Skills/etc -->
    <router-view />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import HeaderBar from './components/HeaderBar.vue';

const name = ref('Your Name');

/**
 * Central scroll function used by HeaderBar (via event) or any child via injected useScroll()
 * Smoothly scrolls to element id if present.
 */
function scrollTo(id) {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // fallback: if route contains hash e.g. /#about, you may want to navigate or log.
    console.warn(`scrollTo: no element found with id="${id}"`);
  }
}

/**
 * provide a composable so deep components can inject it if desired
 */
provide('useScroll', { scrollTo });
</script>
