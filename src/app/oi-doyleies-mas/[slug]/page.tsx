import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { resources } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Άρθρο" title={resource.title} description={resource.excerpt} />
      <section className="content-shell mt-10">
        <article className="rounded-3xl border border-line bg-paper p-8">
          {resource.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mb-5 text-base leading-relaxed text-ink/85">
              {paragraph}
            </p>
          ))}
        </article>
      </section>
    </>
  );
}
