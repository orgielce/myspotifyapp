import {EndpointUser, UserModel} from "../models/index";

export const createAdapterUser = (user: EndpointUser) => {
  const formatteduser: UserModel = {
    name: user.name,
    lastName: user.last_name,
  };
};
