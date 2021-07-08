<template>
  <div class="parent-div">

    <form class="d-flex">
      <input class="form-control me-2 fs-5 search" type="search" @input="filter = $event.target.value"
             placeholder="Pesquisar" aria-label="Search">
    </form>

    <div class="container-fluid" id="table">
      <nav>
        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
          <button class="nav-link active book-tab-f" id="nav-fisico-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                  type="button" role="tab" aria-controls="nav-home" aria-selected="true" @click="toPhysical()">Livros
            Físicos
          </button>
          <button class="nav-link book-tab-d" id="nav-digital-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                  type="button" role="tab" aria-controls="nav-profile" aria-selected="false" @click="toDigital()">Livros
            Digitais
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">

        <ul class="tab-pane fade show active overflow-auto flex-wrap" id="nav-home"
            aria-labelledby="nav-home-tab" v-show="physical">
          <li class="card" style="width: 12rem; height: min-content;" v-for="(book, index) in filteredPhysicalBooks"
              :key="index">
            <card :bookpic="book.bookpic" :booktitle="book.booktitle"
                  :bookaut="book.bookaut" :autcontry="book.autcontry"
                  :bookform="book.bookform" :bookyear="book.bookyear" @deleteCard="deletePhysicalBook(book.id)">
            </card>
          </li>
        </ul>

        <ul class="tab-pane fade overflow-auto flex-wrap" id="nav-profile"
            aria-labelledby="nav-home-tab" v-show="digital">
          <li class="card" style="width: 12rem; height: min-content;" v-for="(book, index) in filteredDigitalBooks"
              :key="index">
            <card :bookpic="book.bookpic" :booktitle="book.booktitle"
                  :bookaut="book.bookaut" :autcontry="book.autcontry"
                  :bookform="book.bookform" :bookyear="book.bookyear" @deleteCard="deleteDigitalBook(book.id)">
            </card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../shared/card/Card';

export default {

  components: {
    card: Card
  },

  data() {
    return {
      physicalBooks: [],
      digitalBooks: [],
      filter: '',
      physical: true,
      digital: false
    }
  },

  created() {
    this.getBook()
  },

  computed: {
    filteredPhysicalBooks() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.physicalBooks.filter(book => exp.test(book.booktitle))
      } else {
        return this.physicalBooks;
      }
    },

    filteredDigitalBooks() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.digitalBooks.filter(book => exp.test(book.booktitle))
      } else {
        return this.digitalBooks;
      }
    },
  },

  methods: {
    getBook: function () {
      if (this.$firebase.database().ref('physicalBooks')) {

        const ref = this.$firebase.database().ref('physicalBooks')

        ref.on('value', data => {
          const values = data.val()
          this.physicalBooks = Object.keys(values).map(i => values[i])
        })
      }

      if (this.$firebase.database().ref('digitalBooks')) {
        const ref = this.$firebase.database().ref('digitalBooks')

        ref.on('value', data => {
          const values = data.val()
          this.digitalBooks = Object.keys(values).map(i => values[i])
        })
      }

    },


    deletePhysicalBook(id) {
      this.$firebase.database().ref('physicalBooks').child(id).remove().preventDefault()
    },

    deleteDigitalBook(id) {
      this.$firebase.database().ref('digitalBooks').child(id).remove().preventDefault()
    },


    toPhysical() {
      this.physical = true
      this.digital = false
    },

    toDigital() {
      this.physical = false
      this.digital = true
    }

  },


}
</script>
<style>
#table .nav-tabs {
  border: none;
}

#table .book-tab-f, #table .book-tab-d {
  text-transform: lowercase;
  margin-right: 2px;
  margin-left: 2px;
  font-weight: 500;
  background: var(--primary);
  color: black;
  width: 140px;
}

#table .book-tab-f:hover, #table .book-tab-d:hover {
  background: var(--secondary-light);
  box-shadow: 1px 1px 5px black;
}

#table .tab-pane {
  display: flex;
  flex-direction: row;
  height: 77vh;
  background: var(--secondary-light);
  border: solid 2px var(--primary);
}


#table .card {
  margin: 2.55rem 3.2rem;
  background-color: var(--primary);
}

@media (max-width: 598px) {
  #table .tab-pane {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
}

.search {
  position: absolute;
  width: 20rem;
  margin: 0.5rem;
  right: 15rem;
  top: 20px;
}

@media (max-width: 1092px) {
  #table .card {
    width: auto;
  }
}

@media (max-width: 350px) {
  #table .nav-link {
    border: none;
    margin: 0.5rem;
    border-radius: 5px;
  }
}

@media (max-width: 770px) {
  .search {
    position: initial;
    width: 15rem;
  }
}


@media (max-width: 770px) {
  .parent-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
