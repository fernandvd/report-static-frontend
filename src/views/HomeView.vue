<script setup>
import ModalReport from '@/components/ModalReport.vue';
import { onMounted, ref } from 'vue';


const reports = ref([
  {
    title: "Reporte de usuario 1",
    created_at: "04/12/2020",
  },
  {
    title: "Reporte de usuario 2",
    created_at: "04/12/2020",
  },
  {
    title: "Reporte de usuario 3",
    created_at: "04/12/2020",
  },
]);


function openModal() {
  const modal = document.getElementById('modalReport');
  modal.style.display = "block";
}

onMounted(() => {
  window.onclick = function(event) {
    const modal = document.getElementById('modalReport');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})
</script>

<template>
  <main>
    <div class="display-flex container-title mb-10-px mt-10-px">
      <h3 class="text-center">Generador de reportes TK</h3>
    </div>
    <div class="mb-10-px mt-10-px"></div>
    <div class="container-table">
      <table class="table ">
        <thead class="head-table">
          <tr>
            <th class="text-start" scope="col">&nbsp;&nbsp;Titulo</th>
            <th class="text-center" scope="col">Fecha de creación</th>
            <th class="text-end" scope="col">Acción&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody class="container-tbody">
          <tr v-for="item in reports">
            <th scope="row" class="text-start ">
              <div class="border-end-white" style="margin: 5px 0">
                &nbsp;&nbsp;{{ item.title }}
              </div>
            </th>
            <th class="">
              <div class="border-end-white" style="margin: 5px 0">
                {{ item.created_at }}
              </div>
            </th>
            <th class="text-end">
              <button type="button" class="btn-download">
                Descargar
                <img src="@/assets/icon_download.png" alt="icon download" />
              </button>
              &nbsp;&nbsp;
            </th>
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

    <ModalReport />
  </main>
</template>
<style scoped>


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
</style>