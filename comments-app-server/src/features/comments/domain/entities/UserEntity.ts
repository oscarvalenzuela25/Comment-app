export class UserEntity {
  public id: number;
  public username: string;
  public avatar?: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({
    id,
    username,
    avatar,
    createdAt,
    updatedAt,
  }: {
    id: number;
    username: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
