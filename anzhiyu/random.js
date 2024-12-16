var posts=["2024/12/06/2010-Domain-Adaptation-via-Transfer-Component-Analysis（TCA）/","2024/09/01/论文写作规范—Csk/","2024/09/01/科研常用网站及软件—Csk/","2024/09/01/迁移学习综述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };