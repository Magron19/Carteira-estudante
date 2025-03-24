const app = Vue.createApp({
  data() {
      return {
          nome: '',
          instituicao: '',
          curso: '',
          novaTarefa: '',
          tarefas: [],
          modoEscuro: false,
          carteiraCompleta: false
      };
  },
  methods: {
      adicionarTarefa() {
          if (this.novaTarefa.trim() !== '') {
              this.tarefas.push(this.novaTarefa);
              this.novaTarefa = '';
          }
      },
      alternarEstadoCarteira() {
          this.carteiraCompleta = !this.carteiraCompleta;
      }
  }
});
app.mount('#app');
