import { tool } from "../enums/tools";
import { type } from "../enums/types";
import { client } from "../enums/clients";
import { user } from "./user";

import h from "../modules/helpers";

const linkWeb = (item) => `https://${user.media.github.production}.github.io/${item}`;
const linkGithub = (item) => `https://github.com/${user.media.github.production}/${item}`;
const linkCodepen = (item) => `https://codepen.io/${user.media.codepen.user}/pen/${item}`;
const linkVimeo = (id) => `https://player.vimeo.com/video/${id}`;

const projects = [
  {
    date: "2021/12/20",
    title: "Portfolio 2022",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.vue,
      tool.vuex,
      tool.vueRouter,
      tool.typescript,
      tool.three,
      tool.scss,
      tool.git,
      tool.chartJS,
      tool.konva,
      tool.pug,
      tool.i18n,
    ],
    links: [
      {
        url: linkWeb("2022-vue"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("2022-vue"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.itla, "2011/07/25"),
      h.getNewID(client.miguelRivas, "2012/11/06"),
      h.getNewID(client.miguelRivas, "2015/05/23"),
      h.getNewID(client.miguelRivas, "2015/05/25"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
      h.getNewID(client.miguelRivas, "2017/01/01"),
      h.getNewID(client.miguelRivas, "2017/02/20"),
      h.getNewID(client.miguelRivas, "2018/06/27"),
      h.getNewID(client.miguelRivas, "2021/03/22"),
      h.getNewID(client.miguelRivas, "2021/02/27"),
      h.getNewID(client.miguelRivas, "2022/01/05"),
      h.getNewID(client.miguelRivas, "2022/01/24"),
      h.getNewID(client.miguelRivas, "2022/02/02"),
      h.getNewID(client.miguelRivas, "2022/02/07"),
      h.getNewID(client.miguelRivas, "2022/02/20"),
    ],
  },

  {
    date: "2022/03/04",
    title: "Grid Gallery",
    types: type.prototype,
    clients: [
      client.miguelRivas,
    ],
    disabled: true,
    tools: [
      tool.vue,
      tool.vuex,
      tool.vueRouter,
      tool.typescript,
      tool.scss,
      tool.git,
      tool.pug,
    ],
  },

  {
    date: "2022/02/20",
    title: "Pixel Editor",
    types: type.prototype,
    clients: [
      client.miguelRivas,
    ],
    disabled: true,
    tools: [
      tool.vue,
      tool.vuex,
      tool.vueRouter,
      tool.typescript,
      tool.scss,
      tool.git,
      tool.konva,
      tool.pug,
    ],
  },


  {
    date: "2022/02/07",
    title: "Avatar Builder",
    types: type.prototype,
    clients: [
      client.miguelRivas,
    ],
    disabled: true,
    tools: [
      tool.vue,
      tool.vuex,
      tool.vueRouter,
      tool.typescript,
      tool.scss,
      tool.git,
      tool.konva,
      tool.pug,
    ],
  },

  {
    date: "2022/02/02",
    title: "3D House",
    types: type.prototype,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.scss,
      tool.git,
      tool.pug,
    ],
    disabled: true,
  },


  {
    date: "2022/01/24",
    title: "Map 3D",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.blender,
    ],
  },

  {
    date: "2008/12/05",
    title: "Falling Code / Game",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.vb,
    ],
    links: [
      {
        url: linkGithub("visualbasic"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2008/11/11",
    title: "Bouncing Shapes",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.vb,
    ],
    links: [
      {
        url: linkGithub("visualbasic"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.itesa, "2008/05/16"),
    ],
  },
  {
    date: "2008/05/16",
    title: "Analog Clock",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.vb,
    ],
    links: [
      {
        url: linkGithub("visualbasic"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2005/10/01",
    title: "ATM",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2005/10/02",
    title: "Bubble Sort",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.pascal,
    ],
    links: [],
  },
  {
    date: "2005/10/03",
    title: "Infinite Menu",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2005/10/04",
    title: "Fibonacci Sequence",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2005/10/05",
    title: "Summatory / Accumulator",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2005/09/28",
    title: "Random Number",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2007/09/04",
    title: "Pacman Pixel Draw",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.c,
    ],
    links: [],
    children: [
      h.getNewID(client.miguelRivas, "2021/11/08"),
    ],
  },
  {
    date: "2008/05/17",
    title: "Tetravex",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.vb,
    ],
    links: [],
  },
  {
    date: "2008/05/18",
    title: "Minesweeper",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.vb,
    ],
    links: [],
  },
  {
    date: "2006/01/05",
    title: "Falling Code / Matrix Effect",
    types: type.app,
    disabled: true,
    clients: [
      client.itesa,
    ],
    tools: [
      tool.vb,
    ],
    links: [],
  },
  {
    date: "2013/12/06",
    title: "Pasteleria Del Jardin",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.delJardin,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/8",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/06/18",
    title: "Lanza tu Promo",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.highschool,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/10",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/05/28",
    title: "Audrey Hepburn",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.photoshop,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/12",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/03/21",
    title: "Audio 2",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/14",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/11/26",
    title: "Beauty is a Beast",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/16",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/10/24",
    title: "Linux Grub",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.freehand,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/24",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2019/07/10",
    title: "Play Sound",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.javascript,
    ],
    links: [
      {
        url: linkCodepen("bPzVPJ"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2020/08/08",
    title: "Switch",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.scss,
      tool.slim,
    ],
    links: [
      {
        url: linkCodepen("LYNEwLZ"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2020/06/17",
    title: "Toggle Arrow",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.scss,
      tool.slim,
    ],
    links: [
      {
        url: linkCodepen("VwembzX"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2020/08/18",
    title: "Range Slider",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.scss,
      tool.slim,
    ],
    links: [
      {
        url: linkCodepen("qBZNMyQ"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2011/07/17",
    title: "Madre Naturaleza",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.sk1,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/40",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/04/24",
    title: "El Montaje",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.flash,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/42",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/02/22",
    title: "Transformer",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/44",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2009/04/27",
    title: "Flygon",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.fireworks,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/48",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/12/12",
    title: "Baká",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.indesign,
      tool.pencil,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/16",
        text: "Document",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/28",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/06/14",
    title: "Le Machine",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/18",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/01/16",
    title: "Stars",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.inkscape,
      tool.html,
      tool.javascript,
      tool.css,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/20",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/06/25",
    title: "Water Matters",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/24",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/06/21",
    title: "Wickhop",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/28",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/04/29",
    title: "Corel Draw",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.corelDraw,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/34",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/08/03",
    title: "MP4",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.flash,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/38",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/04/25",
    title: "Dream",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/40",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2010/12/27",
    title: "Lapices de Colores",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.fireworks,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/48",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/07/14",
    title: "Living Walls",
    types: type.graphicDesign,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/42",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/08/23",
    title: "Tambora",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.inkscape,
      tool.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/38",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/09/20",
    title: "T-Magazine",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.scribus,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/32",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/11/30",
    title: "AguacateKun Identidad",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.autocad,
      tool.illustrator,
      tool.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/14",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/01/20",
    title: "Libro de Cuentos",
    types: type.graphicDesign,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.gimp,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/10",
        text: "Document",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/14",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/12/03",
    title: "Vacaciones Navideñas",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.descubria,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/12",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/08/03",
    title: "Social Network Facebook",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.socialNetwork,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/16",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/07/06",
    title: "Facebook App",
    types: type.graphicDesign,
    disabled: true,
    clients: [
      client.tiempoExtra,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/18",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/07/05",
    title: "Home Gallery Facebook",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.homeGallery,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/20",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/07/05",
    title: "SDQ Training Center Facebook",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.sdq,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/22",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/06/27",
    title: "Harina Blaquita Facebook",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.harinaBlanquita,
    ],
    tools: [
      tool.illustrator,
      tool.photoshop,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/24",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/12/29",
    title: "Jenny Aquino",
    types: type.graphicDesign,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/26",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/10/12",
    title: "Blindness Poster",
    types: type.graphicDesign,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.photoshop,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/30",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/09/13",
    title: "Diseño de Productos",
    types: type.document,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/34",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/04/16",
    title: "Raspberry Pi C",
    types: type.graphicDesign,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/44",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/02/28",
    title: "Maggiver",
    types: type.document,
    disabled: true,
    clients: [
      client.mangoBajito,
    ],
    tools: [
      tool.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/46",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/12/15",
    title: "Badges",
    types: type.graphicDesign,
    disabled: true,
    clients: [
      client.cosplayDominicano,
    ],
    tools: [
      tool.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/8",
        text: "Document",
        self: false,
      },
    ],
  },

  {
    date: "2012/10/26",
    title: "Print Portfolio",
    types: type.document,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005",
        text: "Portfolio 3",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000",
        text: "Portfolio 2",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000",
        text: "Portfolio 1",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2009/04/27"),
      h.getNewID(client.itla, "2010/07/07"),
      h.getNewID(client.miguelRivas, "2010/12/27"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/02/22"),
      h.getNewID(client.itla, "2011/04/24"),
      h.getNewID(client.itla, "2011/04/25"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.miguelRivas, "2011/07/17"),
      h.getNewID(client.itla, "2011/07/25"),
      h.getNewID(client.itla, "2011/07/31"),
      h.getNewID(client.itla, "2011/08/03"),
      h.getNewID(client.itla, "2011/11/15"),
      h.getNewID(client.itla, "2011/11/18"),
      h.getNewID(client.itla, "2011/12/05"),
      h.getNewID(client.miguelRivas, "2012/01/16"),
      h.getNewID(client.mangoBajito, "2012/02/28"),
      h.getNewID(client.itla, "2012/04/16"),
      h.getNewID(client.miguelRivas, "2012/04/29"),
      h.getNewID(client.miguelRivas, "2012/06/14"),
      h.getNewID(client.miguelRivas, "2012/06/21"),
      h.getNewID(client.itla, "2012/06/25"),
      h.getNewID(client.miguelRivas, "2012/07/14"),
      h.getNewID(client.itla, "2012/07/24"),
      h.getNewID(client.miguelRivas, "2012/08/23"),
      h.getNewID(client.miguelRivas, "2012/09/26"),
      h.getNewID(client.itla, "2012/09/13"),
      h.getNewID(client.miguelRivas, "2012/09/20"),
      h.getNewID(client.itla, "2012/10/12"),
      h.getNewID(client.miguelRivas, "2012/10/24"),
      h.getNewID(client.miguelRivas, "2012/11/06"),
      h.getNewID(client.itla, "2012/11/26"),
      h.getNewID(client.miguelRivas, "2012/12/12"),
      h.getNewID(client.miguelRivas, "2012/12/29"),
      h.getNewID(client.miguelRivas, "2013/01/20"),
      h.getNewID(client.itla, "2013/03/21"),
      h.getNewID(client.miguelRivas, "2013/05/28"),
      h.getNewID(client.highschool, "2013/06/18"),
      h.getNewID(client.harinaBlanquita, "2013/06/27"),
      h.getNewID(client.sdq, "2013/07/05"),
      h.getNewID(client.homeGallery, "2013/07/05"),
      h.getNewID(client.tiempoExtra, "2013/07/06"),
      h.getNewID(client.socialNetwork, "2013/08/03"),
      h.getNewID(client.miguelRivas, "2013/11/30"),
      h.getNewID(client.descubria, "2013/12/03"),
      h.getNewID(client.delJardin, "2013/12/06"),
      h.getNewID(client.cosplayDominicano, "2013/12/15"),
      h.getNewID(client.miguelRivas, "2014/02/09"),
    ],
  },

  {
    date: "2015/01/03",
    title: "Mainfront",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.pug,
      tool.jQuery,
      tool.grunt,
      tool.scss,
      tool.illustrator,
      tool.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("main-front"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("main-front"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/04/19",
    title: "CSS Study",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.angular,
      tool.sweetAlert,
      tool.illustrator,
      tool.scss,
      tool.pug,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("css-study"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("css-study"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2021/03/24",
    title: "Hello",
    types: type.app,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.vue,
      tool.illustrator,
      tool.scss,
      tool.git,
    ],
    links: [
      {
        url: `${linkWeb("hello")}`,
        text: "berlin",
        params: ["city=berlin"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "dusseldorf",
        params: ["city=dusseldorf"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "melbourne",
        params: ["city=melbourne"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "schwangau",
        params: ["city=schwangau"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "texas",
        params: ["city=texas"],
        self: false,
      },
      {
        url: linkGithub("hello"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/04/26",
    title: "Evolution of the Web",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.stellar,
      tool.inkscape,
      tool.pug,
      tool.git,
      tool.scss,
    ],
    links: [
      {
        url: linkWeb("evolution-web"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("evolution-web"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/05/14",
    title: "Robotic Screen",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.pug,
      tool.scss,
      tool.illustrator,
    ],
    links: [
      {
        url: linkCodepen("oXxPvw"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2015/05/23",
    title: "Minivan",
    types: type.prototype,
    clients: [
      client.miguelRivas,
    ],
    disabled: true,
    tools: [
      tool.pug,
      tool.scss,
    ],
  },
  {
    date: "2015/05/25",
    title: "Windows Form",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.scss,
      tool.jade,
      tool.illustrator,
    ],
  },
  {
    date: "2015/05/28",
    title: "Gear Builder",
    types: type.prototype,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.canvas,
      tool.pug,
      tool.scss,
    ],
    disabled: true,
    children: [
      h.getNewID(client.itesa, "2008/05/16"),
    ],
  },
  {
    date: "2015/12/07",
    title: "SVG 101",
    types: type.prototype,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.stellar,
      tool.snapSVG,
      tool.pug,
      tool.scss,
      tool.illustrator,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("svg-101"),
        text: "Prototype",
        self: false,
      },
      {
        url: linkGithub("svg-101"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/12/22",
    title: "Tetravex",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.javascript,
      tool.pug,
      tool.scss,
      tool.sizzle,
      tool.lodash,
      tool.velocity,
      tool.illustrator,
      tool.inkscape,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("tetravex"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("tetravex"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2017/02/20",
    title: "Pills",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.slim,
      tool.scss,
    ],
  },
  {
    date: "2010/07/07",
    title: "French Toast",
    disabled: true,
    types: type.motionGraphics,
    clients: [
      client.itla,
    ],
    tools: [
      tool.flash,
    ],
    links: [
      {
        url: linkVimeo("224945169"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2012/07/24",
    title: "La Guerra de Vectores",
    types: type.motionGraphics,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.flash,
    ],
    links: [
      {
        url: linkVimeo("175240185"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2016/11/21",
    title: "Wurlex",
    types: type.animation3D,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.unity,
      tool.premiere,
    ],
    links: [
      {
        url: linkVimeo("224977703"),
        text: "Video",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.itla, "2011/04/25"),
    ],
  },
  {
    date: "2014/02/09",
    title: "Screens Portfolio",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.pug,
      tool.scss,
      tool.jQuery,
      tool.php,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("2014"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("2014"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2012/01/16"),
      h.getNewID(client.miguelRivas, "2015/05/14"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
    ],
  },
  {
    date: "2016/08/11",
    title: "Spirit Portfolio",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.pug,
      tool.scss,
      tool.jQuery,
      tool.php,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("2016"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("2016"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2021/08/12",
    title: "Portfolio 2021",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.vue,
      tool.vuex,
      tool.vueRouter,
      tool.typescript,
      tool.three,
      tool.scss,
      tool.git,
      tool.chartJS,
      tool.firebase,
      tool.highlight,
      tool.gmap,
      tool.axios,
    ],
    links: [
      {
        url: linkWeb("2021-vue"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("2021-vue"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2012/11/06"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
      h.getNewID(client.miguelRivas, "2017/01/01"),
      h.getNewID(client.miguelRivas, "2018/06/27"),
      h.getNewID(client.miguelRivas, "2021/03/22"),
      h.getNewID(client.miguelRivas, "2021/09/12"),
      h.getNewID(client.miguelRivas, "2021/02/27"),
    ],
  },
  {
    date: "2018/01/01",
    title: "Grid Portfolio",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.angular,
      tool.scss,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("2018"),
        text: "Home",
        self: false,
      },
      {
        url: linkWeb("2018/drlogic.html"),
        text: "DrLogic",
        self: false,
      },
      {
        url: linkWeb("2018/apap.html"),
        text: "Apap",
        self: false,
      },
      {
        url: linkWeb("2018/bpr.html"),
        text: "BPR Bank",
        self: false,
      },
      {
        url: linkWeb("2018/presidente.html"),
        text: "Presidente",
        self: false,
      },
      {
        url: linkWeb("2018/tests.html"),
        text: "Tests",
        self: false,
      },
      {
        url: linkVimeo("260621089"),
        text: "Video",
        self: false,
      },
      {
        url: linkGithub("2018"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2021/03/24"),
    ]
  },
  {
    date: "2016/01/11",
    title: "HTML/LOVE",
    types: type.landingPage,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.haml,
      tool.scss,
      tool.illustrator,
      tool.animate,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("html-love"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("html-love"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2021/03/22",
    title: "Nano Grid",
    types: type.module,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.vue,
      tool.scss,
      tool.git,
      tool.typescript,
    ],
    disabled: true,
    links: [
      {
        url: "https://www.npmjs.com/package/nano-grid",
        text: "Node Module",
      },
      {
        url: linkGithub("nano-grid"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2019/07/10"),
      h.getNewID(client.miguelRivas, "2020/08/18"),
    ],
  },
  {
    date: "2021/09/12",
    title: "MR Kernel",
    types: type.module,
    clients: [
      client.miguelRivas,
    ],
    tools: [

      tool.typescript,
      tool.scss,
      tool.git,
    ],
    links: [
      {
        url: "https://www.npmjs.com/package/mr-kernel",
        text: "Node Module",
      },
      {
        url: linkGithub("mr-kernel"),
        text: "Github",
        self: false,
      },
    ],
    disabled: true,
  },
  {
    date: "2012/09/26",
    title: "Tips of Design",
    types: type.document,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.indesign,
    ],
  },
  {
    date: "2017/03/05",
    title: "Art Direction",
    types: type.document,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.indesign,
      tool.illustrator,
      tool.photoshop,
    ],
    disabled: true,
  },
  {
    date: "2015/05/10",
    title: "Bootstrap Prototype",
    types: type.landingPage,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.bootstrap,
      tool.pug,
      tool.illustrator,
      tool.scss,
    ]
  },
  {
    date: "2021/03/26",
    title: "3D Viewer",
    types: type.app,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.react,
      tool.redux,
      tool.three,
      tool.firebase,
      tool.scss,
      tool.typescript,
      tool.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("2021-react"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("2021-react"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2021/03/22"),
      h.getNewID(client.miguelRivas, "2021/09/12"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/07/25"),
    ],
  },
  {
    date: "2017/01/01",
    title: "FlatCSS",
    types: type.module,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.pug,
      tool.css,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("flat-css"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("flat-css"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2020/10/04",
    title: "Fake Audience",
    types: type.app,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.kotlin,
      tool.git,
    ],
    links: [
      {
        url: linkGithub("fake_audience"),
        text: "Github",
        self: false,
      }
    ],
  },
  {
    date: "2021/02/27",
    title: "3D Graph Colors",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.three,
    ],
  },
  {
    date: "2020/05/09",
    title: "Animated SVG Header",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.tweenMax,
      tool.html,
      tool.scss,
    ],
    links: [
      {
        url: linkCodepen("zYvjwEM"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2020/03/23",
    title: "Xpinner",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.svg,
      tool.scss,
    ],
    links: [
      {
        url: linkCodepen("VwLGgYv"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2018/06/27",
    title: "Color Wheel Creator",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.javascript,
      tool.scss,
    ],
    links: [
      {
        url: linkCodepen("ERdMLO"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2018/09/11",
    title: "Movie projector",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.svg,
      tool.scss,
    ],
    links: [
      {
        url: linkCodepen("rZdMYj"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2018/05/31",
    title: "Check Animation",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.svg,
      tool.scss,
    ],
    links: [
      {
        url: linkCodepen("ZRGpbQ"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2018/03/28",
    title: "Bounce Animation",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.canvas,
    ],
    links: [
      {
        url: linkCodepen("GxyMMz"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2015/05/29",
    title: "Spinners",
    types: type.prototype,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.pug,
      tool.scss,
    ],
    links: [
      {
        url: linkCodepen("eNgRRe"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2012/11/06",
    title: "Drakkar",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.blender,
    ],
    links: [
      {
        url: "https://sketchfab.com/3d-models/drakkar-d0f14c73155e460cb848a3db80e1cb07",
        text: "3D Model",
        self: false,
      },
    ],
  },
  {
    date: "2011/12/05",
    title: "Reloj",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/28",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/11/15",
    title: "Pencil Sharpener",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/30",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/11/18",
    title: "Batteries: depth of field",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/30",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/07/25",
    title: "Audi",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/32",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/07/31",
    title: "Mackbook Pro",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/34",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/06/22",
    title: "Backpack",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/36",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/07/06",
    title: "X-wing",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.itla,
    ],
    tools: [
      tool.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/38",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2014/06/16",
    title: "Destapa el Coro",
    types: type.app,
    clients: [
      client.presidente,
    ],
    disabled: true,
    tools: [
      tool.html,
      tool.jQuery,
      tool.grunt,
      tool.css,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("presidente-destapa-coro"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("presidente-destapa-coro"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/03/30",
    title: "Pacman",
    disabled: true,
    types: type.motionGraphics,
    clients: [
      client.presidente,
    ],
    tools: [
      tool.flash,
    ],
    links: [
      {
        url: linkVimeo("175240177"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2015/03/24",
    title: "BigPapi Selfie",
    types: type.motionGraphics,
    clients: [
      client.pepsi,
    ],
    tools: [
      tool.flash,
    ],
    disabled: true,
    links: [
      {
        url: linkVimeo("175240184"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2015/04/18",
    title: "Carnaval Presidente 2015",
    types: type.landingPage,
    disabled: true,
    clients: [
      client.presidente,
    ],
    tools: [
      tool.html,
      tool.jQuery,
      tool.grunt,
      tool.scss,
      tool.php,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("presidente-carnaval-2015/filter.html"),
        text: "Filter",
        self: false,
      },
      {
        url: linkWeb("presidente-carnaval-2015/home.html"),
        text: "Home",
        self: false,
      },
      {
        url: linkGithub("presidente-carnaval-2015"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/05/20",
    title: "Recarga Con RedRock",
    types: type.motionGraphics,
    disabled: true,
    clients: [
      client.redRock,
    ],
    tools: [
      tool.flash,
    ],
    links: [
      {
        url: linkVimeo("175240186"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2015/10/23",
    title: "Retrobrindis",
    types: type.app,
    disabled: true,
    clients: [
      client.presidente,
    ],
    tools: [
      tool.html,
      tool.css,
      tool.jQuery,
      tool.php,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("presidente-retro-brindis"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("presidente-retro-brindis"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/11/12",
    title: "Mineriza a tu Familia",
    types: type.app,
    clients: [
      client.apap,
    ],
    tools: [
      tool.pug,
      tool.jQuery,
      tool.css,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("apap-mineriza-familia"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("apap-mineriza-familia"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2017/04/04"),
    ],
  },
  {
    date: "2017/04/04",
    title: "Promo",
    types: type.motionGraphics,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.afterEffects,
      tool.premiere,
    ],
    links: [
      {
        url: linkVimeo("211801157"),
        text: "Video",
        self: false,
      },
    ],
    disabled: true,
  },
  {
    date: "2015/12/16",
    title: "Verano Presidente 2015",
    types: type.prototype,
    disabled: true,
    clients: [
      client.presidente,
    ],
    tools: [
      tool.html,
      tool.jQuery,
      tool.css,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("presidente-verano-2015"),
        text: "Filter",
        self: false,
      },
      {
        url: linkWeb("presidente-loader"),
        text: "Loader",
        self: false,
      },
      {
        url: linkGithub("presidente-verano-2015"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2016/02/22",
    title: "Website",
    types: type.app,
    clients: [
      client.drLogic,
    ],
    tools: [
      tool.haml,
      tool.scss,
      tool.jQuery,
      tool.bootstrap,
      tool.rails,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("drlogic/home.html"),
        text: "Home",
        self: false,
      },
      {
        url: linkWeb("drlogic/about-us.html"),
        text: "About Us",
        self: false,
      },
      {
        url: linkWeb("drlogic/contact-us.html"),
        text: "Contact Us",
        self: false,
      },
      {
        url: linkWeb("drlogic/portfolio.html"),
        text: "Portfolio",
        self: false,
      },
      {
        url: linkWeb("drlogic/404.html"),
        text: "404",
        self: false,
      },
      {
        url: linkGithub("drlogic"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.drLogic, "2016/03/08"),
      h.getNewID(client.miguelRivas, "2017/03/06"),
    ],
  },
  {
    date: "2017/03/06",
    title: "Promo",
    types: type.animation3D,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.flash,
    ],
    links: [
      {
        url: linkVimeo("207152756"),
        text: "Video",
        self: false,
      },
    ],
    disabled: true,
  },
  {
    date: "2016/03/08",
    title: "Terms and Conditions",
    types: type.document,
    clients: [
      client.drLogic,
    ],
    tools: [
      tool.indesign,
    ],
    disabled: true,
  },
  {
    date: "2016/06/16",
    title: "Server Prompt",
    types: type.prototype,
    clients: [
      client.pixelPerfectTree,
    ],
    tools: [
      tool.haml,
      tool.scss,
      tool.illustrator,
      tool.rails,
      tool.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("pixel-server-prompt/404"),
        text: "404",
        self: false,
      },
      {
        url: linkWeb("pixel-server-prompt/500"),
        text: "500",
        self: false,
      },
      {
        url: linkGithub("pixel-server-prompt"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2016/06/30",
    title: "Animated Header",
    types: type.prototype,
    clients: [
      client.voxel,
    ],
    tools: [
      tool.haml,
      tool.scss,
      tool.photoshop,
      tool.rails,
      tool.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("voxel-animation"),
        text: "Animated Header",
        self: false,
      },
      {
        url: linkGithub("voxel-animation"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/05/27",
    title: "Orange Reel",
    types: type.motionGraphics,
    clients: [
      client.orange,
    ],
    tools: [
      tool.premiere,
    ],
    links: [
      {
        url: linkVimeo("212177083"),
        text: "Video",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.orange, "2015/03/22"),
      h.getNewID(client.orange, "2015/03/24"),
      h.getNewID(client.orange, "2015/03/31"),
      h.getNewID(client.orange, "2015/04/24"),
      h.getNewID(client.orange, "2015/05/22"),
    ],
  },
  {
    date: "2015/03/22",
    title: "Essentials",
    types: type.motionGraphics,
    clients: [
      client.orange,
    ],
    tools: [
      tool.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/03/24",
    title: "Selfie",
    types: type.motionGraphics,
    clients: [
      client.orange,
    ],
    tools: [
      tool.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/04/24",
    title: "Café",
    types: type.motionGraphics,
    clients: [
      client.orange,
    ],
    tools: [
      tool.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/05/22",
    title: "Día de las Madres",
    types: type.motionGraphics,
    clients: [
      client.orange,
    ],
    tools: [
      tool.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/03/31",
    title: "Snorkeling",
    types: type.motionGraphics,
    clients: [
      client.orange,
    ],
    tools: [
      tool.flash,
    ],
    disabled: true,
  },
  {
    date: "2014/01/14",
    title: "Descubria Website",
    types: type.app,
    disabled: true,
    clients: [
      client.descubria,
    ],
    tools: [
      tool.html,
      tool.css,
      tool.jQuery,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("descubria"),
        text: "Home",
        self: false,
      },
      {
        url: linkGithub("descubria"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2014/08/06",
    title: "Server Prompt",
    types: type.prototype,
    clients: [
      client.capitalDBG,
    ],
    tools: [
      tool.html,
      tool.css,
      tool.illustrator,
      tool.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("capital-dbg-server-prompt"),
        text: "Prototype",
        self: false,
      },
      {
        url: linkGithub("capital-dbg-server-prompt"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/10/28",
    title: "Test",
    types: type.landingPage,
    disabled: true,
    clients: [
      client.pixelPerfectTree,
    ],
    tools: [
      tool.pug,
      tool.scss,
      tool.jQuery,
      tool.illustrator,
      tool.git,
    ],
    links: [
      {
        url: linkWeb("test-pixel-perfect-tree"),
        text: "Test",
        self: false,
      },
      {
        url: linkGithub("test-pixel-perfect-tree"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    clients: [
      client.presidente,
    ],
    title: "Destapa el Coro: User Flow",
    date: "2014/06/02",
    tools: [
      tool.illustrator,
    ],
    types: type.userFlow,
    disabled: true,
  },
  {
    date: "2020/05/05",
    title: "Popkern",
    types: type.module,
    clients: [
      client.enovational,
    ],
    tools: [
      tool.vue,
      tool.vueRouter,
      tool.rails,
      tool.slim,
      tool.scss,
      tool.git,
      tool.three,
      tool.tweenMax,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2020/03/23"),
      h.getNewID(client.miguelRivas, "2020/05/09"),
      h.getNewID(client.miguelRivas, "2020/06/17"),
      h.getNewID(client.miguelRivas, "2020/08/18"),
    ],
    disabled: true,
  },
  {
    date: "2017/09/20",
    title: "Lemon Deal",
    types: type.landingPage,
    clients: [
      client.plantTherapy,
    ],
    tools: [
      tool.html,
      tool.miva,
      tool.css,
      tool.jQuery,
      tool.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2017/12/01",
    title: "25 Days of Christmas",
    types: type.landingPage,
    clients: [
      client.plantTherapy,
    ],
    tools: [
      tool.html,
      tool.miva,
      tool.css,
      tool.jQuery,
      tool.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2015/08/03",
    title: "SIP",
    types: type.app,
    clients: [
      client.capitalDBG,
    ],
    tools: [
      tool.pug,
      tool.scss,
      tool.jQuery,
    ],
    disabled: true,
  },
  {
    date: "2014/10/18",
    title: "Presidente Photo Assignmet",
    types: type.app,
    clients: [
      client.presidente,
    ],
    tools: [
      tool.html,
      tool.jQuery,
      tool.grunt,
      tool.php,
      tool.scss,
    ],
    disabled: true,
  },
  {
    date: "2014/11/05",
    title: "Pronosticos: Wireframe",
    types: type.wireFrame,
    clients: [
      client.presidente,
    ],
    tools: [
      tool.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2016/01/29",
    title: "Shop.pr",
    types: type.document,
    clients: [
      client.pixelPerfectTree,
    ],
    tools: [
      tool.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2017/08/04",
    title: "Chakras",
    disabled: true,
    types: type.wireFrame,
    clients: [
      client.plantTherapy,
    ],
    tools: [
      tool.illustrator,
    ]
  },
  {
    date: "2016/02/18",
    title: "BPR Bank",
    types: type.app,
    clients: [
      client.bprBank,
    ],
    tools: [
      tool.haml,
      tool.scss,
      tool.jQuery,
      tool.bootstrap,
      tool.rails,
      tool.git,
    ],
    disabled: true,
  },
  {
    date: "2016/06/24",
    title: "Social Media Posts",
    types: type.socialMedia,
    disabled: true,
    clients: [
      client.voxel,
    ],
    tools: [
      tool.photoshop,
      tool.illustrator,
    ]
  },
  {
    date: "2019/01/01",
    title: "MSEC Financial Disclosures Portal",
    types: type.app,
    clients: [
      client.enovational,
    ],
    tools: [
      tool.html,
      tool.rails,
      tool.scss,
      tool.git,
      tool.bootstrap,
    ],
    disabled: true,
    links: [
      {
        url: "https://efds.ethics.maryland.gov/",
        text: "Website",
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
    ],
  },
  {
    date: "2018/05/01",
    title: "MDA Vetboard Portal",
    types: type.app,
    clients: [
      client.enovational,
    ],
    tools: [
      tool.html,
      tool.rails,
      tool.scss,
      tool.git,
      tool.bootstrap,
    ],
    disabled: true,
    links: [
      {
        url: "https://portal.mda.maryland.gov/",
        text: "Website"
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
    ],
  },
  {
    date: "2018/06/25",
    title: "Maryland Onestop",
    types: type.app,
    disabled: true,
    clients: [
      client.enovational,
    ],
    tools: [
      tool.vue,
      tool.rails,
      tool.scss,
      tool.git,
      tool.bootstrap,
    ],
    children: [
      h.getNewID(client.enovational, "2020/05/05"),
    ],
  },
  {
    date: "2018/09/04",
    title: "Formability",
    types: type.app,
    disabled: true,
    clients: [
      client.enovational,
    ],
    tools: [
      tool.vue,
      tool.vueRouter,
      tool.vuex,
      tool.rails,
      tool.scss,
      tool.git,
      tool.bootstrap,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
      h.getNewID(client.miguelRivas, "2018/06/27"),
      h.getNewID(client.miguelRivas, "2018/09/11"),
      h.getNewID(client.enovational, "2020/05/05"),
    ],
    links: [
      // {
      //   url: linkWeb("formability/demo"),
      //   text: "Demo",
      //   self: false,
      // },
      // {
      //   url: linkWeb("formability/401"),
      //   text: "401",
      //   self: false,
      // },
      // {
      //   url: linkWeb("formability/404"),
      //   text: "404",
      //   self: false,
      // },
      // {
      //   url: linkWeb("formability/500"),
      //   text: "500",
      //   self: false,
      // },
    ],
  },
  {
    date: "2021/06/21",
    title: "Connections Academy",
    types: type.app,
    disabled: true,
    clients: [
      client.jellyfish,
    ],
    tools: [
      tool.php,
      tool.wordpress,
      tool.html,
      tool.scss,
      tool.git,
      tool.grunt,
    ]
  },
  {
    date: "2021/11/08",
    title: "Bitmap Creator",
    types: type.app,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.python,
      tool.tkinter,
    ],
    links: [
      {
        url: linkGithub("bitmap-creator"),
        text: "Github",
        self: false,
      },
      {
        url: linkVimeo("643739212"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2021/11/14",
    title: "Spirit 3D",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.blender,
    ],
    links: [
      {
        url: "https://sketchfab.com/3d-models/monster-3d-435d64cdb0a042dfba2ae21d7d5a6986",
        text: "Spirit",
        self: false,
      },
      {
        url: "https://sketchfab.com/3d-models/404-section-4752fcc0d7714e7fbec4747a2fe10ba9",
        text: "404 section",
        self: false,
      },
    ],
  },
  {
    date: "2021/12/21",
    title: "Kaspar Island",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.blender,
    ],
    links: [],
  },
  {
    date: "2021/12/30",
    title: "Iqra Island",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.blender,
    ],
    links: [],
  },
  {
    date: "2021/12/10",
    title: "Goose",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.blender,
    ],
    links: [],
  },
  {
    date: "2022/01/05",
    title: "MR Universe",
    types: type.animation3D,
    disabled: true,
    clients: [
      client.miguelRivas,
    ],
    tools: [
      tool.unity,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2021/11/14"),
      h.getNewID(client.miguelRivas, "2021/12/10"),
      h.getNewID(client.miguelRivas, "2021/12/21"),
      h.getNewID(client.miguelRivas, "2021/12/30"),
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.miguelrivas.github.io.MRUniverse",
        text: "Google Play",
        self: false,
      },
    ],
  },
];

export { projects as projectsDB };