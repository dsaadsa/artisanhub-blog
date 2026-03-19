import { notFound } from "next/navigation";
import Link from "next/link";
import { getWorkBySlug, getWorks } from "@/content/works";

export function generateStaticParams() {
  return getWorks().map((w) => ({ slug: w.slug }));
}

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = getWorkBySlug(params.slug);
  if (!work) notFound();

  return (
    <main className="pb-20">
      <section className="pt-10 sm:pt-14">
        <div className="apple-container">
          <Link
            href="/works"
            className="text-[13px] font-medium text-[#1D1D1F] transition-colors duration-300 hover:text-[#0071E3]"
          >
            ← 返回作品集
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="overflow-hidden rounded-[32px] bg-black/[0.02] ring-1 ring-black/[0.06]">
              <img
                src={work.coverSrc}
                alt={work.title}
                className="h-full w-full object-cover"
              />
            </div>

            <aside className="rounded-[28px] bg-white/70 p-6 ring-1 ring-black/[0.06] sm:p-7">
              <p className="text-[12px] tracking-[0.16em] text-[#86868B]">
                {work.tag}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1D1D1F] sm:text-4xl">
                {work.title}
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-[#86868B]">
                {work.excerpt}
              </p>
              <div className="mt-6 border-t border-black/[0.06] pt-6 text-[13px] text-[#86868B]">
                <p>建议：在自然光下拍摄能更好呈现材质纹理。</p>
              </div>
            </aside>
          </div>

          {work.gallerySrcs?.length ? (
            <div className="mt-12">
              <p className="text-[12px] tracking-[0.16em] text-[#86868B]">
                GALLERY
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {work.gallerySrcs.map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-3xl bg-black/[0.02] ring-1 ring-black/[0.06]"
                  >
                    <img
                      src={src}
                      alt={work.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

