import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Motues的日常生活',
  subtitle: "",
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/bg1.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.Link,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
    //   external: true,                               // Show an external link icon and will open in a new tab
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/Motues.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Motues',
  bio: 'Like River!',
  links: [
    // Visit https://icones.js.org/ for icon codes
    // You will need to install the corresponding icon set if it's not already included
    // `pnpm add @iconify-json/<icon-set-name>`
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/motues',
    },
    {
      name: 'Mail',
      icon: 'fa6-solid:envelope',                               
      url: 'mailto:2901987286@qq.com',
    },
    {
      name: 'QQ',
      icon: 'fa6-brands:qq',
      url: 'tencent://message/?uin=2901987286&Site=&Menu=yes',
    },
    // {
    //   name: 'Phone',
    //   icon: 'fa6-solid:phone',
    //   url: 'tel:19856013376',
    // },
    {
      name: 'NetEase',
      icon: 'simple-icons:neteasecloudmusic',
      url: 'https://music.163.com/#/user/home?id=1601379853',
    }
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
