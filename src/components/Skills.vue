<template>
  <section id="skills" class="section" style="background: #f8f9fa;">
    <div class="container">
      <h2 class="section-title">My Skills</h2>
      <div class="skills-grid">
        <div
          class="skill-card"
          v-for="skill in skills"
          :key="skill.name"
          @click="showSkill(skill)"
          ref="skillCards"
        >
          <div class="skill-icon">{{ skill.icon }}</div>
          <h3 class="font-bold">{{ skill.name }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  skills: { type: Array, default: () => [] }
});
const emit = defineEmits(['showSkill']);

const skillCards = ref([]);

function showSkill(skill) {
  // emit to parent, or fallback to alert
  emit('showSkill', skill);
}

onMounted(() => {
  // simple intersection animation (same behavior as original)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  document.querySelectorAll('.skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
</script>
