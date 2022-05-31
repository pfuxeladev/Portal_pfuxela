<template>
<div id="bombas">
    <section>
        <b-card no-body>
            <b-card-header class="pb-50">
                <h5>Filtros</h5>
                <span class="floa-right pull-right" />
                <b-button variant="outline-primary" @click="showModal()">
                    Adicionar nova
                </b-button>
            </b-card-header>
            <b-card-body>
                <b-row>
                    <b-col cols="12" md="6" class="mb-md-0 mb-2">
                        <label>Bombas Registadas</label>
                        <v-select />
                    </b-col>

                </b-row>
            </b-card-body>
        </b-card>
        <b-card no-body class="mb-0">
            <b-row>
                <div class="col-12 col-md-12 table-responsive">
                    <table class="table table-striped table-bordered table-inverse">
                        <thead class="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>Nome da bomba</th>
                                <th>Capacidade</th>
                                <th>disponibilidade</th>
                                <th>tipo</th>
                                <th>Combustivel</th>
                                <th>Cadastrado por</th>
                                <th>
                                    <i class="fas fa-cogs" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(b, index) in bombas" :key="b.id">
                                <td>{{ 1+index }}</td>
                                <td>{{ b.nome_bombas }}</td>
                                <td>{{ b.capacidade }}</td>
                                <td>
                                    <span v-if="b.status == 'disponivel'">
                                        <b-badge variant="success">disponivel</b-badge>
                                    </span>
                                    <span v-if="b.status == 'indisponivel'">
                                        <b-badge variant="danger">indiponivel</b-badge>
                                    </span>
                                    <span v-if="b.status == 'manutencao'">
                                        <b-badge variant="danger">Sub manutencao</b-badge>
                                    </span>
                                </td>
                                <td>{{ b.tipo_bomba }}</td>
                                <td>
                                    <span v-for="comb in b.combustivel" :key="comb.id">
                                        {{comb.tipo_combustivel}},

                                        </span>
                                </td>
                                <td>{{b.created_by.name}}</td>
                                <td class="d-flex justify-content-around">
                                    <span class="btn btn-sm btn-outline-primary" v-on:click="openDetails(b)">
                                        <i class="fas fa-users" />
                                    </span>
                                    <span class="btn btn-sm btn-outline-warning ml-1" v-on:click="openUpdate(b)">
                                        <i class="fas fa-edit" />
                                    </span>
                                    <span v-if="b.tipo_bomba ==='interna'" class="btn btn-sm btn-outline-success ml-1">
                                        <i class="fas fa-gas-pump" />
                                    </span>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </b-row>
            <b-modal id="formBombas" ref="my-modal" size="lg" hide-footer title="Bomba">
                <form @submit.prevent="editMode ? onUpdateForm(): onSubmit() " @reset="onReset" @keydown="form.onKeydown($event)">
                    <b-row>
                        <b-col cols="4">
                            <input v-model="form.id" type="hidden">
                            <b-form-group id="input-group-1" label="Nome da bomba:" label-for="input-1">
                                <b-form-input id="input-1" v-model="form.nome_bombas" type="text" placeholder="Digite o nome da bomba" />
                                <small v-if="form.errors.has('nome_bombas')" class=" alert text-danger" v-html="form.errors.get( 'nome_bombas')" />

                            </b-form-group>
                        </b-col>
                        <b-col cols="4">
                            <b-form-group id="input-group-1" label="Capacidade:" label-for="input-1">
                                <b-form-input id="input-1" v-model="form.capacidade" type="text" />
                                <small v-if="form.errors.has('capacidade')" class=" alert text-danger" v-html="form.errors.get( 'capacidade')" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="4">
                            <b-form-group id="input-group-1" label="Tipo:" label-for="input-1">
                                <v-select v-model="form.tipo_bomba" :options="['interna', 'externa']" />
                                <small v-if="form.errors.has('tipo_bomba')" class=" alert text-danger" v-html="form.errors.get( 'tipo_bomba')" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-checkbox-group v-model="form.combustivel_tipos" :options="options" class="mb-1 d-block" value-field="item" text-field="name" disabled-field="notEnabled" />
                            <div class="mb-1">
                                <!-- Selected: <strong>{{ form.combustivel_tipos }}</strong> -->
                                <b-form-group label="Preco do diesel">
                                <b-form-input type="number" step="0.01" min="0" v-model="form.preco_diesel"></b-form-input>
                                </b-form-group>
                                <b-form-group label="Preco da gasolina">
                                <b-form-input type="number" step="0.01" min="0" v-model="form.preco_gasolina"></b-form-input>
                                </b-form-group>

                            </div>
                            <hr>
                        </b-col>

                        <b-col cols="12">
                            <h4 class="card-title">
                                Responsavel
                            </h4>
                            <span class="btn btn-sm btn-outline-primary" v-on:click="add()">
                                <i class="fas fa-plus"></i>
                            </span>
                        </b-col>
                    </b-row>
                    <b-row v-for="(resp, index) in form.responsavel" ref="responsavel" :key="index">
                        <b-col cols="6">
                            <b-form-group id="input-group-2" label="Nome do responsavel:" label-for="input-2">
                                <b-form-input id="input-2" v-model="resp.nome" type="text" />
                                <!-- <small
                    v-if="form.responsavel[index].errors.has('nome')"
                    class=" alert text-danger"
                    v-html="form.responsavel[index].errors.get( 'nome')"
                  /> -->
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group id="input-group-3" label="Email:" label-for="input-3">
                                <b-form-input id="input-3" v-model="resp.email_bomba" type="email" placeholder="Digite endereco" />
                                <!-- <small
                    v-if="form.responsavel[index].errors.has('email_bomba')"
                    class=" alert text-danger"
                    v-html="form.responsavel[index].errors.get( 'email_bomba')"
                  /> -->
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group id="input-group-4" label="Contacto:" label-for="input-4">
                                <b-form-input id="input-4" v-model="resp.contacto" type="tel" placeholder="Digite contacto" />
                                <!-- <small
                    v-if="form.responsavel[index].errors.has('contacto')"
                    class=" alert text-danger"
                    v-html="form.responsavel[index].errors.get( 'contacto')"
                  /> -->
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group id="input-group-4" label="Contacto alternativo:" label-for="input-4">
                                <b-form-input id="input-4" v-model="resp.contacto_alt" type="tel" placeholder="Digite contacto" />

                            </b-form-group>
                        </b-col>
                        <b-col>
                            <span class="btn btn-sm btn-outline-primary" @click="rmRow">
                                <i class="fas fa-remove"></i>
                            </span>
                        </b-col>
                    </b-row>
                    <b-row>

                        <b-col cols="2">
                            <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">
                                Fechar
                            </b-button>
                        </b-col>
                        <b-col cols="10">
                            <b-button type="submit" class="mt-2 pull-right" variant="outline-primary">
                                {{ editMode ? "Actualizar" : "Adicionar" }}
                            </b-button>
                        </b-col>
                    </b-row>
                </form>

            </b-modal>
            <b-modal ref="responsavel" id="ResponsavelBomba" size="lg" hide-footer title="Responsavel da bomba">
                <b-card>
                    <b-row>
                        <b-col cols="6" md="6" v-for="responsaveis in details.responsavel" :key="responsaveis.id">
                        <b-list-group>
                            <b-list-group-item>Nome: {{responsaveis.nome}}</b-list-group-item>
                            <b-list-group-item>Email: {{responsaveis.email_bomba}}</b-list-group-item>
                            <b-list-group-item>Contacto: {{responsaveis.contacto}}</b-list-group-item>
                            <b-list-group-item>Contacto alternativo: {{responsaveis.contacto_alt}}</b-list-group-item>
                        </b-list-group>
                        </b-col>
                    </b-row>
                    <b-form>
                    <b-row class="mt-1">
                        <b-col cols="12" md="12">
                            <b-list-group>
                                <b-list-group-item v-for="comb in details.combustivel_bomba" :key="comb.id">
                                    <div class="form-group">
                                      <label for="combustivel"> {{comb.combustivel.tipo_combustivel}} </label>
                                      <b-form-input v-model="comb.preco_actual"></b-form-input>
                                    </div>
                                </b-list-group-item>
                            </b-list-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-button type="submit" variant="success">actualizar pre&ccedil;o de combustivel</b-button>
                        </b-col>
                    </b-row>
                    </b-form>
                </b-card>
            </b-modal>
        </b-card>
    </section>
