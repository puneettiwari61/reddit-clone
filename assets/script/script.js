console.log('hey')
const side1 = document.querySelector('.side1')
const inputBox =document.querySelector('.input');
const h2 = document.querySelector('h2');
const para1 = document.querySelector('.para-1');
const membersink = document.querySelector('.membersink');
const newSide = document.querySelector('.side101');


// {/* <div class='posts'>
// <span class="postedby">Posted by u/jones-macallan</span>
// <h4>I made a tutorial on how to make an App Intro component with animations. I hope you will enjoy it.
// </h4>
// <a href='' class="url">https://github.com/yhenni1989/app-intro-lottie-expo</a>
// <div class="details">
//   <span>6 comments Give Award Share Save</span>
// </div>
// </div>

var newobj;
function searchIt(event){
  if(event.keyCode == 13){
    newSide.textContent = '';
    h2.textContent = 'r/'+inputBox.value;
    para1.textContent = 'r/'+inputBox.value;
    function fetchData(){
      fetch(`https://www.reddit.com/r/${inputBox.value}/.json`)
      .then(res => res.json())
      .then(res2 =>{
        newobj = res2.data.children;
        display();
      })
      
      }
      
      function display(){
        newobj.forEach(e => {
          const counts = document.createElement('div');
          counts.classList.add('counts');
          const i1 = document.createElement('i');
          i1.classList.add("fas", "fa-arrow-alt-circle-up", "count-i");
          const i2 = document.createElement('i');
          i2.classList.add("fas", "fa-arrow-alt-circle-down", "count-i" ,"k");
          const countpara = document.createElement('p');
          countpara.classList.add('count-para');
          countpara.textContent = e.data.ups;
          counts.append(i1,countpara,i2);
          const article = document.createElement('div');
          article.classList.add('article');
          const posts = document.createElement('div');
          posts.classList.add('posts');
          const postedby = document.createElement('span');
          postedby.classList.add('postedby');
          const h4 = document.createElement('h4');
          const a = document.createElement('a')
          a.classList.add('url');
          const details = document.createElement('div');
          details.classList.add('details');
          postedby.textContent = `Posted by u/${e.data.author}`;
          h4.textContent = e.data.title;
          const h5 = document.createElement('h5');
          h5.textContent = e.data.selftext.substr(0,700) + '...'
          a.textContent = e.data.url;
          const spanComm = document.createElement('span');
          spanComm.textContent = `${e.data.num_comments} comments Give Award Share Save`;
          spanComm.style.wordSpacing = '5px';
          details.append(spanComm)
          article.append(postedby, h4, h5, a , details);
          posts.append(counts, article);
          newSide.append(posts);
          membersink.textContent = String(e.data.subreddit_subscribers).substr(0,3) + 'k'
        })
      }
      
      fetchData();
  }
}


inputBox.addEventListener('keyup',searchIt)