<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  head: {
    title: {
      inner: 'WorkSpace|R.D.Sakamoto',
    },
    meta: [
      { name: 'application-name', content: 'WorkSpace|R.D.Sakamoto' },
      {
        name: 'description',
        content: 'A work-space created by R.D.Sakamoto.',
        id: 'desc',
      },
      // Twitter
      { name: 'twitter:title', content: 'WorkSpace|R.D.Sakamoto' },
      // with shorthand
      { n: 'twitter:description', c: 'A work-space created by R.D.Sakamoto.' },
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: 'WorkSpace|R.D.Sakamoto' },
      {
        itemprop: 'description',
        content: 'A work-space created by R.D.Sakamoto.',
      },
      // ...
      // Facebook / Open Graph
      { property: 'fb:app_id', content: 'WorkSpace|R.D.Sakamoto' },
      { property: 'og:title', content: 'WorkSpace|R.D.Sakamoto' },
      // with shorthand
      { p: 'og:image', c: require('../static/icons/icon-128x128.png') },
    ],
    link: [
      { rel: 'canonical', href: 'https://work.skmt3p.com/', id: 'canonical' },
      { rel: 'author', href: 'https://skmt3p.com', undo: false },
      {
        rel: 'icon',
        href: require('../static/icons/icon-48x48.png'),
        sizes: '48x48',
        type: 'image/png',
      },
      // ...
    ],
  },
})
</script>
