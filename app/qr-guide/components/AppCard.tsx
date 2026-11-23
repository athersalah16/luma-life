import Image from "next/image";
import type { Resource } from "@/types/resource.types";
import { AppDownloadLinks } from "@/app/qr-guide/components/AppDownloadLinks";

export function AppCard({ resource }: { resource: Resource }) {
  return (
    <article className="flex min-w-0 flex-col rounded-card border border-line bg-paper p-5 shadow-card sm:p-7">
      <div className="mb-3 flex items-center gap-4">
        <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-mist font-display text-xl font-bold text-navy sm:size-20">
          {resource.icon ? (
            <Image
              src={resource.icon}
              alt=''
              width={80}
              height={80}
              className="size-full object-contain p-1"
            />
          ) : (
            <span aria-hidden="true">{resource.name.slice(0, 1)}</span>
          )}
        </div>
        <div>
          <p className="mb-1 text-xs text-grey">تطبيق مقترح</p>
          <h3 className="mb-0 font-display text-xl font-bold text-navy">
            {resource.name}
          </h3>
        </div>
      </div>
      <p className="mb-4 leading-7 text-grey">{resource.description}</p>
      <dl className="mb-0 grid gap-4">
        <div>
          <dt className="mb-1 text-xs font-bold text-navy">
            الغرض في هذا الدليل
          </dt>
          <dd className="m-0 text-sm leading-7 text-grey">{resource.purpose}</dd>
        </div>
        <div>
          <dt className="mb-1 text-xs font-bold text-navy">
            كيف يكمّل الدفتر؟
          </dt>
          <dd className="m-0 text-sm leading-7 text-grey">
            {resource.notebookUse}
          </dd>
        </div>
      </dl>
      <AppDownloadLinks links={resource.links} />
    </article>
  );
}
