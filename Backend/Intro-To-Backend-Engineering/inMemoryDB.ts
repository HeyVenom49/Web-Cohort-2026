type UserID = number;

interface User {
  id: UserID;
  fname: string;
  lname?: string;
  contact: {
    mobile: number;
  };
  address: {
    street: number;
    pin: number;
    country: string;
  };
}

class InMemoryDB {
  private _db: Map<UserID, User>;

  constructor() {
    this._db = new Map();
  }

  public insertUser(data: User): UserID {
    if (this._db.has(data.id)) {
      throw new Error(`User with ID ${data.id} already exists`);
    }
    this._db.set(data.id, data);
    return data.id;
  }

  public updateUser(id: UserID, updateData: Omit<User, "id">): boolean {
    if (!this._db.has(id))
      throw new Error(`User with this ${id} does not exists in database`);
    this._db.set(id, { ...updateData, id });
    return true;
  }

  public getUser(id: UserID): User {
    if (!this._db.has(id))
        throw new Error(`User with this ${id} does not exists in database`);
    return this._db.get(id)!;
  }
}

const myDB = new InMemoryDB();

myDB.insertUser({
  id: 1,
  fname: "demo",
  //   lname: "123",
  address: {
    country: "India",
    pin: 144411,
    street: 27,
  },
  contact: {
    mobile: 9876543210,
  },
});

myDB.updateUser(1, {
  fname: "new",
  contact: { mobile: 123 },
  address: { street: 1, pin: 123, country: "India" },
});

console.log(myDB.getUser(1));