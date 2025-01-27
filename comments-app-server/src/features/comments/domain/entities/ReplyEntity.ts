export class ReplyEntity {
  public id: number;
  public commentId: number;
  public userId: number;
  public content: string;
  public score: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({
    id,
    commentId,
    userId,
    content,
    score,
    createdAt,
    updatedAt,
  }: {
    id: number;
    commentId: number;
    userId: number;
    content: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.commentId = commentId;
    this.userId = userId;
    this.content = content;
    this.score = score;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
