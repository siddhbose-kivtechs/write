"use client";

import ResultDisplayer from "@/components/result-displayer";
import { HistoryItem } from "@/lib/history";

export default function GenerationViewPage({
  params,
}: {
  params: { id: string; lng: string };
}) {
  const id = (params.id as string) ?? 0;
  const item: HistoryItem = JSON.parse(
    localStorage.getItem("synapsy_write_history") ?? "[]",
  )[id];
  return (
    <main>
      <section className="flex flex-col items-center justify-center">
        <section
          className="m-2 rounded-md p-4 text-justify shadow-lg dark:bg-slate-900 print:text-black print:shadow-none md:w-[90%] lg:w-[60%] xl:w-[50%]"
          id="ct"
        >
          <ResultDisplayer res={item.content} type={item.template} />
        </section>
      </section>
    </main>
  );
}
