<script setup lang="ts">
import { ref } from 'vue';
import InputForm from './InputForm.vue';


const form = ref({
    title: '',
    birth_date_start: '',
    birth_date_end: '',
});

function closeModal() {
  const modal = document.getElementById('modalReport');
  modal.style.display = "none";
}

defineEmits(['store'])
</script>

<template>

    <div class="modal" id="modalReport">
        <div class="modal-content">
            <div class="modal-header">
                
                <h4 class="text-center">
                    Reporte por fecha de nacimiento
                </h4>
            </div>
            <div class="modal-body">
                <p class="text-center text-muted">
                    Ingresa los siguientes datos para generar tu reporte
                </p>
                <div class="display-flex flex-row ">
                    <div class="content-description">
                        <InputForm 
                        :label="'Descripción del reporte'"
                        v-model="form.title"
                        />
                    </div>
                </div>
                <div class="display-flex flex-row">
                    <p class="p-nacimiento">
                        Fecha de nacimiento
                    </p>
                </div>
                <div class="display-flex flex-row content-date flex-wrap">
                    <div class="content-fecha-inicio">
                        <InputForm 
                        :label="'Inicio'"
                        :type="'date'"
                        v-model="form.birth_date_start"
                        />
                    </div>
                    <div class="content-fecha-fin">
                        <InputForm 
                        :label="'Fin'"
                        :type="'date'"
                        v-model="form.birth_date_end"
                        />
                    </div>
                </div>

                <div class="display-flex flex-row justify-center mb-10-px">
                    <button type="button"
                    class="content-btn-generar-reporte"
                    :class="{
                        'btn-dorado': form.title && form.birth_date_end && form.birth_date_start,
                        'btn-gris': !(form.title && form.birth_date_end && form.birth_date_start),
                    }"
                    @click="() => {
                        $emit('store', {
                            'title': form.title,
                            'birth_date_start': form.birth_date_start,
                            'birth_date_end': form.birth_date_end
                        });
                        form.title = '';
                        form.birth_date_end = '';
                        form.birth_date_start = '';
                    }
                    "
                    >
                        Generar reporte 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-muted {
    color: #6c757d;
    margin-bottom: 0.5rem;
}

.content-description {
    flex: 0 0 100%
}

.p-nacimiento {
    color: dimgray;
    font-size: 12px;
    margin-bottom: 0.5rem;
}

.content-date {
    justify-content: space-between;
}

.content-fecha-inicio {
    flex: 0 0 49%;
    margin-bottom: 0.5rem;
}

.content-fecha-fin {
    flex: 0 0 49%;
    margin-bottom: 0.5rem;
}

.justify-center {
    justify-content: center;
}
.content-btn-generar-reporte {
    flex: 0 0 auto;
}

@media (max-width: 900px) {
    .content-fecha-inicio {
        flex: 0 0 100%;
        margin-bottom: 0.5rem;
    }

    .content-fecha-fin {
        flex: 0 0 100%;
        margin-bottom: 0.5rem;
    }
}
</style>