"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {eyebrow ? (
            <p className="text-[12px] tracking-[0.16em] text-[#86868B]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1D1D1F] sm:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#86868B]">
              {subtitle}
            </p>
          ) : null}
        </motion.div>

        {children ? <div className="mt-10 sm:mt-12">{children}</div> : null}
      </div>
    </section>
  );
}

