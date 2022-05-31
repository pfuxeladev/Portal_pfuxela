<template>
  <section
    title="Novo-abastecimento"
    class="invoice-add-wrapper"
  >
    <b-card no-body>
      <b-card-header class="pb-50">
        <h3>Novo Abastecimento</h3>
      </b-card-header>
    </b-card>
    <b-row>
      <b-col
        cols="12"
        class="invoice-add"
      >

        <b-form
          @submit.prevent="NovaOrdem()"
          @reset="onReset"
          @keydown="form.onKeydown($event)"
        >
          <b-card
            no-body
            class="invoice-preview-card p-2"
          >
            <b-row>
              <b-col
                md="12"
                xl="12"
              >
                <b>Refs</b>:  {{form.ordem_id}}
              </b-col>
              <hr>
            </b-row>
            <b-row>
              <b-col
                cols="12"
                xl="12"
              >
                <b-card-body class="invoice-padding form-item-section">
                  <div class="table-responsive">
                    <table class="table table-bordered table-stripped">
                      <thead class="thead-light">
                        <tr>
                          <th class="text-danger">
                            <i class="fas fa-remove" />
                          </th>
                          <th>viatura(matr)</th>
                          <th>projecto</th>
                          <th>Rota</th>
                          <th>Qtd(<small class="text-lowercase">ltr</small>)</th>
                          <th>Turno</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(abs, index) in form.abastecer"
                          :key="index"
                        >
                          <td style="width:2%">
                            <span
                              class="btn btn-sm btn-outline-danger"
                              @click="rmRow(index)"
                            >
                              <i class="fas fa-trash" />
                            </span>

                          </td>
                          <td style="width:20%">
                            <v-select
                              v-model="abs.viatura_id"
                              label="matricula"
                              :options="viatura"
                              :reduce="(viatura) => viatura.id"
                            />
                            ({{rec_abast}})
                          </td>
                          <td style="width:20%">
                            <v-select label="name" v-model="abs.projecto_id" :options="projecto" :reduce="projecto=>projecto.id"
                             @input="fetchRotas"/>
                          </td>
                          <td style="width:30%">
                            <v-select
                              multiple
                              v-model="abs.rota_id"
                              label="nome_rota"
                              :options="rota"
                              :reduce="(rota)=>rota.id"
                            />

                          </td>
                          <td>
                            <b-form-input
                              v-model="abs.qtd_abastecer"
                              type="number"
                              placeholder="Qtd em litros"
                            />

                          </td>
                          <td style="width:10%">
                            <v-select
                              v-model="abs.turno"
                              :options="['manha','tarde']"
                            />

                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td
                            colspan="6"
                            class="content-align-right"
                          >
                            <span
                              class="btn btn-outline-primary btn-sm"
                              @click="add()"
                            >
                              <i class="fas fa-plus" />
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </b-card-body>

              </b-col>
            </b-row>
            <b-row>
              <b-col cols="10">
                <b-button
                  type="reset"
                  variant="secondary"
                >
                  limpar campos
                </b-button>
              </b-col>
              <b-col
                cols="2"
                class="pull-right float-right"
              >
                <b-button
                  type="submit"
                  variant="outline-success"
                >
                  enviar
                </b-button>

              </b-col>
            </b-row>
          </b-card>
        </b-form>

      </b-col>

    </b-row>
  </section>
</template>

<script>
import {
  BCard,
  BCardTitle,
  BCardSubTitle,
  BCardBody,
  BCollapse,
  BCardHeader,
  BRow,
  BCol,
  BButton,
  BModal,
  BFormRow,
  BFormInput,
  BForm,
  BFormText,
  BFormGroup,
  BLink,
  BBadge,
  BFormTextarea,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Form from 'vform'

export default {
  components: {
    BCollapse,
    BCardSubTitle,
    BCardTitle,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
    BFormGroup,
    BButton,
    BModal,
    BFormRow,
    BFormInput,
    BForm,
    BFormText,
    BLink,
    BBadge,
    BFormTextarea,
  },
  data() {
    return {
      viatura: [],
      rota: [],
      projecto: [],
      rec_abast: null,
      bombas: [],
      form: new Form({
        ordem_id: this.$route.params.refs,

        abastecer: [{
          projecto_id: null,
          viatura_id: null,
          rota_id: null,
          qtd_abastecer: 0,
          observacao: null,
        }],
      }),

    }
  },
  created() {
    this.fetchProjectos()
    // this.fetchRotas()
    this.fetchViaturas()
    this.fetchBombas()
    // single data
    this.getQtd()
  },
  methods: {
    add() {
      this.form.abastecer.push({
        projecto_id: null,
        viatura_id: null,
        rota_id: null,
        qtd_abastecer: 0,
        observacao: null,
      })
    },
    rmRow(index) {
      this.form.abastecer.splice(index, 1)
    },
    getQtd() {
      //   alert(viatura_id)
      this.$http.get(`/api/getQtdDisponivel/${this.form.abastecer.viatura_id}`).then(res => {
        this.rec_abast = res.data
        console.log(this.rec_abast)
      }).catch(err => {

      })
    },
    fetchProjectos() {
      this.$http.get('/api/listProject').then(response => {
        this.projecto = response.data
      }).catch(err => {
        console.log(err)
      })
    },

    fetchRotas() {
      console.log(this.form.abastecer)
      for (let i = 0; i < this.form.abastecer.length; i++ ) {
        this.$http.get(`/api/RotaByProject/${this.form.abastecer[i].projecto_id}`).then(res => {
          this.rota = res.data
          if (res.data === '') {
            this.$swal.fire({
              icon: 'error',
              title: 'Nao existe nenhuma rota cadastrada!',
            })
          }
        }).catch(err => {
          this.$swal.fire({
            icon: 'error',
            title: 'Erro ao tentar buscar!',
          })
        })
      }
    },
    fetchBombas() {
      this.$http.get('/api/bombas').then(res => {
        this.bombas = res.data
      })
    },
    fetchViaturas() {
      this.$http.get('/api/listarViaturas').then(res => {
        this.viatura = res.data
      })
    },
    NovaOrdem() {
      this.$Progress.start()
      this.form.post('/api/Abastecimento').then(res => {

        this.$swal.fire({
          icon: 'error',
          title: res.data.success,
        })
        this.$Progress.finish()
        this.$router.push({
          name: 'Supply',
        })
        this.form.reset()
      }).catch(err => {
        if (err) {
          this.$swal.fire({
            icon: 'error',
            title: 'Erro ao tentar adicionar!',
          })
          this.$Progress.fail()
        }
      })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.reset()
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },

}
</script>
