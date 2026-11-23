import { SectionHeading } from '@/components/common/SectionHeading';
import { company } from '@/help_data/company/company.data';

function OurValues() {
  return (
        <section>
        <SectionHeading
          eyebrow="ما نؤمن به"
          title="قيم توجه كل خطوة."
          description={company.philosophy}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {company.values.map((value, index) => (
            <article
              className="rounded-card border border-line bg-paper p-5 shadow-card"
              key={value.title}
            >
              <span className="text-sm font-bold text-royal">
                {index + 1}
              </span>
              <h3 className="mb-2 mt-4 text-lg font-bold text-navy">
                {value.title}
              </h3>
              <p className="mb-0 text-sm leading-7 text-grey">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
  )
}

export default OurValues
