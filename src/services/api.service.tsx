import suppliesMockData from './mocks/supplies';
import personnelMockData from './mocks/personnel';

const apiService = {
  getObjects: async (tab: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      status: 200,
      data: tab === 'supplies' ? suppliesMockData : personnelMockData || [],
    };
  },
};

export default apiService;
