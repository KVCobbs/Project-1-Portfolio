 # Project Description
This project is the creation of my website which will showcase the projects and skills that I have learned throughout my coding journey. 

https://kvcobbs.netlify.app/


## Planning Documents

Time matrix, wireframes and inspiration are in the project worksheet docx:
https://docs.google.com/document/d/1XoOx7oe75qtft3XO8c9jswxPZ2pv8hwiopUUi_TOsPU/edit?usp=sharing


Functionality

  MVP            |          |                |               |             |
|---------------------|----------|----------------|---------------|-------------|
| Component           | Priority | Estimated time | Time invested | Actual time |
| HTML/CSS                  | High     | 3 hours        | 0 hours       | 0 hours     |
| Hamburger menu on mobile | High | 6 hours  | 1 hour tuesday      | 3 hours              |
| Project Previews         | High | 3 hours  | 4 hours             | 3 hours              |
| Icon Nav                 | High | 3 hours  | 6 hours             | 5 hours              |
| Scrolling functionality  | Mid  | 3 hours  | 2 hours on tuesday  | 3 hours on wednesday |
| Links to projects        | High | 2 hours  | 6 hours on thursday | 6 hours              |
| Working with API         | High | 4 hours  | 2 hours             | 2 hours              |
| Responsive               | High | 6 hours  | 3 hours on saturday | 3 hours              |
| Total                    |      | 29 hours | 34 hours            | 36 hours             |






 Post MVP            |          |                |               |             |
|---------------------|----------|----------------|---------------|-------------|
| Component           | Priority | Estimated time | Time invested | Actual time |
| Icon letters wiggle | Mid      | 3 hours        | 0 hours       | 0 hours     |
| Carousel            | Mid      | 6 hours        | 2 hours       | 8 hours     |
| Making own icon     | Mid      | 2 hours        | 0 hours       | 0 hours     |
| Social Media Icons  | low      | 2 hours        | 3 hours       | 3 hours     |
| Original logo       | low      | 3              | 0 hours       | 0 hours     |
| Total               |          | 16 hours       | 5 hours       | 11 hours    |


## Additional Libraries
    [Font Awesome](https://fontawesome.com/v4.7.0/)
    [Jquery](https://code.jquery.com/jquery-3.5.1.min.js)

## Code im proud of
const URL =`https://spreadsheets.google.com/feeds/list/1MViuZY3POLBmZH_As9tH7CZ-cRbvh8KYimTwGEYPDoY/od6/public/values?alt=json`
  fetch(URL)  // starts the fetch process
    .then( response => response.json() )    // returns the JSON data as a JS object
    .then( data => {
      //console.log(data.feed);
      // creates an array of parsed project objects
      const projects = data.feed.entry.map( entry => {
        return {
           title: entry.gsx$title.$t,
           image: entry.gsx$image.$t,
           description: entry.gsx$description.$t,
           url: entry.gsx$url.$t
        }
      })
      //console.log(projects);
      app(projects)
    })



## Issues and Resolutions

The biggest issue I had was my hamburger menu. I originally wanted to make it without Javascript at all. But I couldn't get it to work. 

My adding my contact page from google forms into my form. 

Resolutions: I found an article explaining hamburger menu with how to make it work using javascript. 
 
I solved my issue about my contact page but using control f to find the entry. info I needed on the page below instead of using the method shown to me using the video jendri linked. 




## References Used

 https://css-tricks.com/can-get-pretty-far-making-slider-just-html-css

https://youtu.be/0ZobsvqYA94

https://wpbuffs.com/responsive-media-queries/




