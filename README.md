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
- entry date, following a format like “x hours ago” 
- A thumbnail for those who have a picture.
- Number of comments
- Unread status

## Decisions
I added eslint from scratch since i feel more comfortable working with it. I don't know if I will be able to provide a codebase 100% linted with success. With more time i will surely will.

Taking a look at the video, the left menu is visible everytime when the screen is wide enough. On the contrary, when the screen is not wide enough it behaves like a swipe menu. So i might render a swipe menu only when the screen is tight.
I have decided to use Sagas pattern with Redux, because i feel more comfortable with this pattern.

Regarding the sidebar, i have found `react-sidebar`, the swipe has been disabled for iOS because of the feautre "swipe-to-back". Eventhough the video suggest the functionality works on an iOS device, i decided to continue with this library.

Checking how to paginate the reddit listing, is somewhat different i'm used to.

I don't understand what should i propose to download the image to the gallery, since when pressing an image a pop up shows different actions regarding the image. Within this options we can find "download".

On purpose the first time the list is rendered, i don't want to use the `after` pagination, because when you refresh the user might want to start from the top.

The dissmissed posts won't be preserved since the user might want to check it out later on.

I would want to move UserModel from 'PostItem.jsx' and every model to another dir.

I decided to manage the transition within the PostItem, with react hooks

There are containers with much information regarding styles. I would need to change them.

I would also want to improve the controls under the sidebar, how the arrange when there are no items