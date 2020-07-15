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
