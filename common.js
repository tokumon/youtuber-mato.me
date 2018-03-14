jQuery(function (){
 var movies = [];
 var movies_w = [];
 var movies_h = [];
 var images = [];

 jQuery('.youtube iframe').each(function(index, element) {
      //属性を取得
      var movie_src = jQuery(this).attr('src');
      var movie_width = jQuery(this).attr('width');
      var movie_height = jQuery(this).attr('height');
      //配列へ
      movies[index] = movie_src
      movies_w[index] = movie_width
      movies_h[index] = movie_height
      //サムネイルを取得(この場合は320x180)
      images[index] = 'http://i.ytimg.com/vi' + movie_src.substring(movie_src.lastIndexOf("/"),movie_src.lastIndexOf("?")) + '/hqdefault.jpg'
      //置き換え
      jQuery(this).after('<div class="youtube_play"><img src="' + images[index] + '" width="' + movies_w[index] + '"><div class="youtube_btn"></div></div>').remove();
 });

 jQuery('.youtube_play').each(function(index, element) {
      jQuery(this).click(function(){
      //クリックで置き換え
      jQuery(this).after('<iframe src="' + movies[index] + '&amp;autoplay=1" width="' + movies_w[index] + '" height="' + movies_h[index] + '" frameborder="0"></iframe>').remove();
      });
      jQuery(this).hover(function(){
      //ロールオーバー
      jQuery(".youtube_btn").eq([index]).css("opacity",".7");
      },function(){
      jQuery(".youtube_btn").eq([index]).css("opacity","1");
      });
 });
});
