export class CommentEntity {
  public id: number;
  public userId: number;
  public content: string;
  public score: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({
    id,
    userId,
    content,
    score,
    createdAt,
    updatedAt,
  }: {
    id: number;
    userId: number;
    content: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.score = score;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
