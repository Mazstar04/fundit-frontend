
import Markdown from 'markdown-to-jsx';

const MarkdownComponent = ({ text }: {text:string} ) => {
    return (
        <Markdown
            options={{
                overrides: {
                    li: {
                        props: {
                            className: "text-[18px] tracking-[0.03em] mb-[16px] ",
                        },
                    },
                    p: {
                        props: {
                            className: "text-[18px] leading-[1.8] tracking-[0.03em]",
                        },
                    },
                    h1: {
                        props: {
                            className: "text-[2em] font-[500] tracking-[.0125em]",
                        },
                    },
                    h2: {
                        props: {
                            className: "text-[25px] tracking-[.0125em] font-[500]",
                        },
                    },
                    h3: {
                        props: {
                            className: "text-[22px] font-[500] tracking-[.0125em]",
                        },
                    },
                    h4: {
                        props: {
                            className: "text-[1em] font-[500]",
                        },
                    },
                    h5: {
                        props: {
                            className: "text-[0.8em] font-[500]",
                        },
                    },
                    h6: {
                        props: {
                            className: "text-[0.7em] font-[500]",
                        },
                    },
                    button:{
                        props: {
                            className: "my-[30px]",
                        },
                    },
                    table: {
                        props: {
                            className: "border-collapse border-spacing-0 mb-[20px] ",
                        },
                    },
                    tr: {
                        props: {
                            className: "border-[1px] border-[darkgray] ",
                        },
                    },
                    td: {
                        props: {
                            className: ` border-[1px] border-[#00000040] p-2 md:p-[16px]`,
                        },
                    },
                    th: {
                        props: {
                            className: `border-r-[1px] border-l-[1px] bg-[#80808024] border-[#00000040] `,
                        },
                    },
                    ol: {
                        props: {
                            className: "list-decimal ml-6",
                        },
                    },
                    ul: {
                        props: {
                            className: "list-disc ml-6",
                        },
                    },
                    pre: {
                        props: {
                            className: "text-[0.875rem] rounded-[4px] bg-[#80808024] p-[8px] my-8",
                        },
                    },
                    blockquote: {
                        props: {
                            className: "text-[0.875rem] border-l-[4px] border-l-[darkgray] italic py-[8px] px-[20px] my-8",
                        },
                    },
                    a: {
                        props: {
                            className: "underline text-[#40A9FF]",
                        },
                    },
                },
            }}
        >{text}</Markdown>
    );
}

export default MarkdownComponent;