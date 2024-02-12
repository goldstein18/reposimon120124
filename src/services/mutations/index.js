// This file will be used for similar type of APIs. For APIs which require different setup, please make a new file and call API there

import axios from 'axios';
import { useMutation } from 'react-query';

const useApi = (urlWithOutBase, userToken, customConfig = {}, whenSuccess, whenError) => {
  const defaultConfig = {
    method: 'post', // or 'get', 'put', 'delete', etc.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': userToken ? `Bearer ${userToken}` : '',
      // Add any other common headers here
    },
  };

  const config = {
    ...defaultConfig,
    ...customConfig,
  };

  const fetchData = async body => {
    try {
      const response = await axios.request({
        url: urlWithOutBase,
        data: body,
        ...config,
      });

      return response.data;
    } catch (error) {
      // Handle network errors, failed requests, etc.
      const message =
        error?.response?.data?.message ||
        error?.message
      throw new Error(message);
    }
  };

  return useMutation(fetchData, {
    onSuccess: (responseData) => {
      // console.log('Data sent successfully:', responseData);
      whenSuccess(responseData)
    },
    onError: (err) => {
      // console.log('Error sending data:', err);
      whenError(err)
    }
  });
};

export default useApi;
