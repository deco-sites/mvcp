import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
}

export default function MadeWithDeco({ madeWith }: Props = {
  madeWith: {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  }
}) {
  return (
    <div class="lg:container lg:mx-auto md:max-w-6xl mx-4 pt-16 text-sm">
      <div class="flex flex-col gap-20">
        <div class="border-primary border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-8">
          <div class="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
            <a href={madeWith?.href} class="flex items-center gap-2" target="_blank">
              <span>{madeWith?.label}</span>
              <Image
                src={madeWith?.src || ""}
                width={100}
                height={28}
                alt={madeWith?.label}
              />
            </a>
            </div>
        </div>
      </div>
    </div>
  );
}
