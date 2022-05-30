import * as z from 'zod';
import { ChatModel, CompleteChat } from './index.js';

export const _MessageModel = z.object({
  id: z.string(),
  chatId: z.string(),
});

export interface CompleteMessage extends z.infer<typeof _MessageModel> {
  chat: CompleteChat;
}

/**
 * MessageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const MessageModel: z.ZodSchema<CompleteMessage> = z.lazy(() =>
  _MessageModel.extend({
    chat: ChatModel,
  })
);
