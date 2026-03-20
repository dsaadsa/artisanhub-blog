import Link from "next/link";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <main>
      <Section
        eyebrow="ABOUT"
        title="关于小诸的匠心工坊"
        subtitle="把手作当作一种长期主义：用克制的设计与细节，记录每一次打磨、试色与完成。"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-[32px] bg-white/70 p-7 ring-1 ring-black/[0.06] sm:p-10">
            <p className="text-[15px] leading-relaxed text-[#86868B]">
              这里是一个极简的作品与文字空间。我们尽量减少装饰，让材质纹理、光影层次与
              结构比例成为主角。每一件作品从灵感到完成，都包含大量“看不见的时间”。我希望
              把它们用干净的图像和少量文字留存下来。
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-[#86868B]">
              风格上参考了苹果官网的视觉逻辑：更大的留白、更清晰的层级、更微妙的动效，以及
              对图片质量的尊重。你看到的每一次悬停、淡入与位移，都应该是轻的、慢的、自然的。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/works"
                className="inline-flex h-11 items-center rounded-full bg-[#0071E3] px-6 text-[14px] font-medium text-white shadow-sm transition-all duration-500 ease-out hover:brightness-110"
              >
                进入作品集
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full border border-black/[0.10] bg-white/60 px-6 text-[14px] font-medium text-[#1D1D1F] transition-all duration-500 ease-out hover:bg-white"
              >
                联系我
              </Link>
            </div>
          </div>

          <aside className="rounded-[32px] bg-white/60 p-7 ring-1 ring-black/[0.06] sm:p-10">
            <p className="text-[12px] tracking-[0.16em] text-[#86868B]">VALUES</p>
            <ul className="mt-5 space-y-4 text-[14px] leading-relaxed text-[#86868B]">
              <li>
                <span className="text-[#1D1D1F]">极简</span>：不靠装饰堆砌氛围，让内容成立。
              </li>
              <li>
                <span className="text-[#1D1D1F]">细节</span>：最后的打磨与收边，才决定质感。
              </li>
              <li>
                <span className="text-[#1D1D1F]">节奏</span>：慢一点的动画与留白，让作品呼吸。
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </main>
  );
}

