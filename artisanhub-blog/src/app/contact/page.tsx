import Link from "next/link";
import { Section } from "@/components/Section";

function Item({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/[0.06] transition-all duration-500 ease-out hover:bg-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
      <p className="text-[12px] tracking-[0.16em] text-[#86868B]">{label}</p>
      <p className="mt-2 text-[15px] font-medium text-[#1D1D1F]">{value}</p>
    </div>
  );

  if (!href) return content;
  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}

export default function ContactPage() {
  return (
    <main>
      <Section
        eyebrow="CONTACT"
        title="联系"
        subtitle="如果你想定制作品、合作拍摄，或只是聊聊手作与材料，都欢迎联系。"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] bg-white/60 p-7 ring-1 ring-black/[0.06] sm:p-10">
            <p className="text-[15px] leading-relaxed text-[#86868B]">
              为了保持页面极简，这里先提供几个常用联系入口。你可以把真实信息替换掉下面的示例。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Item
                label="EMAIL"
                value="hello@example.com"
                href="mailto:hello@example.com"
              />
              <Item label="WECHAT" value="xiaozhu_handmade" />
              <Item label="INSTAGRAM" value="@xiaozhu.handmade" />
              <Item label="LOCATION" value="China" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/works"
                className="inline-flex h-11 items-center rounded-full bg-[#0071E3] px-6 text-[14px] font-medium text-white shadow-sm transition-all duration-500 ease-out hover:brightness-110"
              >
                看作品再说
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center rounded-full border border-black/[0.10] bg-white/60 px-6 text-[14px] font-medium text-[#1D1D1F] transition-all duration-500 ease-out hover:bg-white"
              >
                返回首页
              </Link>
            </div>
          </div>

          <aside className="rounded-[32px] bg-white/70 p-7 ring-1 ring-black/[0.06] sm:p-10">
            <p className="text-[12px] tracking-[0.16em] text-[#86868B]">NOTE</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#86868B]">
              GitHub Pages 是静态部署，后续如果你想加“留言/表单”，建议接入第三方表单服务
              （例如 Formspree）或迁移到支持 Serverless 的平台。
            </p>
          </aside>
        </div>
      </Section>
    </main>
  );
}

