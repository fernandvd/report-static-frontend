<script setup>
import ModalReport from '@/components/ModalReport.vue';
import { URL_API } from '@/utils/constants';
import { getToken, getUser, removeStore } from '@/utils/store';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { onMounted, ref } from 'vue';


const showLoginBtn = ref(true);
const user = ref({});
const TOKEN = ref(null);
const reports = ref([
  /*
  {
    id: 1,
    title: "Reporte de usuario 1",
    created_at: "04/12/2020",
  },
  {
    id: 2,
    title: "Reporte de usuario 2",
    created_at: "04/12/2020",
  },
  {
    id: 3,
    title: "Reporte de usuario 3",
    created_at: "04/12/2020",
  },
  */
]);
const isLoading = ref(false);


function openModal() {
  const modal = document.getElementById('modalReport');
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById('modalReport');
  modal.style.display = "none";
}

onMounted(() => {
  window.onclick = function(event) {
    const modal = document.getElementById('modalReport');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  TOKEN.value = getToken();
  if (TOKEN.value) {
    showLoginBtn.value = false;
    listReports();
  }

  user.value = getUser();

})

function listReports() {
  isLoading.value = true;
  axios.get(`${URL_API}list-reports`, {
    headers: {
      'Authorization': `Bearer ${TOKEN.value}` 
    }
  })
  .then(response => {
    reports.value = response.data;
  }).catch(error => {
    alert("No se pudo cargar la información de los reportes");
    console.error(error.response);
  }).finally(() => {
    isLoading.value = false;
  });
}

function cleanStore() {
  removeStore();
  window.location.reload();
}

function generateReport(data) {
  axios.post(`${URL_API}generate-report`, data,{
    headers: {
      'Authorization': `Bearer ${TOKEN.value}` 
    }
  })
  .then(response => {
    console.log("Generate report", response.data)
    
  }).catch(error => {
    alert("No se pudo generar el reporte");
    console.error(error.response);
  }).finally(() => {
    closeModal();
  });
}

function openReport(item) {
  saveAs(`${URL_API.replace('/api/','')}${item.report_link}`, `${item.title}.xlsx`)

}
</script>

<template>
  <main>
    <div class="display-flex mt-10-px ms-10-px"  >
      <nav>
        <RouterLink to="/login" class="link-login" v-if="showLoginBtn">
          Iniciar Sesión 
        </RouterLink>
        <div class="" v-else>
          <span class="me-10-px">Hola {{user.name}}!</span>
          <button type="button" class="btn-gris"  @click="cleanStore">
            Cerrar Sessión
          </button>
        </div>
      </nav>
    </div>
    <div v-if="!showLoginBtn">
      <div class="display-flex container-title mb-10-px mt-10-px">
        <h3 class="text-center">Generador de reportes TK</h3>
      </div>
      <div class="mb-10-px mt-10-px"></div>
      <div class="display-flex content-btn-reload" >
        <button type="button" @click="listReports" class="btn-gris">
          Recargar reportes
        </button>
      </div>
      <div class="display-flex content-btn-reload" v-if="isLoading">
        <p>Cargando ...</p>
      </div>
      <div class="container-table" v-else>
        <table class="table ">
          <thead class="head-table">
            <tr>
              <th class="text-start" style="width: 40%;" scope="col">&nbsp;&nbsp;Titulo</th>
              <th class="text-center" style="width: 30%;" scope="col">Fecha de creación</th>
              <th class="text-end" style="width: 30%;" scope="col">Acción&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody class="container-tbody">
            <tr v-for="item in reports" :key="item.id">
              <th scope="row" class="text-start ">
                <div class="border-end-white" style="margin: 5px 0">
                  &nbsp;&nbsp;{{ item.title }}
                </div>
              </th>
              <th class="">
                <div class="border-end-white" style="margin: 5px 0">
                  {{ item.created_at.slice(0,10) }}
                </div>
              </th>
              <th class="text-end">
                <button type="button" class="btn-download" 
                @click="openReport(item)"
                v-if="item.report_link"
                >
                  Descargar
                  <img src="@/assets/icon_download.png" alt="icon download" />
                </button>
                &nbsp;&nbsp;
              </th>
            </tr>
            <tr v-if="reports.length===0" >
              <td class="" colspan="3">
                No hay reportes
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="display-flex flex-row content-center mt-10-px">
        <button class="btn-dorado" type="button"
        id="btnCreateReport"
        @click="openModal"
        >
          Crear reporte
        </button>
      </div>
    </div>

    <ModalReport 
    @store="generateReport"
    />
  </main>
</template>
<style scoped>

.link-login {
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  margin: 0.2rem auto;
  border-radius: 1rem;
}

.link-login:hover {
  border: 1.5px solid #000;
}

.content-btn-reload {
  margin-left: 20%;
}

.btn-download {
  display: inline-block;
  padding: 0.6rem 0 0.6rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid #4563E6;
  border-radius: 3rem;
  background-color: #4563E6;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}


.head-table {
  font-size: 1.35rem;
  border-bottom: 2px solid #fff;
}

.container-title {
  justify-content: center;
  flex-direction: row;
}

.container-table {
  margin: 2rem 20%;
}

.border-end-white {
  border-right: 4px solid #fff;
}

.container-tbody {
  border-top: 4px solid #fff;
}

tr {
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
}

th {
  padding: 0.5rem 0.5rem;
}

@media (max-width: 900px) {
  .content-btn-reload {
    margin-left: 5%;
  }

  .container-table {
    margin: 2rem 5%;
  }
}

</style>