import NextLink from "next/link"

export default function ProjectOverview() {
    return (
        <div className="items-left mb-4 flex flex-col justify-end px-4 font-mono sm:items-center">
            <h1 className="mb-4 text-2xl font-semibold">
                /Serie/\ /Path/NOTICE.txt
            </h1>
            <div className="text-muted-foreground text-justify text-sm sm:text-center">
                <p>
                    This project was developed & maintained by{" "}
                    <Link href="https://instagram.com/lichtlabs">
                        LichtLabs
                    </Link>{" "}
                    and intended to be an open-source project to help students
                    learn.
                </p>{" "}
                <p className="mt-3">
                    We welcome contributions from developers and students of all
                    skill levels. Whether you&apos;re fixing bugs, adding new
                    features, improving documentation, or suggesting
                    enhancements, your input helps make this project better for
                    everyone.
                </p>
                <p className="mt-3">
                    If you have any questions or feedback, please feel free to
                    reach out to us on{" "}
                    <Link href="https://github.com/lichtlabs/serie-path">
                        github.com/lichtlabs
                    </Link>
                    .
                </p>
                <p className="text-primary mt-6">
                    &quot;Just tell her what you want to master. She&apos;ll
                    plan your personalized learning path&quot;{" "}
                    <span className="text-muted-foreground">
                        - Core maintainer
                    </span>
                </p>
            </div>
        </div>
    )
}

function Link({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <NextLink
            target="_blank"
            className="text-primary hover:text-primary/50 underline transition-colors duration-75"
            href={href}
        >
            {children}
        </NextLink>
    )
}
