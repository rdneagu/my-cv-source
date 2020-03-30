<template>
  <div class="home">
    <aside class="profile">
      <svg class="corner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon class="left-triangle" points="0 0, 100 0, 0 75" />
      </svg>
      <div class="avatar-wrapper">
        <div class="avatar"></div>
      </div>
      <div class="name-wrapper">
        <span class="name first-name">Robert</span>
        <span class="name last-name">Neagu</span>
      </div>
      <div class="role">Full-Stack Web Developer</div>
      <div v-for="(category, id) in skills" :key="id" class="skills-container" :class="[ `skills-${id}` ]">
        <label class="skills-label">{{ id.toUpperCase() }} SKILLS</label>
        <div class="honeycomb">
          <SkillHex v-for="(skill, id) in category" :key="id" v-bind="skill">{{ skill.name }}</SkillHex>
        </div>
      </div>
    </aside>
    <section class="content"></section>
  </div>
</template>

<script>
import SkillHex from '../components/SkillHex.component.vue';

export default {
  components: { SkillHex },
  data() {
    return {
      skills: {
        frontend: [
          { name: 'HTML', percentage: 70, icon: 'html5' },
          { name: 'SCSS', percentage: 85, icon: 'css3' },
          { name: 'Vue.js', percentage: 70, icon: 'vuejs' },
          { name: 'React.js', percentage: 40, icon: 'react' },
          { name: 'JS', percentage: 85, icon: 'javascript' },
        ],
        backend: [
          { name: 'node.js', percentage: 60, icon: 'nodejs' },
          { name: 'Database', percentage: 55, icon: 'mysql' },
        ],
        relevant: [
          { name: 'Linux', percentage: 55, icon: 'linux' },
          { name: 'Python', percentage: 40, icon: 'python' },
          { name: 'Java', percentage: 30, icon: 'java' },
          { name: 'AWS', percentage: 20, icon: 'amazonaws' },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import '@/scss/_mixins.scss';
#app .home {
  display: grid;
  grid-template: "profile content" 100% / 350px 1fr; // Shorthand: "area-name" row-size / column-size
  .content {
    background: darken($color-cyan, 44%);
  }
  .profile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background: linear-gradient(135deg, darken($color-cyan, 40%), darken($color-cyan, 34%));

    /**
     * SVG Shape behind avatar
     */
    .corner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 350px;
      .left-triangle { fill: darken($color-cyan, 42%); }
    }

    /**
     * Avatar
     */
    .avatar-wrapper {
      position: relative;
      padding: 4px;
      border: 2px solid $color-cyan;
      border-radius: 100%;
      margin: 30px 0;
      .avatar {
        height: 150px;
        width: 150px;
        background: url(../assets/avatar.jpg) center top / 200%;
        border-radius: inherit;
      }
    }

    /**
     * Name
     */
    .name-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      .name {
        margin: 0 6px;
        font-size: 2.5em;

        &.last-name {
          font-weight: 700;
        }
      }
    }

    /**
     * Role
     */
    .role {
      position: relative;
      margin: 10px 0 40px 0;
      padding: 5px 30px;
      font-size: 1em;
      background-color: darken($color-cyan, 40%);
      &:before, &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        background-color: $color-cyan;
      }
      &:before {
        top: 0;
        border-bottom: 2px solid darken($color-cyan, 40%);
      }
      &:after {
        bottom: 0;
        border-top: 2px solid darken($color-cyan, 40%);
      }
    }
    /**
     * Skills
     */
    .skills-container {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      .skills-label {
        padding: 5px 8px;
        border-bottom: 1px solid $color-cyan;
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
  }
}
</style>
