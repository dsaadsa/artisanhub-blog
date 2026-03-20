export type Work = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  coverSrc: string;
  gallerySrcs?: string[];
};

const works: Work[] = [
  {
    slug: "warm-wood-01",
    title: "暖木细语",
    tag: "木艺",
    excerpt: "顺着纹理打磨出的温润质感，让光线停留在每一道弧面上。",
    coverSrc: "/works/work-01.jpg",
    gallerySrcs: ["/works/work-01.jpg"],
  },
  {
    slug: "ceramic-glaze-02",
    title: "釉色留白",
    tag: "陶瓷",
    excerpt: "低饱和的釉面在留白里呼吸，像一段安静的句子。",
    coverSrc: "/works/work-02.jpg",
    gallerySrcs: ["/works/work-02.jpg"],
  },
  {
    slug: "stitch-soft-03",
    title: "一针一线",
    tag: "刺绣",
    excerpt: "把时间缝进纹理，细节在近处才会被看见。",
    coverSrc: "/works/work-03.jpg",
    gallerySrcs: ["/works/work-03.jpg"],
  },
  {
    slug: "grain-and-shadow-04",
    title: "纹理与影",
    tag: "木艺",
    excerpt: "极简结构之下，是对比例与手感的克制追求。",
    coverSrc: "/works/work-04.jpg",
    gallerySrcs: ["/works/work-04.jpg"],
  },
  {
    slug: "clay-silence-05",
    title: "泥土的安静",
    tag: "陶瓷",
    excerpt: "不靠繁复装饰，只靠形体本身成立。",
    coverSrc: "/works/work-05.jpg",
    gallerySrcs: ["/works/work-05.jpg"],
  },
  {
    slug: "handmade-blue-06",
    title: "手作的蓝",
    tag: "染织",
    excerpt: "一抹克制的蓝，像强调色一样点亮整体的节奏。",
    coverSrc: "/works/work-06.jpg",
    gallerySrcs: ["/works/work-06.jpg"],
  },
  {
    slug: "curve-detail-07",
    title: "弧线细节",
    tag: "木艺",
    excerpt: "轻微的圆角与过渡，让触感也变得柔和。",
    coverSrc: "/works/work-07.jpg",
    gallerySrcs: ["/works/work-07.jpg"],
  },
  {
    slug: "matte-ceramic-08",
    title: "哑光釉面",
    tag: "陶瓷",
    excerpt: "光泽被压低后，形体的层次反而更清晰。",
    coverSrc: "/works/work-08.jpg",
    gallerySrcs: ["/works/work-08.jpg"],
  },
  {
    slug: "thread-and-air-09",
    title: "线与空气",
    tag: "刺绣",
    excerpt: "用稀疏与密集制造呼吸感，让图案自然浮现。",
    coverSrc: "/works/work-09.jpg",
    gallerySrcs: ["/works/work-09.jpg"],
  },
  {
    slug: "workbench-10",
    title: "工作台日常",
    tag: "记录",
    excerpt: "材料、工具与手的距离，决定了作品的气质。",
    coverSrc: "/works/work-10.jpg",
    gallerySrcs: ["/works/work-10.jpg"],
  },
  {
    slug: "warm-neutral-11",
    title: "暖调中性",
    tag: "综合",
    excerpt: "在克制的色彩里，让每一次触摸都更有意义。",
    coverSrc: "/works/work-11.jpg",
    gallerySrcs: ["/works/work-11.jpg"],
  },
  {
    slug: "finishing-12",
    title: "收边与完成",
    tag: "工艺",
    excerpt: "最后 5% 的打磨，决定 95% 的精致。",
    coverSrc: "/works/work-12.jpg",
    gallerySrcs: ["/works/work-12.jpg"],
  },
];

export function getWorks(): Work[] {
  return works;
}

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

