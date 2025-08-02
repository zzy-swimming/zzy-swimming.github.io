var posts=["2025/07/28/hello-world/","2025/08/02/踏访愚公故里-传承精神根脉/","2025/07/28/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };