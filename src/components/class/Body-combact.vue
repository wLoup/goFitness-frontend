<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Body Combact Classes</h1>
          <div class="breadcrumb">
            <ul>
              
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Body Combact Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="main-services sagittis-2">
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
                    <li ><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                    Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                    <li class="activeCat"><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
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
            <div class="col-sm-12 col-md-9 main-sarvices benifits_01">
              <div class="imagest">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <img src="@/assets/images/Body Combact-image/Body-Combact-image.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
              <div class="class-Description">
                <h3>Description</h3>
                <p>Booy Combat not only has strong movement rhythm, but also has background music, and the music selected is the original international pop music. Let the exerciser in the exercise as if in a wonderful concert.
It is divided into ten sections, in line with the principle of first slow then fast, first local then whole, first simple then complex training. As a result, participants do not need to have a basic knowledge of martial arts or taekwondo to gain fitness as they progress. Carefully designed action routines with dynamic music will bring you unprecedented physical and mental challenges; Let you do physical training at your will, experience passion, strength and momentum, and the more you put into the more excited.</p>
              </div>
             
              <div class="typesetting">
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="tt-title h4 gray no-desc yellow">Technical essentials</h4>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon">
                      <div class="tt-accordeon-title">After the kick</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>Straighten or slightly bend your leg, using your heels on the other side of your leg, and try to straighten it out in the opposite direction of your body. The lower the center of gravity is, the higher the leg is</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">Push to the empty dance</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>This move comes from Muay Thai boxing. It requires the air to reach the highest point and then send force suction leg, let the thigh close to the chest, toe down. This movement has explosive power, strong offensive, high requirements for the body's ability to jump.</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">The straight</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>The point of attack is the chest. Clench your fists and concentrate your strength on the elbow of the attacking arm. Use your shoulder to drive the punch straight forward. At the same time, pay attention to the control of the stability of the body.</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">The side kick</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>This movement requires the toes of the supporting leg to open outwards, the hip joint to expand, and the heel to kick the right side of the body. The outer side of the foot is the point of contact for attack.</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">Side of the elbow</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>Seemingly reminiscent of Chinese martial arts, crouching, arms bent, pushing from the front side to the front side of the body, elbows pointing to the side being supplied, power coming entirely from the arms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sagittis">
                    <div class="col-md-6 col-sm-6 Benefits-5">
                      <div class="empty-space xs-30"></div>
                      <div class="benefits b11">
                        <h4 class="tt-titles">Benefits</h4>
                        <div class="empty-space lg-15 sm-15 xs-15"></div>
                        <div class="Combact-image">
                          <img src="@/assets/images/Body Combact-image/Body-Combact-image1.jpg" alt="Image 1" class="img-responsive">
                        </div>
                        <div class="check-texts ">
                          <ul>
                            <li>
                              <i class="fa fa-check-square-o"></i>Reduced fat shape
                            </li>
                            <li>
                              <i class="fa fa-check-square-o"></i>Improves cardiopulmonary function
                            </li>
                            <li>
                              <i class="fa fa-check-square-o"></i>Improve the agility of movement
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
    name: 'Body-combact'
  }
</script>

<style>
</style>
