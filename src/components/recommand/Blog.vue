<template>
  <section>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Recommendations</h1>
          <div class="breadcrumb">
            <ul>
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/recommand'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Recommendations
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To CATEGORIES=================-->
    <div class="blog_left_sidebar blog_right01 cellpadding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">
                <div class="portfolioHover">
                  <div class="blog_withoutside">
                    <h3 class="h3 blog-title">{{getRe("re0").exercise_name}}</h3>
                  </div>
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img :src="a" alt="" style="margin: 0 auto;" class="img-responsive">
                  </div>

                  <div class="date">
                    <h5>01</h5>
                    <span>Fri</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <!--re0: {exercise_name:x, exercise_length:x, description:x, video_link:x, image_url:x,category_id:x,}-->
                  <!--<h3 class="h3 blog-title">{{getRe("re0").exercise_name}}</h3>-->
                  <div class="blogInfo">
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re0").category}}</p><br/>
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re0").exercise_length}}</p><br/>
                    <p><i class="fa fa-tag"></i> Video link: <a :href="v0">{{getRe("re0").video_link}}</a></p><br/>
                    <p><i class="fa fa-tag"></i> Description:  {{getRe("re0").description}}</p>
                  </div>
                  <!--<div class="blog-content"></div>-->
                </div>
              </div>
              <!--<img :src="t2" alt="" >-->
            </div>
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">

                <div class="portfolioHover">
                  <div class="blog_withoutside">
                    <h3 class="h3 blog-title">{{getRe("re1").exercise_name}}</h3>
                  </div>
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img :src="b" alt="image" style="margin: 0 auto;" class="img-responsive">
                  </div>
                  <div class="date">
                    <h5>02</h5>
                    <span>Sec</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <!--<h3 class="h3 blog-title">{{getRe("re1").exercise_name}}</h3>-->
                  <div class="blogInfo">
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re1").category}}</p><br/>
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re1").exercise_length}}</p><br/>
                    <p><i class="fa fa-tag"></i> Video link: <a :href="v0">{{getRe("re1").video_link}}</a></p><br/>
                    <p><i class="fa fa-tag"></i> Description:  {{getRe("re1").description}}</p>
                  </div>
                  <!--<div class="blog-content"></div>-->
                </div>
              </div>
            </div>
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">

                <div class="portfolioHover">
                  <div class="blog_withoutside">
                    <h3 class="h3 blog-title">{{getRe("re2").exercise_name}}</h3>
                  </div>
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img :src="c" alt="image" style="margin: 0 auto;" class="img-responsive">
                  </div>
                  <div class="date">
                    <h5>03</h5>
                    <span>Thr</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <!--<h3 class="h3 blog-title">{{getRe("re1").exercise_name}}</h3>-->
                  <div class="blogInfo">
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re2").category}}</p><br/>
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re2").exercise_length}}</p><br/>
                    <p><i class="fa fa-tag"></i> Video link: <a :href="v0">{{getRe("re2").video_link}}</a></p><br/>
                    <p><i class="fa fa-tag"></i> Description:  {{getRe("re2").description}}</p>
                  </div>
                  <!--<div class="blog-content"></div>-->
                </div>
              </div>
            </div>
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">

                <div class="portfolioHover">
                  <div class="blog_withoutside">
                    <h3 class="h3 blog-title">{{getRe("re3").exercise_name}}</h3>
                  </div>
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img :src="d" alt="image" style="margin: 0 auto;" class="img-responsive">
                  </div>
                  <div class="date">
                    <h5>04</h5>
                    <span>Four</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <!--<h3 class="h3 blog-title">{{getRe("re1").exercise_name}}</h3>-->
                  <div class="blogInfo">
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re3").category}}</p><br/>
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re3").exercise_length}}</p><br/>
                    <p><i class="fa fa-tag"></i> Video link: <a :href="v0">{{getRe("re3").video_link}}</a></p><br/>
                    <p><i class="fa fa-tag"></i> Description:  {{getRe("re3").description}}</p>
                  </div>
                  <!--<div class="blog-content"></div>-->
                </div>
              </div>
            </div>
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">
                <div class="portfolioHover">
                  <div class="blog_withoutside">
                    <h3 class="h3 blog-title">{{getRe("re4").exercise_name}}</h3>
                  </div>
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img :src="e" alt="image" style="margin: 0 auto;" class="img-responsive">
                  </div>
                  <div class="date">
                    <h5>05</h5>
                    <span>Fif</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <!--<h3 class="h3 blog-title">{{getRe("re2").exercise_name}}</h3>-->
                  <div class="blogInfo">
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re4").category}}</p><br/>
                    <p><i class="fa fa-tag"></i> Exercise length: {{getRe("re4").exercise_length}}</p><br/>
                    <p><i class="fa fa-tag"></i> Video link: <a :href="v0">{{getRe("re4").video_link}}</a></p><br/>
                    <p><i class="fa fa-tag"></i> Description:  {{getRe("re4").description}}</p>
                  </div>
                  <!--<div class="blog-content"></div>-->
                </div>
              </div>
              <div class="pagiNexts">
                <div class="paginationWrapper">
                  <div class="nubmerPagination">
                    <a class="numberPagi activePagi" href="#">1</a>
                    <a class="numberPagi" href="#">2</a>
                  </div>
                  <a class="pagiNext" href="#"><i class="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>

  </section>
