<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Body Building Classes</h1>
          <div class="breadcrumb">
            <ul>
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Body-building Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="main-services">
      <div class="cellpadding service_details">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-md-push-8 col-lg-3 col-lg-push-9 sub_classes">
              <aside class="blogAside">
                <ul class="categoryList normall">
                  <li><router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item ">
                  Running Classes<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item ">
                  WeightLifting<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
                  OrganicYoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">
                  Raw Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li class="activeCat"><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                  Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
                  Body Combact<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/strength-training'}" exact class="aui-tabBar-item ">
                  Strength Training<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">
                  Power Yoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">
                  Pilates Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                </ul>
              </aside>
              <div class="main-details">
                <div class="details">
                  <h3>Class Details</h3>
                  <h4>Trainer: <span>Charles Powers</span></h4>
                  <h4>Time: <span>1 Month</span></h4>
                  <h4>Price: <span>$35 / Per month</span></h4>
                  <h4>Difficulty level:<span> High</span></h4>
                  <h4>Lessons: <span>12 </span></h4>
                  <div class="book-nows">
                    <a href="appointment.html">
                      <div class="sim-button button8">
                        <span>Book Now</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-9 main-sarvices ">
              <div class="portfolioHover">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <div class="imagesss">
                    <img src="@/assets/images/Body Building-image/Body-Building-image.jpg" alt="Image 1" class="img-responsive">
                  </div>
                </div>
              </div>
              <div class="class-Description">
                <h3>Description</h3>
                <p>Bodybuilding as a sports project, in addition to the general sports activities of the common can exercise the body, improve health, enhance physical function, but also special can develop the muscles of the body parts, increase physical strength, improve the body shape, and cultivate a good sentiment. It not only emphasizes "health", but also "beauty", and integrates physical education with aesthetic education.
                </p>
              </div>
              <div class="class-Description">
                <p>Bodybuilding movement can use all sorts of freehand exercise, if all sorts of freehand aerobics, rhythmic exercise, form gymnastics and all sorts of self-resistance movement.
Also can use all kinds of weight different sports equipment to practice, such as barbell, dumbbell, kettlebell and other weightlifting equipment, horizontal bar, parallel bars and other gymnastics equipment, as well as spring pull device, pulley pull device, rubber belt and a variety of special integrated strength exercise device.
                </p>
              </div>
              <div class="inventore">
                <div class="row">
                  <div class="accusantium class_1">
                    <div class="col-sm-12 col-md-12">
                      <div class="simple">
                        <p>Bodybuilding, to be forward-looking, not eager to succeed, step by step, step by step to gradually into the best, otherwise it is difficult to reach the peak of bodybuilding."
                        </p>
                        <h5 class="bradom">- Sun Zhigang</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <div class="row">
               <div class="col-sm-6 col-md-6">
                 <div class=" new-benefits five-benefits">
                   <h4>Benefits of Running</h4>
                 </div>
                 <div class="check-text ">
                   <ul>
                     <li>
                       <i class="fa fa-check-square-o"></i>Develop a good constitution to burn fat
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>Make the figure firmer and younger
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>Improve your weight loss motivation
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>Prevent disease
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>Exercise your lung capacity
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>Strong bones
                     </li>
                   </ul>
                 </div>
               </div>
               <div class="row">
                 <div class="col-sm-6 col-md-6">
                   <div class="benifets">
                     <img src="@/assets/images/runing-images/runing.jpg" alt="Image 1" class="img-responsive">
                   </div>
                 </div>
               </div>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tz-newsletter tz-newsletter-type-1">
      <div class="container">
        <div class="row">
          <div class="newsletter-left col-md-6">
            <div class="news-icon">
              <i class="fa fa-paper-plane"></i>
            </div>
            <div class="news-content">
              <h3 class="new-title">
                Subscribe our newsletter
              </h3>
              <p>Register now! We will send you best offers for your trip. </p>
            </div>
          </div>
          <div class="newsletter-right col-md-6">
            <form class="newsletter">
              <div class="tnp-field tnp-field-email"><label>email</label>
                <input class="tnp-email" type="email" name="ne" value="" placeholder="Enter Your Email" required>
                <button type="submit" class="btn btn-success sim-button button8 btn-effect "><span>Submit</span></button>
              </div>
              <div class="tnp-field tnp-field-button">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Body-building'
  }
</script>

<style>
</style>
