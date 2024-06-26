import { useContext } from "react";

import { AnimalContext } from "../contexts/AnimalContext";
import { MessageContext } from "../contexts/MessageContext";
import { cow } from "./AnimalsASCII";
import { GradientBox } from "./GradientBox";

interface AnimalMessageProps {
    staticMessage?: string;
    staticAnimal?: string;
    customStyles?: string;
}

export function AnimalMessage({
    staticMessage,
    staticAnimal,
    customStyles,
}: AnimalMessageProps) {
    const { message } = useContext(MessageContext);
    const { animal } = useContext(AnimalContext);

    const emptyMessage = (!message || message === "<p></p>") && !staticMessage;
    const isGradient = customStyles?.includes("bg-clip-padding");

    function maxRepeatMessageWall() {
        if (staticMessage) {
            return staticMessage.length <= 28 ? staticMessage.length + 1 : 29;
        }
        return message.length <= 28 ? message.length + 1 : 29;
    }

    function animalInScreen(staticAnimal: string | undefined) {
        const animalToShow = staticAnimal ?? animal;

        switch (animalToShow) {
            case "cow":
                return cow;
        }
    }

    const AnimalMessageContent = () => {
        return (
            <div
                id="animalPicture"
                className={`${
                    customStyles
                        ? customStyles
                        : "px-4 pt-6 pb-8 max-w-xs text-start rounded-md"
                }`}
            >
                <div className="font-mono break-words whitespace-pre-wrap leading-6 w-[17.75rem]">
                    <div>{"_".repeat(maxRepeatMessageWall())}</div>
                    <span
                        className="block max-h-[36rem] overflow-y-auto pb-1"
                        dangerouslySetInnerHTML={{
                            __html: staticMessage ?? message,
                        }}
                    ></span>
                    <div>{"-".repeat(maxRepeatMessageWall())}</div>
                    {animalInScreen(staticAnimal)}
                </div>
            </div>
        );
    };

    return (
        <>
            {!emptyMessage && isGradient && (
                <GradientBox>
                    <AnimalMessageContent />
                </GradientBox>
            )}

            {!emptyMessage && !isGradient && <AnimalMessageContent />}

            {emptyMessage && (
                <div className="font-mono flex align-center justify-center w-[19.85rem] h-64 border border-dashed rounded-md">
                    <span className="my-auto">
                        {staticAnimal ?? animal} will appear here
                    </span>
                </div>
            )}
        </>
    );
}
