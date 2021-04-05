<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Weight Lifting Classes</h1>
          <div class="breadcrumb">
            <ul>
              
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Weight Lifting Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="main-services main-servicess">
      <div class="cellpadding service_details">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-md-push-8 col-lg-3 col-lg-push-9 sub_classes">
              <aside class="blogAside">
                <ul class="categoryList normall">
                  <li ><router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item ">
                  Running Classes<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li class="activeCat"><router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item ">
                  WeightLifting<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
                  OrganicYoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">
                  Raw Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                  Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
                  Body Combact<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/strength-training'}" exact class="aui-tabBar-item ">
                  Strength Training<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">
                  Power Yoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">
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
              <div class="main-Lifting">
                <div class="row">
                  <div class="col-sm-6 col-xs-6">
                    <div class="lefting-image">
                      <div class="imagesss">
                        <div class="image-opacity-on-hover image-zoom-on-hover">
                          <img src="@/assets/images/Weight-Lifting-images/weight-lefting.jpg" alt="Image 1" class="img-responsive">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xs-6">
                    <div class="lefting-image">
                      <div class="imagesss">
                        <div class="image-opacity-on-hover image-zoom-on-hover">
                          <img src="@/assets/images/Weight-Lifting-images/weight-lefting-2.jpg" alt="Image 1" class="img-responsive">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="class-Description">
                <h3>Description</h3>
                <p>The world's fastest way to get in shape is the most successful group fitness program in the history of fitness, the world's fastest exercise to shape and lose fat. It succeeded in bringing the barbell into the gym,
Using barbell to achieve a good body shaping effect, the perfect combination of aerobic exercise and anaerobic exercise, has brought a revolutionary breakthrough in collective fitness. Simple and easy to learn, become a starting point to enhance physical strength and confidence.
                </p>
              </div>
              <div class="class-Description">
                <p>Barbell exercise is a combination of barbell and aerobics. Adjustable weight barbells are suitable for people of all ages, genders and physiques.
It can quickly improve muscle endurance and muscle strength, burn a lot of calories, and sculpt perfect body lines. It can also increase bone density and prevent osteoporosis,
Improve endocrine, improve human immunity.
                </p>
              </div>
              <div class="row">
                <div class="col-sm-6 col-md-6">
                  <div class="benifets">
                    <h4>Safety recommendations</h4>
                  </div>
                  <div class="check-text ">
                    <ul>
                      <li>
                        <i class="fa fa-check-square-o"></i>Warm-up: Get your whole body moving
                      </li>
                      <li>
                        <i class="fa fa-check-square-o"></i>Wear shoes that are snug, comfortable and soft
                      </li>
                      <li>
                        <i class="fa fa-check-square-o"></i>Move according to the rhythm of the music
                      </li>
                      <li>
                        <i class="fa fa-check-square-o"></i>Do not fully extend the joints during exercise
                      </li>
                      <li>
                        <i class="fa fa-check-square-o"></i>According to their own circumstances
                      </li>
                      <li>
                        <i class="fa fa-check-square-o"></i>Be sure to exert force slowly
                      </li>

                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-md-6">
                    <div class="benifets">
                      <img src="@/assets/images/Weight-Lifting-images/weight-lefting-3.jpg" alt="Image 1" class="img-responsive">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-sm-12 Leave-five">
                  <div class="contact_us2_form House_Renovation_form roofing_form">
                    <h4 class="tt-title h4 yellow text-left">Leave A Comment</h4>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="btn-6">
                      <form action="contact_process.php" method="post" id="leaveComment">
                        <div class="form-group top_bottom">
                          <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group top_bottom">
                              <input type="email" class="form-control" id="email" name="email" placeholder="Email"
                                required>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group top_bottom">
                              <input type="text" class="form-control" id="number" name="number" placeholder="Phone"
                                required>
                            </div>
                          </div>
                        </div>
                        <div class="form-group Message top_bottom">
                          <textarea class="form-control" id="comment" name="comment" placeholder="Write Comment"></textarea>
                        </div>
                        <button type="submit" name="leaveComment" id="leaveComment" class="btn sim-button button8">
                          <span>Leave A Comment</span>
                        </button>
                      </form>
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
    name: 'Weight Lifting'
  }
</script>

<style>
</style>
