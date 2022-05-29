# Private messaging

- As Cindy, when I'm chatting with Max, I want to see who I'm chatting with.

- As Cindy, I want to send Max a text-only message.

- As Cindy, I want to send Max a message with bold, italics, underlines, block quotes,
  and code blocks.

- (As Cindy, I want to send Max a message with a picture.)

- As Cindy, I want to send Max a message with a link to a video.

- (As Cindy, I want to edit a message I've sent.)

- As Cindy, I want to see the messages that Max sends me.

  - Need to subscribe to message updates -- websockets?

- As Cindy, I want to click on Gregor's profile and start a conversation.

# User

- id

- username

  - disambiguation -- username#1234

- Avatar

  - has a default
  - editable

- About me

  - markdown
  - editable
  - max length: 200 chars

- Profile color

  - If the avatar is not set, the default color should be random.
    - Test that a color is generated
  - The default profile color should be based on the avatar's colors.
  - When the avatar changes, the default profile color should change.
    - Test
