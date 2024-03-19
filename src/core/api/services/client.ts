import { feathers } from '@feathersjs/client';
import rest from '@feathersjs/rest-client';

const app = feathers();
const restClient = rest(import.meta.env.VITE_API_URL);
export const API = app.configure(restClient.fetch(window.fetch.bind(window)));