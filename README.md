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