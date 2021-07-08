<template>
  <div id="header">

    <div class="container">

      <div class="windowButtons fs-6">
        <button class="close" @click="closeApp()">X</button>

      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand">
          <img src="../../../assets/logo.svg" class="img-fluid" alt=""/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active fs-5" aria-current="page" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link active fs-5" aria-current="page" to="/register">Adicionar livro</router-link>
            </li>

          </ul>


        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {
    closeApp() {
      window.close()
    }
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  background-color: var(--primary);
  margin-bottom: 14px;
}

#header .windowButtons {
  position: absolute;
  right: 0;
  top: 0;

}

#header .close{
  background-color: transparent;
  border: none;
  padding: 0 1rem;
}

#header .close:hover{
  transition: 0.1s;
  color: white;
  background-color: red;
}

#header .navbar-collapse {
  width: auto;
}

#header .nav-link {
  text-transform: uppercase;
  font-weight: 500;
  padding-left: 0;
  padding-right: 0;
  color: black;
  border-bottom: solid 2px transparent;
}

#header .nav-link:hover {
  color: var(--secondary);
  border-bottom: solid 2px var(--secondary);
}

@media (min-width: 992px) {
  #header .nav-link {
    margin-left: 15px;
    margin-right: 15px;

  }
}

@media (max-width: 992px) {
  #header .navbar-collapse {
    width: 100%;
  }
}
</style>
