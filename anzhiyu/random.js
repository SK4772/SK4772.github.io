var posts=["2024/12/01/hello-world/","2017/05/26/论文写作注意事项—Csk/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };