import objectsMockData from './mocks/objects';

const apiService = {
  getObjects: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { status: 200, data: objectsMockData || [] };
  },
};

export default apiService;