</div>
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
  BBadge,
  BButton,
  BModal,
  BFormRow,
  BFormInput,
  BForm,
  BFormText,
  BFormGroup,
  BFormCheckboxGroup,
  BFormCheckbox,
  BListGroup,
  BListGroupItem,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import
Form
from 'vform'

export default {
  name: 'Bombas',
  show: true,
  editMode: false,
  components: {
    BCollapse,
    BCardSubTitle,
    BCardTitle,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BBadge,
    vSelect,
    BFormGroup,
    BButton,
    BModal,
    BFormRow,
    BFormInput,
    BForm,
    BFormText,
    BFormCheckboxGroup,
    BFormCheckbox,
    BListGroup,
    BListGroupItem,
  },
  data() {
    return {
      editMode: false,
      options: [{
        item: 'Gasolina',
        name: 'Gasolina',
      },
      {
        item: 'Gasoleo',
        name: 'Diesel',
      },
      ],
      bombas: [],
      details: {
        responsavel: [],
        combustivel: [],
      },
      form: new Form({
        id: null,
        nome_bombas: '',
        capacidade: '',
        tipo_bomba: '',
        combustivel_tipos: [],
        //   responsavel
        preco_diesel: 0,
        preco_gasolina: 0,
        responsavel: [{
          nome: '',
          email_bomba: '',
          contacto: '',
          contacto_alt: '',
        }, ],
        unit_measure: null,

      }),
    }
  },
  created() {
    this.$http.get('/api/bombas').then(res => {
      this.bombas = res.data
    })
  },
  methods: {
    showModal() {
      this.editMode = false
      this.$refs['my-modal'].show()
      this.form.reset()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    add() {
      this.form.responsavel.push({
        nome: '',
        email_bomba: '',
        contacto: '',
        contacto_alt: '',
      })
    },
    rmRow(index) {
      this.form.responsavel.splice(index, 1)
    },
    returnBombas() {
      this.$http.get('/api/bombas').then(res => {
        this.bombas = res.data
      })
    },
    onSubmit(event) {
      this.$Progress.start()
      this.form.post('/api/bombas').then(res => {
        this.$swal.fire({
          icon: 'success',
          title: res.data.message,
        })
        Fire.$emit('afterAction')
        this.form.clear()
        this.form.reset()
        this.$Progress.finish()
        this.returnBombas()
        this.hideModal()

      }).catch(err => {
        this.$swal.fire({
          icon: 'error',
          title: 'Erro ao tentar adicionar!',
        })
        this.$Progress.fail()
      })
    },
    openUpdate(b) {
      this.$refs['my-modal'].show()
      this.form.fill(b)
      this.editMode = true
    },
    openDetails(b) {
      this.details = b
      //   document.getElementById('ResponsavelBomba').show()
      this.$refs['responsavel'].show()
    },
    onUpdateForm() {
      this.$Progress.start()
      this.form.put(`/api/bombas/${this.form.id}`).then(res => {
        this.$swal.fire({
          icon: 'success',
          title: res.data.message,
        })
        this.form.clear()
        this.$Progress.finish()
        this.returnBombas()
        this.hideModal()
      }).catch(err => {
        if (err) {
          this.$swal.fire({
            icon: 'error',
            title: 'Erro ao tentar adicionar!',
          })
        }

        this.$Progress.fail()
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
