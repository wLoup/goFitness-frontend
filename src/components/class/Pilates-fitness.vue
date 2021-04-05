<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Pilates Fitness Classes</h1>
          <div class="breadcrumb">
            <ul>
             
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Pilates Fitness Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="cellpadding service_details main-784">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-md-push-8 col-lg-3 col-lg-push-9 sub_classes">
            <aside class="blogAside">
              <ul class="categoryList normall">
                <li><router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item ">
                Running Classes<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                <li><router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item ">
                WeightLifting<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                <li ><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
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
                <li class="activeCat"><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">
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
          <div class="col-sm-12 col-md-9 col-lg-9 main-sarvices">
            <div class="imagesss">
              <div class="image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/pilates-images/pilates.jpg" alt="Image 1" class="img-responsive">
              </div>
            </div>
            <div class="class-Description Description-89">
              <h3>Description</h3>
              <p>
                Pilates combines the strengths of the East's flexibility with the West's fortitude, with slow, clear movements and gestures that must be coordinated with breathing,
So Pilates is suitable for people of all ages, especially those who lack exercise, spend a lot of time with computers and work from nine to five.
Stretching is also one of the most important exercises in Pilates. The special thing about stretching is that your muscles don't get fat after you exercise them.
Through the core of the body (waist and abdominal muscle composition, including the transverse abdominis, internal oblique, external oblique, rectus abdominis, erector spine muscle) exercise, make the spine soft and flexible.</p>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-6">
                <div class="benifets">
                  <h4>The benefits of Pilates</h4>
                </div>
                <div class="check-text ">
                  <ul>
                    <li>
                      <i class="fa fa-check-square-o"></i>Reduce pain and stiffness
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>Enhance spirit and vitality
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>Better balance and coordination
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>Relax with your stretching breath
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>Stretch your muscles
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 col-md-6">
                <div class="benifets">
                  <img src="@/assets/images/pilates-images/pilates-1.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
            </div>
            <div class="btun-2">
              <div class="row">
               <div class="col-md-12 col-sm-12">
                  <div class="empty-space xs-30"></div>
                  <div class="benefits benefits-89">
                    <h4 class="tt-titless">Course skills</h4>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="image-opacity-on-hover image-zoom-on-hover">
                      <img src="@/assets/images/pilates-images/pilates-2.png" alt="Image 1" class="img-responsive">
                    </div>
                    <div class="check-texts ">
                      <ul>
                        <li>
                          <i class="fa fa-check-square-o"></i>Upright pilates
                          <p>Straighten your right foot and lift your right leg at a 45-degree Angle from your left foot. Make 3 clockwise circles with your right foot, balancing your crotch. And then reverse. After finishing, right foot takes back the ground, raise right foot to right side, instep bends, delimit circle along be agreeable and opposite two directions. Repeat with the left foot.</p>
                        </li>
                        <li>
                          <i class="fa fa-check-square-o"></i>Fitness ball plati
                          <p>Stretch out the left foot to support the body, the right foot is still kneeling in place. Rest your right hand on the ball, bend your left arm, put your left elbow behind your head,
Hold your neck. Bend sideways, try to touch the left crotch with the left elbow, and return when it is no longer possible to approach, do a total of 8 ~ 12 times. And then do it on the other side.</p>
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
    name: 'Pilates-fitness'
  }
</script>

<style>
</style>
