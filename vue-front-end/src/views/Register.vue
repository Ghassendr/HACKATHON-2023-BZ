<template>
  <div>
    <div class="gauche" data-aos="flip-left" data-aos-duration='225'>

      <div class="type"><span style="padding-top:20% ;">  <h6 style="color: #80a824 !important;"> Relaxation exercises:</h6> Deep breathing, meditation, or visualization techniques can help reduce anxiety and
        stress.</span></div>
      <div>
        <img src="../assets/4944406.jpg" alt="">
      </div>
    </div>
 
    <div class="droite" data-aos="flip-right">

<div>
  <img src="../assets/3297115.jpg" alt="">
</div>

<div class="type" ><span style="padding-top:20% ;">  <h6 style="color: #80a824 !important;">Exercices physiques :</h6>  la pratique régulière d'une activité physique peut améliorer l'humeur, réduire le stress et augmenter l'estime de soi.</span></div>
</div>




    <div class="gauche" data-aos="flip-left">

<div class="type"><span style="padding-top:20% ;">  <h6 style="color: #80a824 !important;"> Thérapie cognitivo-comportementale :</h6>  cette thérapie vise à aider le patient à identifier les schémas de pensée négatifs et à les remplacer par des pensées plus positives et réalistes.</span></div>
<div>
  <img src="../assets/Woman conducting hypnosis session flat vector illustration.jpg" alt="">
</div>
</div>


<div class="droite" data-aos="flip-right">

<div>
  <img src="../assets/2713166.jpg" alt="">
</div>

<div class="type"><span style="padding-top:20% ;">  <h6 style="color: #80a824 !important;">Emotional expression exercises: </h6>Writing, painting, or other forms of artistic expression can help the patient express their emotions creatively.</span></div>
</div>





    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active" align="center">
          <img src="../assets/81276675.jpg" style="height:500px;width: 750px; " class="d-block " alt="...">
        </div>
        <div class="carousel-item" align="center">
          <img src="../assets/81276676.jpg" style="height:500px;width: 750px;" class="d-block" alt="...">
        </div>
        <div class="carousel-item" align="center">
          <img src="../assets/81276677.gif" style="height:500px;width: 750px;" class="d-block " alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>
</template>

<script>

import User from '../models/user';

export default {
  name: 'Register_page',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters',
      ],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;

      this.$store.dispatch('auth/register', this.user).then(
        data => {
          this.message = data.message;
          this.successful = true;
        },
        error => {
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    }

  }
};
</script>

<style scoped>
.image {
  background-color: white;
}

.info img {
  height: 450px;
}

.dip img:hover {
  height: 720px;

}

.info img:hover {
  height: 465px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}


.info {
  padding-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.datainfo {
  background-color: white;

}
.droite {
  display: grid;
  grid-template-columns: 40% 60%;
}

.gauche {
  display: grid;
  grid-template-columns: 60% 40%;
}
.type{
  text-align: center;
  display: grid;
  justify-content: center;
}
.droite img {
  height: 450px;
}
.gauche img {
  height: 450px;
}</style>