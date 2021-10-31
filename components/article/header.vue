<template>
  <header class="header-article" :class="{'havesBg': img}" :style="img ? `background-image: url(/img/${img});` : ''">
    <social-head
      :title="title"
      :description="description"
      :image="'/img/'+img"
    />
    <div>
      <span v-if="type">{{ type }}</span>
      <h1>{{ title }}</h1>
      <p v-if="description" class="desc">
        {{ description }}
      </p>
      <p v-if="date">
        {{ date }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderArticle',
  props: {
    type: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
$titleOffset: 3em;
.header-article {
  aspect-ratio: 3/1;
  background: url("/img/brehat.jpg");
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  margin-bottom: $titleOffset;
  &>div {
    text-align: center;
    transform: translateY($titleOffset);
    &>span {
      font-family: 'staatliches';
      color: #354bcf;
      font-size: 1.7em;
    }
    &>p {
      color: #333;
    }
    &>p.desc {
      max-width: 35em;
      margin: auto;
      color: #354bcf;
    }
  }
}

.content-article, .header-article {
  display: flex;
  justify-content: center;
  &>div {
    background: white;
    width: 80%;
    padding: 1.5em 2em;
  }
}

@media screen and (max-width: 600px) {
  .header-article {
    aspect-ratio: 16/9;
  }
}
</style>
