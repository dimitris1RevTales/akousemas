type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="content-shell pt-12 md:pt-16">
      <div className="rounded-3xl border border-line bg-paper p-8 md:p-12">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wider text-clay">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-semibold text-teal-deep md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink/80">{description}</p>
      </div>
    </section>
  );
}
