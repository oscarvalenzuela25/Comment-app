import { useRef, useEffect } from 'react';
import useGetComments from '../infrastructure/hooks/useGetComments';

const useComments = () => {
  const endOfPageRef = useRef<HTMLDivElement>(null);
  const { commentsData, commentsIsLoading } = useGetComments();

  useEffect(() => {
    if (!commentsIsLoading) {
      endOfPageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commentsIsLoading]);

  return {
    endOfPageRef,
    commentsData,
    commentsIsLoading,
  };
};

export default useComments;
