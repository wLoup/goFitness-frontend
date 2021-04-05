<template>
  <section>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Classes</h1>
          <div class="breadcrumb">
            <ul>
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes 
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ runing class Section start =================-->
    <div class="main-classes classes_1 cellpadding">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes Running-2">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images.jpg" alt="Image 1" class="img-responsive">
              </div>
              <h4 class="runn">Running</h4>
              <p>Running is an aerobic exercise, by running, we can improve muscle strength, muscle quantity properly restored to normal level, improve the basis of in vivo metabolism, accelerate the fat burning, get into easy to thin body.</p>
             <router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item ">More
               </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-1.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Weight Lifting</h4>
              <p>Barbell exercise is a combination of barbell and aerobics. Adjustable weight barbells are suitable for people of all ages, genders and physiques.
                It is a combination of barbell and aerobics, can benefit you physically and mentally.
              </p>
              
              <router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item ">More
                </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-2.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Organic Yoga</h4>
              <p>Yoga postures use ancient and easy-to-master skills to improve people's physical, mental, emotional and spiritual abilities. It is a kind of movement to achieve the harmony and unity of body, mind and spirit.</p>
              <router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">More
                </router-link>
            </div>
          </div>

          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-3.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Raw Fitness</h4>
              <p>Raw Fitness is a exercise through bare hands or the use of a variety of instruments, the use of special movement mode and method for exercise, in order to develop muscle, increase physical strength, improve the body and edify sentiment for the purpose of the movement project. </p>
              <router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">More
                </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-4.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Body Building</h4>
              <p>Body Building is a type of rhythmic movement performed multiple times to help you improve muscle strength and circumference. Strength training is based on anaerobic training and can help you improve upper body strength,
                lower abdomen strength and lower limb strength. </p>
              <router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">More
                </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-5.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Body Combat</h4>
              <p>Body Combat originates from a series of fighting movements, which combine Chinese martial arts, Thai boxing, western boxing, karate, taekwondo, etc. It emphasizes the exercise of endurance and improves the strength and flexibility of the whole body</p>
              <router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">More
                </router-link>
            </div>

          </div>


          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-11.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Strength training</h4>
              <p>Strength training is a type of rhythmic movement performed multiple times to help you improve muscle strength and circumference. Strength training is based on anaerobic training
, can help you improve upper body strength, lower abdomen strength and lower limb strength. </p>
              <router-link :to="{path:'/class/strength-training'}" exact class="aui-tabBar-item ">More
                </router-link>
            </div>

          </div>

          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-12.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Power Yoga</h4>
              <p>Power Yoga, also known as Power Yoga, is a strong and healthy vinyasa yoga. Anyone can learn power yoga. Learning power yoga can help you lose weight,
The goal is to improve our physical functioning, our consciousness, our relationships, and our spirit. </p>
                <router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">More
                  </router-link>
            </div>

          </div>

          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-13jpg.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">Pilates Fitness</h4>
              <p>Pilates is first and foremost a sport. It is mainly to exercise the small muscle groups
                deep in the human body, maintain and improve the appearance of normal posture, achieve body balance,
                and create the range and ability of movement of the trunk and limbs.</p>
             <router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">More
               </router-link>
            </div>

          </div>

        </div>
      </div>
    </div>
    <!--================ Our banner Section end =================-->
  
  </section>
</template>

<script>
  export default {
    name: 'Class'
  }
</script>

<style>
</style>
