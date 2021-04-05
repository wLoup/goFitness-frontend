<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Organic Yoga Classes</h1>
          <div class="breadcrumb">
            <ul>
              
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Organic Yoga Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="orginc-yoga">
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
                  <li class="activeCat"><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
                  OrganicYoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">
                  Raw Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                  Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
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
            <div class="col-sm-12 col-md-9 main-sarvices">
              <div class="imagesss">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <img src="@/assets/images/orginc-yoga/orginc-yoha-1.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
              <div class="class-Description class_description_1">
                <h3>Description</h3>
                <p>Yoga is more than just a popular or trendy exercise. Yoga is a very ancient practice of energy knowledge that combines philosophy, science and art.
The foundation of yoga is based on ancient Hindu philosophy, and mental, physical and spiritual precepts have been an important part of Indian culture for thousands of years.
The ancient yogis developed the system because they believed that by moving the body and regulating the breath, they could control the mind and emotions, as well as maintain a healthy body.
                </p>
                <p>Today, yoga has become a physical and mental exercise and practice method widely spread around the world. Spread from India to Europe and the United States, Asia Pacific, Africa and so on, because of it to the psychological decompression and physiological health care and other obvious role and highly respected.
At the same time, various branches of yoga have evolved, such as hot yoga, hatha yoga, hot yoga, health yoga and so on, as well as some yoga management science.
                </p>
              </div>
              <div class="row">
                <div class="col-md-6   col-sm-6 Skill-five">
                  <h4 class="tt-title h4 gray no-desc yellow">Yoga postures</h4>
                  <div class="empty-space lg-15 sm-15 xs-15"></div>
                  <div class="tt-accordeon">
                    <div class="tt-accordeon-title">Downward dog</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>Half inverted stereo, ischial lift, the heel will not necessarily fall to the ground oh, spinal extension, do not collapse the shoulder</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">Inclined plate support</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>The basic yoga strengthens the asana, strengthens the core stability, and lays a solid foundation for the later advanced asana.</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">Triangular extension</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>The depth is not important, the lateral extension is the key, control both knees not to overextend</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">The tree type</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>Balance exercises on one leg are good for strengthening the supporting leg. Focus on a certain point to maintain stability.</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">Warriors a type</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>Strengthens the legs and stretches the front hind and hip muscles, setting the stage for backbends.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6  col-sm-6 Skill-five">
                  <div class="empty-space xs-30 "></div>
                  <div class="benefits">
                    <h4 class="tt-titles">Yoga benefits</h4>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <img src="@/assets/images/orginc-yoga/benifits-yoga.jpg" alt="Image 1" class="img-responsive">
                    <div class="check-texts ">
                      <ul>
                        <li>
                          <i class="fa fa-check-square-o"></i>Practice yoga can improve the body's metabolic rate, increase the metabolic rate, for weight loss, fat loss have a very good promotion
                        </li>
                        <li>
                          <i class="fa fa-check-square-o"></i>Regular practice of yoga can enhance the vitality of the body, can regulate the endocrine system, for women can fully nourish the ovaries, can promote the secretion of endocrine glands in the body
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     

  </div>
</template>

<script>
  export default {
    name: 'Organic-yoga'
  }
</script>

<style>
</style>
