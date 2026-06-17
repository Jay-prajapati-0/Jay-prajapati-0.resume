<template>
  <div>
    <!-- listen in kebab-case -->
    <Hero :name="name" :title="title" @navigate-to="scrollTo" />

    <About :about="about" />

    <!-- listen in kebab-case -->
    <Skills :skills="skills" @show-skill="showSkillDetails" />

    <Projects :projects="projects" />

    <Contact :email="email" :location="location" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

/* Data */
const name = 'Jay Prajapati';
const title = 'Full-Stack Developer & UI/UX Designer';
const about = "I'm a passionate freelance developer with expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems. With a keen eye for design and a strong technical background, I bring ideas to life through clean code and intuitive user experiences.";
const email = 'jay.prajapti64@outlook.com';
const location = 'Ahmedabad, India'; // fixed spelling
const skills = [
  { name: "Frontend Development", icon: "🎨", description: "Nuxt, Vue.js, HTML5, CSS3, TailwindCSS, JavaScript ES6+" },
  { name: "Backend Development", icon: "⚙️", description: "Node.js, Express, REST APIS"},
  { name: "Database Design", icon: "🗄️", description: "MySQL, PostgreSQL" },
  { name: "UI/UX Design", icon: "🎯", description: "Figma, Prototyping, User Research" },
  // { name: "DevOps & Cloud", icon: "☁️", description: "AWS, Docker, CI/CD, Git, Linux" }
];
const projects = [
  {
    name: "Emoticare App",
    description: "A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe API"],
    image: "/img/Site1.png",      // use absolute/static public path or import in component if using bundler
    url: "https://emoticare-wheat.vercel.app/"
  },
  {
    name: "PollZip App",
    description: "A collaborative project management tool with real-time updates, team chat, and advanced reporting features.",
    technologies: ["React", "Express.js", "Socket.io", "PostgreSQL"],
    image: "/img/Site2.png",
    url: "https://www.pollzip.com/"
  },
  {
    name: "ShreejiSolar Website",
    description: "A responsive corporate website for a solar energy company, featuring product showcases and contact forms.",
    technologies: ["Vue.js", "Node.js", "TailwindCSS"],
    image: "/img/Site5.png",      // use absolute/static public path or import in component if using bundler
    url: "https://shreejisolar.com/"
  },
  {
    name: "Meldai Seeds Website",
    description: "A modern agricultural website for showcasing products and services.",
    technologies: ["Vue.js", "Express.js", "TailwindCSS", "google analytics", "Apis integration", "QR code generator"],
    image: "/img/Site4.jpg",
    url: "https://meldaiseeds.com"
  },
  {
    name: "Writarai App",
    description: "An AI-powered writing assistant that helps users generate content, improve grammar, and enhance creativity.",
    technologies: ["Vue.js", "Express.js", "TailwindCSS"],
    image: "/img/Site3.1.avif",
    url: "https://writarai.com/"
  }
];

function scrollTo(id) {
  console.log('scrollTo called with id:', id);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn('No element found with id:', id);
  }
}

function showSkillDetails(skill) {
  console.log('showSkillDetails ->', skill);
  alert(`${skill.name}: ${skill.description}`);
}

onMounted(() => {
  // optional: debug mount
  console.log('Page mounted');
});
</script>
