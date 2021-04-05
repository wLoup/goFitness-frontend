<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Power Yoga Classes</h1>
          <div class="breadcrumb">
            <ul>
             
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Power Yoga Classes
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
                  <li class="activeCat"><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">
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
            <div class="col-sm-12 col-md-9 main-sarvices power_yoga">
              <div class="imagesss">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <img src="@/assets/images/power-yoga/power-yoga1.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
              <div class="class-Description">
                <h3>Description</h3>
                <p>Strength yoga is a strong, healthy BAI series posture yoga, there are certain benefits to the human body, through the practice of strength yoga can achieve super shape the effect.
Deep strength exercises can enhance muscle elasticity and help strengthen soft tissue and joint firmness. The developed muscles of bodybuilders need a lot of protein as raw materials, and the average woman's daily intake is far from enough. Strength yoga combines asanas and deep breathing to connect specific yoga movements together, coherently and fluently, emphasizing the organic combination of strength and flexibility.
                <p>In China, where people admire its clever alignment of postures and its flowing style of practice, yoga is also very systematic. It can help improve people's confidence, endurance, willpower, muscle strength and physical flexibility; Can help adjust the body to the best condition. Yoga can make our body more healthy; It can also improve people's character.</p>
              </div>
             <div class="row">
                <div class="col-md-12">
                  <h4 class="skill-2">Skill points</h4>
                  <div class="empty-space lg-15 sm-15 xs-15"></div>
                  <div class="tt-accordeon">
                    <div class="tt-accordeon-title">New moon type</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>This yoga pose is a great way to train the strength of the front thighs and abdomen</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">Inclined plate</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>This seemingly "easy" pose is actually quite complex because it strengthens all the muscles in your body, including your abdomen, legs, shoulders and balance. It's a great pose for strength training yoga!</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">The ship type</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>This is a great pose for people who sit in an office a lot. It works the hips and abdominal muscles well, and is also a great strength training pose for yoga because it requires balance and activation of your core.</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">The locust type</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>This pose works all of your back muscles, from your shoulders and neck, to your lower back, as well as your legs and arms.</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">One leg downward-facing dog</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>This is a simple downward dog variant. By lifting one leg, you can make your standing (or balancing) leg stronger. From the yoga strength training poses, you will definitely feel the tension in the inner thighs of your standing legs</p>
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
    name: 'Power-yoga'
  }
</script>

<style>
</style>
