import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighterRenderer } from "react-syntax-highlighter";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { MarkdownContainerProps } from "types/MarkdownType";

export default function MarkdownContainer({
  conteudo,
}: MarkdownContainerProps) {
  const renderers = {
    ...ChakraUIRenderer(),
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighterRenderer language={match[1]} {...props}>
          {String(node.data.meta).replace(/\n$/, "")}
        </SyntaxHighlighterRenderer>
      ) : (
        <code className={className} {...props}>
          {node.data.meta}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown components={renderers} skipHtml>
      {conteudo}
    </ReactMarkdown>
  );
}
