<template>
  <div class="home">
    <aside class="profile"></aside>
    <section class="content"></section>
  </div>
</template>

<style lang="scss">
#app .home {
  display: grid;
  grid-template:
            "profile content" 100% / 300px 1fr;

  .profile {
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, darken(teal, 15%) 0%, darken(teal, 14%) 100%);
  }
}
</style>
