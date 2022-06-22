import axios from 'axios';

// cria uma instance Axios com a URL base do Web Service a ser acessado pelo app
export const inAxios = axios.create({baseURL: 'https://4e50-2804-dd0-100d-88b-e182-f904-2f34-71f.sa.ngrok.io/'});