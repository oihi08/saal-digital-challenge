import suppliesMockData from './mocks/supplies';

const apiService = {
  getObjects: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      status: 200,
      data: suppliesMockData || [],
    };
  },
};

export default apiService;
