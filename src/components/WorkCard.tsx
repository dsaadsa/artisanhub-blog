"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Work } from "@/content/works";

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <motion.article
        whileHover={{ scale: 1.01, y: -2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-hidden rounded-3xl bg-white/70 ring-1 ring-black/[0.06] shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/[0.02]">
          <motion.img
            src={work.coverSrc}
            alt={work.title}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[12px] tracking-wide text-[#86868B]">{work.tag}</p>
            <span className="text-[12px] text-[#86868B] transition-colors duration-300 group-hover:text-[#1D1D1F]">
              查看
            </span>
          </div>
          <h3 className="mt-2 text-[20px] font-semibold tracking-tight text-[#1D1D1F]">
            {work.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-[#86868B]">
            {work.excerpt}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}

