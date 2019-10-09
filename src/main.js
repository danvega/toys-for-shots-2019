// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: "assets/css/font-awesome.min.css"
  });

  head.link.push({
    rel: "stylesheet",
    href: "assets/css/bootstrap.min.css"
  });

  head.link.push({
    rel: "stylesheet",
    href: "assets/css/slick.css"
  });

  head.link.push({
    rel: "stylesheet",
    href: "assets/css/style.css"
  });

  head.link.push({
    rel: "stylesheet",
    href: "assets/css/media.css"
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Lobster+Two:400,700|Open+Sans:400,600,700|Parisienne&display=swap"
  });
}
