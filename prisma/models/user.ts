import * as z from 'zod';
import { ChatModel, CompleteChat } from './index.js';

export const _UserModel = z.object({
  id: z.string(),
  username: z.string(),
  avatarURL: z.string().nullish(),
  aboutMe: z.string(),
  profileColor: z.string(),
});

export interface CompleteUser extends z.infer<typeof _UserModel> {
  chats: CompleteChat[];
}

/**
 * UserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  _UserModel.extend({
    chats: ChatModel.array(),
  })
);
