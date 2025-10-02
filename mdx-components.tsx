import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type ImageProps = NextImageProps & {
  caption?: string;
  className?: string;
};

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Image: ({ caption, alt, ...props }: ImageProps) => (
      <figure style={{ textAlign: "center" }}>
        <NextImage alt={alt} {...props} />
        {caption && (
          <figcaption
            style={{ fontSize: "0.875rem", color: "#666", marginTop: "0.5rem" }}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    ),
  };
}
