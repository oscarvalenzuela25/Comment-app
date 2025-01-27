import { CommentsResponse } from '../datasource/CommentsDatasourceImp';

export type CommentsMapped = {
  id: number;
  content: string;
  createdAt: Date;
  score: number;
  user: {
    image: string;
    username: string;
  };
  replies?: {
    id: number;
    content: string;
    createdAt: Date;
    score: number;
    replyingTo: string;
    user: {
      image: string;
      username: string;
    };
  }[];
};

export class GetCommentsMapper {
  static execute(data: CommentsResponse[]): CommentsMapped[] {
    return data.map(comment => {
      const response = {
        id: comment.id,
        content: comment.content,
        createdAt: comment.createdAt,
        score: comment.score,
        user: {
          image: comment.User?.avatar || '',
          username: comment.User?.username || '',
        },
        replies: comment.Replies?.map(reply => ({
          id: reply.id,
          content: reply.content,
          createdAt: reply.createdAt,
          score: reply.score,
          replyingTo: comment.User?.username || '',
          user: {
            image: reply.User?.avatar || '',
            username: reply.User?.username || '',
          },
        })),
      };
      return response;
    });
  }
}
