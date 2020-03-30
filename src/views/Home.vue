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
      <div class="skills">
        <SkillHex percentage="80">JS</SkillHex>
        <SkillHex percentage="75">HTML</SkillHex>
        <SkillHex percentage="85">Vue.js</SkillHex>
        <SkillHex percentage="40">React.js</SkillHex>
      </div>
    </aside>
    <section class="content"></section>
  </div>
</template>

<script>
import SkillHex from '../components/SkillHex.component.vue';

export default {
  components: { SkillHex },
};
</script>

<style lang="scss">
@import '@/scss/_mixins.scss';
#app .home {
  display: grid;
  grid-template:
            "profile content" 100% / 350px 1fr;

  .profile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background: linear-gradient(135deg, darken(teal, 14%), darken(teal, 12%));

    /**
     * SVG Shape behind avatar
     */
    .corner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 350px;
      .left-triangle { fill: darken(teal, 18%); }
    }

    /**
     * Avatar
     */
    .avatar-wrapper {
      position: relative;
      padding: 4px;
      border: 2px solid teal;
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
      margin: 10px 0;
      padding: 5px 30px;
      font-size: 1em;
      &:before, &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        background-color: lighten(teal, 10%);
      }
      &:before {
        top: 0;
        border-bottom: 2px solid darken(teal, 15%);
      }
      &:after {
        bottom: 0;
        border-top: 2px solid darken(teal, 15%);
      }
    }
    /**
     * Skills
     */
    .skills {
      align-self: stretch;
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto;
      grid-auto-flow: row;
      grid-row-gap: 10px;
      grid-column-gap: 10px;
      justify-content: space-evenly;

    }
  }
}
</style>
