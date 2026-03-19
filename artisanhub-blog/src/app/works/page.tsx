import Link from "next/link";
import { getWorks } from "@/content/works";
import { WorkCard } from "@/components/WorkCard";
import { Section } from "@/components/Section";

export default function WorksPage() {
  const works = getWorks();
  const tags = Array.from(new Set(works.map((w) => w.tag)));

  return (
    <main>
      <Section
        eyebrow="WORKS"
        title="作品集"
        subtitle="以极简的方式呈现作品本身。你可以从标签快速浏览，也可以进入详情查看更完整的图像与文字。"
      >
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/[0.08] bg-white/60 px-4 py-2 text-[13px] text-[#1D1D1F]"
            >
              {tag}
            </span>
          ))}
          <Link
            href="/"
            className="ml-auto hidden text-[13px] font-medium text-[#1D1D1F] transition-colors duration-300 hover:text-[#0071E3] sm:inline"
          >
            返回首页 →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <WorkCard key={w.slug} work={w} />
          ))}
        </div>
      </Section>
    </main>
  );
}

