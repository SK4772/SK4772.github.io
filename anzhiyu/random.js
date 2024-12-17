var posts=["2024/12/16/2010-Domain-Adaptation-via-Transfer-Component-Analysis（TCA）/","2024/09/01/科研常用网站及软件—Csk/","2024/12/17/2013-Transfer-Feature-Learning-with-Joint-Distribution-Adaptation/","2024/09/01/论文写作注意事项—Csk/","2024/09/01/迁移学习综述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };