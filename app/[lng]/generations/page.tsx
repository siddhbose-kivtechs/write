"use client";
import { useTranslation } from "@/app/i18n/client";
import { GenerationItem } from "@/components/generation-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { HistoryItem } from "@/lib/history";
import { Download, Eraser, List, Upload } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Creations({
  params: { lng },
}: {
  params: { lng: any };
}) {
  const { t } = useTranslation(lng, "common");
  let histo = [];
  if (typeof window !== "undefined") {
    histo = JSON.parse(localStorage.getItem("synapsy_write_history") ?? "[]");
  }
  const [history, setHistory] = useState<HistoryItem[]>(histo);
  const [query, setQuery] = useState("");

  function Import(event: any) {
    let file = event.target.files[0]; // get the selected file
    let reader = new FileReader(); // create a FileReader object
    reader.onload = function (event) {
      let text: string = event.target?.result as string; // get the file content as text
      localStorage.setItem("synapsy_write_history", text);
      refresh();
    };
    reader.readAsText(file); // read the file as text
  }

  function refresh() {
    setHistory(
      JSON.parse(localStorage.getItem("synapsy_write_history") ?? "[]"),
    );
  }
  return (
    <main className="m-2 pb-14 sm:mb-2 sm:mt-16 sm:pb-0">
      <header>
        <section className="flex items-center space-x-2">
          <List />
          <span>
            <h2 className="text-2xl font-bold">{t("generations")}</h2>
            <p>{t("no-gen-text")}</p>
          </span>
        </section>
        <Input
          type="file"
          id="FileSelector"
          accept="application/json"
          className="hidden"
          onChange={Import}
        ></Input>
        <div className="flex space-x-2">
          <Link
            target="_blank"
            href={
              "data:text/plain;charset=UTF-8," +
              encodeURIComponent(
                typeof window !== "undefined"
                  ? JSON.stringify(history)
                  : "{msg: 'an error occurred'}",
              )
            }
            download={"generations.json"}
          >
            <Button variant="link" className="space-x-2 px-0">
              <Upload height={16} /> <p>{t("export")}</p>
            </Button>
          </Link>
          <Button
            variant="link"
            onClick={() =>
              (
                document.getElementById("FileSelector") as HTMLInputElement
              ).click()
            }
            className="space-x-2 px-0"
          >
            <Download height={16} /> <p>{t("import")}</p>
          </Button>
        </div>
      </header>
      <Separator className="my-2" />
      <span className="flex justify-center sm:block">
        <Input
          className="sm:max-w-[350px]"
          placeholder={t("search-history")}
          value={query}
          onChange={(v) => setQuery(v.target.value)}
        />
      </span>
      {!(history.length == 0) ? (
        <section className="flex flex-wrap justify-center p-5 md:justify-start">
          {history.map((el, i) =>
            el.prompt.toLowerCase().includes(query.toLowerCase()) ? (
              <GenerationItem
                refresh={refresh}
                id={i}
                key={i}
                item={el}
                lng={lng}
              />
            ) : (
              <></>
            ),
          )}
        </section>
      ) : (
        <section className="flex min-h-[50vh] flex-col items-center justify-center">
          <Eraser height={48} width={48} />
          <p>{t("no-gen")}</p>
        </section>
      )}
    </main>
  );
}
