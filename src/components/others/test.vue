<template>
    <div class="scroll-container">
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(category, index) in displayedCategories" :key="index">
            <tr style="background-color: #7BA904; color: white;">
              <td colspan="3"><strong>{{ category.id }} - {{ category.title }}</strong></td>
            </tr>
            <tr v-for="(sub, subIndex) in category.subcategories" :key="subIndex">
              <td></td>
              <td>{{ sub.id }}</td>
              <td>{{ sub.name }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <!-- Loader -->
      <div v-if="loading" class="loader">Chargement...</div>
      <!-- Élément cible pour déclencher le scroll infini -->
      <div ref="loadMoreTrigger"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const categories = ref([
    { id: "OS 11", title: "Contribuer au programme accéléré pour la sécurité alimentaire", subcategories: [
      { id: "IR-3.1", name: "Part de la superficie agricole sous les pratiques de gestion durable de la terre" },
      { id: "IR-3.3", name: "Nombre de personnes en insécurité alimentaire (phase 2 à 5 du Cadre Harmonisé - CH2) en situation courante" },
    ]},
    { id: "OS 2", title: "Augmenter durablement la croissance agricole et le commerce agricole", subcategories: [
      { id: "2.1", name: "Augmentation des niveaux actuels de production et de productivité" },
      { id: "2.2", name: "Accroissement du commerce régional intra-africain et meilleur fonctionnement des marchés nationaux et régionaux" },
      { id: "2.3", name: "Amélioration de la gestion des risques dans l’agriculture" },
      { id: "2.4", name: "Améliorer la gestion des ressources naturelles pour un développement durable de l’agriculture" },
    ]},
    // Ajouter d'autres catégories ici...
  ]);
  
  const displayedCategories = ref([]);
  const page = ref(0);
  const loading = ref(false);
  const loadMoreTrigger = ref(null);
  
  const loadMore = () => {
    if (loading.value) return;
  
    loading.value = true;
    setTimeout(() => {
      const start = page.value * 3; // Nombre de catégories à afficher par page
      const end = start + 3;
      displayedCategories.value = [...displayedCategories.value, ...categories.value.slice(start, end)];
  
      if (end >= categories.value.length) {
        observer.disconnect();
      }
      
      page.value++;
      loading.value = false;
    }, 1000);
  };
  
  let observer;
  onMounted(() => {
    loadMore(); // Charger les premiers éléments
  
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });
  
    if (loadMoreTrigger.value) {
      observer.observe(loadMoreTrigger.value);
    }
  });
  </script>
  
  <style scoped>
  .scroll-container {
    max-height: 500px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #7BA904;
    color: white;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .loader {
    text-align: center;
    padding: 10px;
    font-weight: bold;
  }
  </style>
  