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
    </aside>
    <section class="content"></section>
  </div>
</template>

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
  }
}
</style>
