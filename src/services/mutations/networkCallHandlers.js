import useApi from './index';

const userToken = 'AF95B0C7E874CE517EB742BC8EFAD803218D8A49B77130AC8FE6EFE2B1D607B3'

export const mutationHandler = (url, whenSuccess, whenError) => {
  return useApi(url, userToken, {
    // You can customize headers or other configurations specific to this API call
  }, whenSuccess, whenError);
};