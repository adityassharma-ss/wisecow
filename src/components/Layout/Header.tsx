import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";

import { AnimalMessage } from "@/components/AnimalMessage";
import { GradientBox } from "../GradientBox";

export function Header() {
    return (
        <header className="lg:max-w-5xl mx-auto min-h-[80vh] flex">
            <div className="mx-6 mt-6 w-full flex flex-col items-center justify-center gap-8 lg:mx-0 lg:mt-0 lg:gap-0 lg:flex-row lg:justify-between">
                <div className="sm:w-[36rem] text-l-primary">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Create funny ASCII Art in seconds with WiseCow
                    </h1>
                    <p className="text-base my-6 md:text-lg lg:text-lg lg:my-8">
                        WiseCow is a user-friendly cowsay generator that offers
                        flexibility with multiple animals and customizable
                        messages. It's perfect for sharing with friends,
                        downloading, or just having a good laugh.
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <GradientBox>
                            <Link
                                href="/application"
                                className="flex items-center gap-2 py-3 px-8 rounded-md text-lg font-medium text-l-primary border border-transparent bg-ghost bg-clip-padding transition-all"
                            >
                                <ArrowCircleUpRight size={24} weight="fill" />
                                Get started
                            </Link>
                        </GradientBox>
                    </div>
                </div>
                <GradientBox>
                    <AnimalMessage
                        staticMessage="hello world, i am Wisecow    ~(=^‥^)ノ"
                        staticAnimal="cow"
                        customStyles="px-4 pt-6 pb-8 max-w-xs text-start pointer-events-none rounded-lg border border-transparent bg-ghost bg-clip-padding transition-all bg-d-primary"
                    />
                </GradientBox>
            </div>
        </header>
    );
}
