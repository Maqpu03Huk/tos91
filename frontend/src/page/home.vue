<template>
  <div class="hero-section">
    <div class="hero-content">
      <div class="hero-wrapper">
        <h1 class="hero-title">ТОС <span class="orange"> 91</span></h1>
        <h2  class="hero-subtitle"> <span class="orange">Квартал города Ангарска</span></h2 >
        <p class="hero-description">
          Вместе строим уютный и безопасный микрорайон. Объединяем жителей для
          решения актуальных вопросов благоустройства и развития территории
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">Отправить сообщение</button>
          <button class="btn btn-secondary">Узнать больше</button>
        </div>
        <div class="hero-tagline">Вместе создаем уют</div>
      </div>  
    </div>

    <div class="hero-image-wrapper">
      <div class="hero-image">
        <img src="../images/house2.jpg" alt="дом тоса" />
      </div>
    </div>

  </div>

  <div class="members-section">
    <div class="member">
      <div class="left-position">
        <img src="../images/members/one.jpg" alt="">
      </div>
      <div class="right-position">
        <p>Козлова Ирина Николаевна</p>
        <p>председатель совета ТОС</p>
        <p>+7 (950) 123-45-97</p>
      </div>
    </div>

    <div class="member">
      <div class="left-position">
        <img src="../images/members/two.jpg" alt="">
      </div>
      <div class="right-position">
        <p>Козлова Ирина Николаевна</p>
        <p>председатель совета ТОС</p>
        <p>+7 (950) 123-45-97</p>
      </div>
    </div>

    <div class="member">
      <div class="left-position">
        <img src="../images/members/free.jpg" alt="">
      </div>
      <div class="right-position">
        <p>Козлова Ирина Николаевна</p>
        <p>председатель совета ТОС</p>
        <p>+7 (950) 123-45-97</p>
      </div>
    </div>

    <div class="member">
      <div class="left-position">
        <img src="../images/members/one.jpg" alt="">
      </div>
      <div class="right-position">
        <p>Козлова Ирина Николаевна</p>
        <p>председатель совета ТОС</p>
        <p>+7 (950) 123-45-97</p>
      </div>
    </div>
  </div>

  <div class="about-section">
  </div>

  <div class="news-section">
  </div>

  <div class="location-section">
  </div>

  <div class="contact-section">
  </div>
</template>

<style>
.members-section{
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.member{
  display: flex;
  align-items: center;
  gap: 20px;

}
.member img {
  border-radius: 50%;
}
.hero-tagline{
  color: rgb(163, 109, 58);
  font-size: 20px;
}
.btn{
  background-color: rgb(221, 152, 87);
  border: none;
  border-radius: 10px;
  font-size: 35px;
  padding: 10px;
}
.hero-actions{
  display: flex;
  gap: 10px;
}
.orange{
  color: rgb(221, 152, 87);
}
.hero-title {
  font-size: 95px;
}
.hero-subtitle {
  font-size: 36px;
}
.hero-description {
  font-size: 36px;
  width: 55%;
}
.button {
  display: flex;
}
.button button {
  width: 150px;
  height: 50px;
}
.hero-section {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 850px;
}
.hero-content {
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
}

.hero-image img {
  width: 1300px;
  height: 850px;
  object-fit: cover;

  /* Загиб по форме основного изображения */
  clip-path: polygon(
    100% 2.17%,
    83.03% 6.52%,
    56.57% 10.87%,
    33.21% 17.39%,
    24.64% 21.74%,
    16.42% 28.26%,
    10.77% 34.78%,
    6.93% 41.3%,
    4.38% 47.83%,
    2.55% 54.35%,
    1.64% 60.87%,
    1.28% 65.22%,
    1.09% 69.57%,
    1.09% 73.91%,
    1.46% 78.26%,
    2.01% 82.61%,
    2.55% 86.96%,
    3.28% 91.3%,
    4.2% 95.65%,
    5.11% 100%,
    100% 100%
  );
}
</style>
