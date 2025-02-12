import { users } from "../dummyData/data";
const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: (_: any, { userId }: { userId: string }) => users.find((user) => user._id === userId),
  },
  Mutation: {},
};
export default userResolver;
