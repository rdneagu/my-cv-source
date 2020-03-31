<template>
  <div class="skills-panel">
    <div v-for="(category, id) in skills" :key="id" class="skills-container" :class="[ `skills-${id}` ]">
      <label class="skills-label">{{ id.toUpperCase() }} SKILLS</label>
      <div class="honeycomb">
        <SkillHex v-for="(skill, id) in category" :key="id" v-bind="skill">{{ skill.name }}</SkillHex>
      </div>
    </div>
  </div>
</template>

<script>
import SkillHex from '../SkillHex.component.vue';

export default {
  components: { SkillHex },
  data() {
    return {
      skills: {
        frontend: [
          { name: 'HTML', percentage: 80, icon: 'html5' },
          { name: 'SCSS', percentage: 85, icon: 'css3' },
          { name: 'Vue.js', percentage: 80, icon: 'vuejs' },
          { name: 'React.js', percentage: 40, icon: 'react' },
          { name: 'JavaScript', percentage: 85, icon: 'javascript' },
        ],
        backend: [
          { name: 'node.js', percentage: 75, icon: 'nodejs' },
          { name: 'Database', percentage: 55, icon: 'mysql' },
        ],
        relevant: [
          { name: 'Linux', percentage: 40, icon: 'linux' },
          { name: 'Python', percentage: 50, icon: 'python' },
          { name: 'Java', percentage: 30, icon: 'java' },
          { name: 'Amazon Web Services', percentage: 20, icon: 'amazonaws' },
          { name: 'Git', percentage: 45, icon: 'github' },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
/**
 * Skills
 */
.skills-panel {
  align-self: stretch;
  .skills-container {
    display: flex;
    flex-direction: column;
  }
  .skills-label {
    padding: 5px 8px;
    align-self: center;
    font-weight: 600;
    font-size: 14px;
  }
  .honeycomb {
    position: relative;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    justify-content: space-evenly;
    margin: 10px 0;
    .skill-wrapper:nth-child(5) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
