import * as z from 'zod';
import {
  CompleteMessage,
  CompleteUser,
  MessageModel,
  UserModel,
} from './index.js';

export const _ChatModel = z.object({
  id: z.string(),
});

export interface CompleteChat extends z.infer<typeof _ChatModel> {
  users: CompleteUser[];
  messages: CompleteMessage[];
}

/**
 * ChatModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ChatModel: z.ZodSchema<CompleteChat> = z.lazy(() =>
  _ChatModel.extend({
    users: UserModel.array(),
    messages: MessageModel.array(),
  })
);
