<script>
  import Container from "../../utils/Container.vue";
  import Nav from "../../layouts/nav/Nav.vue";
  import Hero from "../../components/hero/Hero.vue";

  export default {
    components: {
      Container,
      Nav,
      Hero
    },
  }
</script>

<template>
  <div class="home__wrapper">
    <Container>
      <header>
        <Nav/>
        <Hero/>
      </header>
    </Container>
  </div>
</template>

<style>
  .home__wrapper{
    width: 100%;
    padding: 1rem;
  }

  header{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>