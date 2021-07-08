<template>
  <div>
    <img :src="bookpic" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title fs-5">{{ booktitle }}</h5>
      <p class="card-text">Autor: {{ bookaut }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">País: {{ autcontry }}</li>
      <li class="list-group-item">Formato: {{ bookform }}</li>
      <li class="list-group-item">Ano: {{ bookyear }}</li>
    </ul>
    <div class="card-body card-buttons">
      <button class="card-link card-button" style="color: red; background: none; border: none" @click="deleteCard()">
        Excluir
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bookpic',
    'booktitle',
    'bookaut',
    'autcontry',
    'bookform',
    'bookyear',
  ],

  methods: {
    deleteCard() {
      if (confirm('Deseja excluir este livro?')) {
        this.$emit('deleteCard')
      }
    }
  }
}

</script>

<style scoped>
.card-body, .list-group, .list-group-item {
  background-color: var(--primary);
}

.card-buttons {
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.card-link {
  text-decoration: none;
  font-weight: 600;
  text-transform: capitalize;
}

.card-button {
  color: red;
  background: none;
  border: none;
  width: auto;
}

.card-button:hover {
  font-size: 1.07rem;
}

.card-link:hover {
  border-bottom: solid 2px var(--secondary);
  box-shadow: none;
}
</style>
