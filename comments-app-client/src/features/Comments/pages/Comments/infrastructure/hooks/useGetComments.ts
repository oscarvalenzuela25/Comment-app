import { useQuery } from '@tanstack/react-query';
import getComments from '../service/getComments';

const useGetComments = () => {
  const {
    data = [],
    isFetching,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['getComments'],
    queryFn: () => getComments(),
    retry: false,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return {
    commentsData: data,
    commentsIsFetching: isFetching,
    commentsIsLoading: isLoading,
    commentsIsSuccess: isSuccess,
    commentsIsError: isError,
  };
};

export default useGetComments;
