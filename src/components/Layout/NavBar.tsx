import Link from "next/link";

export function NavBarComponent() {
    return (
        <div className="md:container mx-auto">
            <nav className="flex items-center justify-between gap-3 w-full px-4 sm:px-16 h-20 font-mono">
                <Link href="/" className="font-extrabold">
                    Wisecow
                </Link>

                <span className="text-sm text-end">
                    Built by{" "}
                    <a
                        href="https://github.com/adityassharma-ss"
                        target="_blank"
                        className="underline"
                    >
                        Aditya Sharma
                    </a>
                </span>
            </nav>
        </div>
    );
}
