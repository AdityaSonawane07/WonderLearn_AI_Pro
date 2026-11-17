import api from './api';

export const childService = {
  getChildren: async () => {
    const response = await api.get('/children');
    return response.data;
  },

  createChild: async (childData) => {
    const response = await api.post('/children', childData);
    return response.data;
  },
};