</template>

<script type="text/javascript">
  // import {token}  from '@/api/user.js'
  export default {
    name: 'Recommand',
        //从服务器获取图片
    methods:{
        getRe(ren) {
            const tp = JSON.parse(window.sessionStorage.getItem(ren))
            window.localStorage.clear()
            window.localStorage.setItem("v0",tp.video_link)
            window.localStorage.setItem(ren,tp.image_url)
            window.localStorage.setItem("temp","https://img1.baidu.com/it/u=379895550,2286813034&fm=26&fmt=auto&gp=0.jpg")
            // const t = window.localStorage["temp"]
            // console.log(t,typeof t)
            return tp
        },
        getUrl() {
            const url = "https://img1.baidu.com/it/u=379895550,2286813034&fm=26&fmt=auto&gp=0.jpg"
            return url
        }
    },
    data(){
        const im3 = window.localStorage["imre3"];
        const im4 = window.localStorage["imre4"];
        return{
         t1: "https://img1.baidu.com/it/u=379895550,2286813034&fm=26&fmt=auto&gp=0.jpg",
         t2: window.localStorage["temp"],
         v0: window.localStorage["v0"],
         imre4: im4,
         imre3: im3,
         url:["https://z3.ax1x.com/2021/04/04/cKzbGV.jpg", "https://z3.ax1x.com/2021/04/04/cKzq2T.jpg", "https://z3.ax1x.com/2021/04/04/cKzXMF.jpg", "https://z3.ax1x.com/2021/04/04/cKzLxU.jpg",
             "https://z3.ax1x.com/2021/04/04/cKzHP0.jpg", "https://z3.ax1x.com/2021/04/04/cKzjr4.jpg", "https://z3.ax1x.com/2021/04/04/cKzzZ9.jpg", "https://z3.ax1x.com/2021/04/04/cMSSaR.jpg",
             "https://z3.ax1x.com/2021/04/04/cMSpI1.jpg", "https://z3.ax1x.com/2021/04/04/cKzvqJ.jpg", "https://z3.ax1x.com/2021/04/04/cMSCPx.jpg","https://z3.ax1x.com/2021/04/04/cMSPG6.jpg",
             "https://z3.ax1x.com/2021/04/05/cMi8Ve.jpg", "https://z3.ax1x.com/2021/04/04/cMSAMD.jpg", "https://z3.ax1x.com/2021/04/04/cMSEse.jpg","https://z3.ax1x.com/2021/04/04/cMSFxO.jpg",
             "https://z3.ax1x.com/2021/04/04/cMSgoR.jpg", "https://z3.ax1x.com/2021/04/04/cMScw9.jpg", "https://z3.ax1x.com/2021/04/04/cMSWJx.jpg", "https://z3.ax1x.com/2021/04/04/cMSRF1.jpg",
             "https://z3.ax1x.com/2021/04/04/cMS6eJ.jpg", "https://z3.ax1x.com/2021/04/04/cMS4SK.jpg", "https://z3.ax1x.com/2021/04/04/cMS5QO.jpg", "https://z3.ax1x.com/2021/04/04/cMSfW6.jpg",
             "https://z3.ax1x.com/2021/04/04/cMSIyD.jpg", "https://z3.ax1x.com/2021/04/04/cMSoOe.jpg", "https://z3.ax1x.com/2021/04/04/cMS7eH.jpg", "https://z3.ax1x.com/2021/04/04/cMSbTA.jpg",
             "https://z3.ax1x.com/2021/04/05/cMiJ5d.jpg", "https://z3.ax1x.com/2021/04/04/cMSHwd.jpg", "https://z3.ax1x.com/2021/04/04/cMSOYt.jpg", "https://z3.ax1x.com/2021/04/04/cMSvSf.jpg",
             "https://z3.ax1x.com/2021/04/04/cMSxl8.jpg", "https://z3.ax1x.com/2021/04/04/cMSXfP.jpg", "https://z3.ax1x.com/2021/04/04/cMp9mQ.jpg", "https://z3.ax1x.com/2021/04/04/cMSz6S.jpg",
             "https://z3.ax1x.com/2021/04/04/cMpSOg.jpg", "https://z3.ax1x.com/2021/04/05/cMiN8I.jpg", "https://z3.ax1x.com/2021/04/04/cMpPTs.jpg", "https://z3.ax1x.com/2021/04/04/cMpFkn.jpg",
             "https://z3.ax1x.com/2021/04/04/cMpkYq.jpg", "https://z3.ax1x.com/2021/04/04/cMpAf0.jpg", "https://z3.ax1x.com/2021/04/05/cMiGUH.jpg", "https://z3.ax1x.com/2021/04/04/cMpum4.jpg",
             "https://z3.ax1x.com/2021/04/04/cMpVpV.jpg", "https://z3.ax1x.com/2021/04/04/cMpe6U.jpg", "https://z3.ax1x.com/2021/04/04/cMpmXF.jpg", "https://z3.ax1x.com/2021/04/05/cMitPA.jpg",
             "https://z3.ax1x.com/2021/04/04/cMpM79.jpg", "https://z3.ax1x.com/2021/04/04/cMp3fx.jpg", "https://z3.ax1x.com/2021/04/04/cMplkR.jpg", "https://z3.ax1x.com/2021/04/04/cMp1t1.jpg",
             "https://z3.ax1x.com/2021/04/05/cMi4qU.jpg", "https://z3.ax1x.com/2021/04/05/cMiwKf.jpg", "https://z3.ax1x.com/2021/04/04/cMpJ1K.jpg", "https://z3.ax1x.com/2021/04/04/cMpUne.jpg",
             "https://z3.ax1x.com/2021/04/04/cMpa0H.jpg", "https://z3.ax1x.com/2021/04/05/cMi0r8.jpg", "https://z3.ax1x.com/2021/04/04/cMpd7d.jpg", "https://z3.ax1x.com/2021/04/04/cMp0AA.jpg",
             "https://z3.ax1x.com/2021/04/04/cMpDht.jpg", "https://z3.ax1x.com/2021/04/04/cMpBtI.jpg", "https://z3.ax1x.com/2021/04/04/cMps9P.jpg", "https://z3.ax1x.com/2021/04/04/cMp2ng.jpg",
             "https://z3.ax1x.com/2021/04/04/cMpy1f.jpg", "https://z3.ax1x.com/2021/04/04/cMp6c8.jpg", "https://z3.ax1x.com/2021/04/05/cMiBqS.jpg", "https://z3.ax1x.com/2021/04/04/cMpRBQ.jpg",
             "https://z3.ax1x.com/2021/04/05/cMiHi9.jpg", "https://z3.ax1x.com/2021/04/05/cMibGR.jpg", "https://z3.ax1x.com/2021/04/05/cMioa4.jpg", "https://z3.ax1x.com/2021/04/05/cMFPJA.jpg",
         ]
        }
    },
    //周期函数
    created(){
        // window.localStorage.setItem("x1",'7')
        // window.localStorage.setItem("x2",'2')
        // window.localStorage.setItem("x3",'3')
        const tp0 = JSON.parse(window.sessionStorage.getItem('re0'))
        const tp1 = JSON.parse(window.sessionStorage.getItem('re1'))
        const tp2 = JSON.parse(window.sessionStorage.getItem('re2'))
        const tp3 = JSON.parse(window.sessionStorage.getItem('re3'))
        const tp4 = JSON.parse(window.sessionStorage.getItem('re4'))


        this.i=Math.floor(Math.random()*71)
        this.j=Math.floor(Math.random()*71)
        this.p=Math.floor(Math.random()*71)
        this.q=Math.floor(Math.random()*71)
        this.s=Math.floor(Math.random()*71)
        // const a1 = window.localStorage['x1']
        // const b1 = window.localStorage['x2']
        // const c1 = window.localStorage['x3']
        this.a=tp0.image_url
        this.b=tp1.image_url
        this.c=tp2.image_url
        this.d=tp3.image_url
        this.e=tp4.image_url
    }
  }


</script>

<style>

</style>
