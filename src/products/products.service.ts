import { Injectable } from "@nestjs/common";
import { User } from "../users/users.service";

@Injectable()
export class ProductsService {

  public getUser(): User {
    return { id: "a", name: "name" }
  }

}
