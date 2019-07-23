### Reddit reader


#Features
- Pagination support
- Saving pictures in the picture gallery
- App state-preservation/restoration
- Indicator of unread/read post (updated status, after post it’s selected)
- Dismiss Post Button (remove the cell from list. Animations required)
- Dismiss All Button (remove all posts. Animations required)
- Support split layout (left side: all posts / right side: detail post)
- Responsive design

#Each entry is formatted as
- Title (at its full length)
- Author
- entry date, following a format like “x hours ago” 
- A thumbnail for those who have a picture.
- Number of comments
- Unread status


#Decisions
Taking a look at the video, the left menu is visible everytime when the screen is wide enough. On the contrary, when the screen is not wide enough it behaves like a swipe menu. So i might render a swipe menu only when the screen is tight.
I have decided to use Sagas pattern with Redux, because i feel more comfortable with this pattern.

Regarding the sidebar, i have found `react-sidebar`, the swipe has been disabled for iOS because of the feautre "swipe-to-back". Eventhough the video suggest the functionality works on an iOS device, i decided to continue with this library.

Checking how to paginate the reddit listing, is somewhat different i'm used to.

I don't understand what should i propose to download the image to the gallery, since when pressing an image a pop up shows different actions regarding the image. Within this options we can find "download".

On purpose the first time the list is rendered, i don't want to use the `after` pagination, because when you refresh the user might want to start from the top.