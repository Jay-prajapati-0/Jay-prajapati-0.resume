<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <article
          class="project-card"
          v-for="(project, idx) in projects"
          :key="project.name + idx"
          @click="onCardClick(project)"
          role="button"
          :aria-label="`Open ${project.name}`"
          tabindex="0"
          @keyup.enter="onCardClick(project)"
        >
          <div class="project-image">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name + ' preview'"
              class="project-img"
              loading="lazy"
            />
            <div v-else class="image-fallback">
              {{ project.name }} Preview
            </div>
          </div>

          <div class="project-content">
            <h3 class="font-bold">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="tech-tags">
              <span class="tech-tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>

            <div class="project-actions">
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                class="project-link"
              >
                View Project
              </a>
              <button v-else @click.stop="emitOpen(project)" class="project-detail-btn">Details</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  projects: { type: Array, default: () => [] }
});

const emit = defineEmits(['open-project']); // optional event if parent wants to listen

function onCardClick(project) {
  // if project has a url open in new tab, otherwise emit open-project for parent to handle
  if (project.url) {
    // open in new tab
    window.open(project.url, '_blank', 'noopener');
  } else {
    emit('open-project', project);
  }
}

function emitOpen(project) {
  emit('open-project', project);
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(10,10,10,0.06);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform .15s ease, box-shadow .15s ease;
}

.project-card:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(10,10,10,0.08);
}

.project-image {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f7fb;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-fallback {
  padding: 1rem;
  color: #666;
  font-weight: 600;
  text-align: center;
}

.project-content {
  padding: 1rem 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.project-title {
  margin: 0;
  font-size: 1.05rem;
}

.project-description {
  margin: 0;
  color: #444;
  font-size: 0.95rem;
}

.tech-tags {
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: #f1f5f9;
  color: #111827;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  align-items: center;
}

.project-link,
.project-detail-btn {
  text-decoration: none;
  border: none;
  background: transparent;
  color: #2563eb;
  cursor: pointer;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
}

.project-link:hover,
.project-detail-btn:hover {
  text-decoration: underline;
}
</style>
