"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getWorks } from "@/content/works";
import { WorkCard } from "@/components/WorkCard";

export default function Home() {
  const works = getWorks().slice(0, 6);

  return (
    <main>
      <section className="pt-16 sm:pt-24">
        <div className="apple-container">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="text-[12px] tracking-[0.16em] text-[#86868B]">
                小诸的匠心工坊
              </p>
              <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-6xl lg:text-7xl">
                匠心独运，手作之美。
              </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#86868B] sm:text-[17px]">
                极简的留白、克制的排版与细腻的动效，把每一件作品的纹理与光影呈现到最好。
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/works"
                  className="inline-flex h-11 items-center rounded-full bg-[#0071E3] px-6 text-[14px] font-medium text-white shadow-sm transition-all duration-500 ease-out hover:brightness-110"
                >
                  浏览作品
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-11 items-center rounded-full border border-black/[0.10] bg-white/60 px-6 text-[14px] font-medium text-[#1D1D1F] transition-all duration-500 ease-out hover:bg-white"
                >
                  了解更多
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.05 }}
              className="rounded-[32px] bg-white/60 p-6 ring-1 ring-black/[0.06]"
            >
              <p className="text-[13px] text-[#86868B]">
                作品集已收录
                <span className="mx-1 text-[#1D1D1F]">{getWorks().length}</span>
                件
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {getWorks()
                  .slice(0, 6)
                  .map((w) => (
                    <div
                      key={w.slug}
                      className="aspect-square overflow-hidden rounded-2xl bg-black/[0.02]"
                    >
                      <img
                        src={w.coverSrc}
                        alt={w.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="apple-container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[12px] tracking-[0.16em] text-[#86868B]">
                最新作品
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1D1D1F] sm:text-5xl">
                以作品为主角
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#86868B]">
                每一张照片都尽量保持干净，让材质、纹理与结构说话。
              </p>
            </div>
            <Link
              href="/works"
              className="hidden text-[13px] font-medium text-[#1D1D1F] transition-colors duration-300 hover:text-[#0071E3] sm:inline"
            >
              查看全部 →
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {works.map((w) => (
              <WorkCard key={w.slug} work={w} />
            ))}
          </motion.div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/works"
              className="inline-flex h-11 items-center rounded-full border border-black/[0.10] bg-white/60 px-6 text-[14px] font-medium text-[#1D1D1F] transition-all duration-500 ease-out hover:bg-white"
            >
              查看全部
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
