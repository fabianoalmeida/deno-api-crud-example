export interface User {
  _id: {
    $oid: string;
  };
  name: string;
  email: string;
  create_at: Date;
  update_at: Date;
}