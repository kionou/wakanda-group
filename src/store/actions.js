import axios from '@/lib/axiosConfig';

 export default{

  fetchCountries: async ({ commit }) => {
    try {
      // Ajoutez le paramètre "lang=fr" pour demander les données en français
      const response = await axios.get('countries');
      const countries = response.data?.data;
      
      const options = countries
    

      commit('SET_COUNTRY_OPTIONS', options); // Appeler la mutation pour mettre à jour la liste des pays
    } catch (error) {
      console.error('Erreur lors de la récupération des données des pays:', error);
    }
  },
  
 



 }
