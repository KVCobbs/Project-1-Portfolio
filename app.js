/*
const formURL ="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdtUwUUMbgeU763Li9T_7Hxj_aZnmXzFzslIbuZnsKZu9i0bw/formResponse";

const formSubmit = () => {
  //tags
  const nameTag = "entry.1094064619" ;
  const emailTag = "entry.1107095658" ;
  const messagetag = "entry.1535029043";
  
//user values
let name = $('.name');
let email = $('.email');
let message = $('.message');

//scary stuff
fetch(formURL), {
  method: 'POST',
  mode: 'no-cars',
  headers: { 
  'content-Type':'application/x-www-form-urlencoded'
},
body: `${nameTag}=${name.val()}&${emailTag}=${email.val()}&${messageTag}=${message.val()}`
}

.then(res => {
  console.log(red.body);
  name.val('');
  email.val('');
  message.val('');
  $('.confirmation').text('Your message has been sent. Thanks!');
})
.catch(err => console.log(err));

$('button').on('click', () => formSubmit());
}
*/

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

    const app = (projects) => {
      //console.log(`app`,projects)

        for(let i = 0; i < projects.length; i++){
          projects[i].title
          /*
         $(`#project1`).append($('<h1>').text(projects[i].title))
         $(`#project2`).append($(`<div>`).text(projects[i].title))
         $('#project'+ (i+1)).append($(`<div>`).text(projects[i].title))
         */
          const $div = $('<div>').attr('id','#project'+ (i+1)).addClass('slide')

          $div.append($('<h1>').text(projects[i].title))
          const $link = $('<a>').on('click', () => manualDis(i))
            $link.append($('<img>').attr('src', projects[i].image).addClass('cn'))
            $div.append($link)
            

            //Descriptions show up
            const manualDis = function(x) {
              $('.descriptions').empty()
              // $projectsDiv = createProjectElement(projects[x])
              // $projectsDiv.attr('id','temp')
              // $('.descriptions').prepend($projectsDiv)
              const $des = $('<p>').text(projects[x].description)
              const $url = $('<a>').attr('href', projects[x].url).text('Live Link')
              $('.descriptions').append($des, $url)
              console.log(x, projects[x])
            }
          
          $('.slider').append($div)
        }
    }
    
    //hamburger menu
    $(document).ready(function(){
      $('.burger').on('click',
      function () {
        $('nav').toggle(500)
      });
    });
