import { company } from '@/help_data/company/company.data';

function VissionAndMission() {
  return (
      <div className="mb-16 grid gap-4 md:mb-24 md:grid-cols-2">
        <article className="rounded-card bg-navy p-6 text-paper shadow-card sm:p-10">
          <p className="mb-3 text-xs font-bold tracking-widest text-light">
            رسالتنا
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-snug text-paper sm:text-3xl">
            أدوات عملية لحياة متوازنة.
          </h2>
          <p className="mb-0 leading-8 text-paper/80">{company.mission}</p>
        </article>
        <article className="rounded-card bg-mist p-6 sm:p-10">
          <p className="mb-3 text-xs font-bold tracking-widest text-royal">
            رؤيتنا
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-snug text-navy sm:text-3xl">
            تخطيط يساندك، لا يضغط عليك.
          </h2>
          <p className="mb-0 leading-8 text-grey">{company.vision}</p>
        </article>
      </div>
  )
}

export default VissionAndMission
