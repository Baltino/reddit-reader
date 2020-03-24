# Reddit reader

## Features
- [x] Pagination support
- [] Saving pictures in the picture gallery
- [x] App state-preservation/restoration
- [x] Indicator of unread/read post (updated status, after post it’s selected)
- [x] Dismiss Post Button (remove the cell from list. Animations required)
- [x] Dismiss All Button (remove all posts. Animations required)
- [x] Support split layout (left side: all posts / right side: detail post)
- [x] Responsive design

### Each entry is formatted as
- Title (at its full length)
- Author
- Entry date, following a format like “x hours ago” 
- A thumbnail for those who have a picture.
- Number of comments
- Unread status

## Decisions
I added eslint from scratch since I feel more comfortable working with it. Don't know if I will be able to provide a 100% linted codebase with success, I surely will with more time.

Taking a look at the video, the left menu is always visible when the screen is wide enough. On the contrary, it behaves like a swipe menu when the screen is not wide enough. So I might render a swipe menu only when the screen space is tight.
I have decided to use the Sagas pattern with Redux, because I feel more comfortable with it.

Regarding the sidebar: I have found `react-sidebar`, the swipe has been disabled for iOS because of the feature "swipe-to-back". Even though the video suggests the functionality works on an iOS device, I decided to continue with this library.

Checking how to paginate the reddit listing, is somewhat different I'm used to.

I don't understand what should I propose to download the image to the gallery, since when pressing an image a pop up shows different actions regarding the image. Within this options we can find "download".

On purpose the first time the list is rendered, I don't want to use the `after` pagination, because when you refresh the user might want to start from the top.

The dissmissed posts won't be preserved since the user might want to check it out later on.

I would want to move UserModel from 'PostItem.jsx' and every model to another dir.

I decided to manage the transition within the PostItem, with react hooks.

There are containers with lots of information regarding styles. I would need to change them.

I would also want to improve the controls under the sidebar, how the arrange when there are no items