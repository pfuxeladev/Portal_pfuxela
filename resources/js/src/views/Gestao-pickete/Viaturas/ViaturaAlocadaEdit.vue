<template>
    <section class="invoice-add-wrapper mt-3">
      <b-row class="invoice-add">
<b-col cols="12">
    <b-form>

 
    <b-form-row>
                <input type="hidden" v-model="form.id" class="form-control">
                <b-col cols="6">
                    <b-form-group label="Viatura">
                        <v-select v-model="form.viatura_id" label="matricula" :options="viatura" :reduce="viatura => viatura.id" @input="getKmActual()" />
                            <span class="alert alert-danger text-danger" v-if="errors !== null">{{ errors.viatura_id[0] }}</span>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group label="Kilometragem anterior">
                        <b-form-input v-model="form.kmActual" readonly />
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col cols="6">
                    <b-form-group label="Leitura da kilometragem actual">
                        <b-form-input v-model="form.manometro_km" type="number" @input="calculaKm()" />
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group label="km percorridos">
                        <b-form-input v-model="form.kmPercorridos" readonly />
                        <span class="alert alert-danger text-danger" v-if="errors !== null">{{ errors.kmPercorridos[0] }}</span>
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col cols="6">
                    <b-form-group label="estimativa de consumo pela distancia percorrida">
                        <b-form-input type="text" readonly v-model="form.qtdActual" />
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group label="Informe a qtd de combustivel existente">
                        <b-form-input v-model="form.manometro_combustivel" type="number" step="0.00" />
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col cols="6">
                    <b-form-group label="motorista escalado">
                        <v-select v-model="form.motorista_id" label="nome" :options="motoristas" :reduce="motoristas => motoristas.id " />
                            <span class="alert alert-danger text-danger" v-if="errors !== null">{{ errors.motorista_id[0] }}</span>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group label="rotas a percorrer">
                        <v-select v-model="form.rota_id" :options="rota" label="nome_rota" :reduce="rota => rota.id" multiple />
                            <span class="alert alert-danger text-danger" v-if="errors !== null">{{ errors.rota[0] }}</span>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-button type="submit" variant="ouline-success">Actualizar</b-button>
                </b-col>
            </b-form-row>
        </b-form>
</b-col>
      </b-row>
    </section>
</template>
<script>
import {
 
  BRow,
  BCol,
  BButton,
  BFormInput,
  BForm,
  BFormRow,
  BFormGroup,
} from 'bootstrap-vue'
export default {
    data(){
        return{}
    },
  components: {
    BRow,
    BCol,
    BButton,
    BFormInput,
    BForm,
    BFormRow,
    BFormGroup,
    },
 setup(){

    const formData = 
    function actualizarForm(){

    }

    return {
        actualizarForm
    }
    }
}
</script>