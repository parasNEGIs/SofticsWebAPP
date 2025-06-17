"use client";

import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function Mdx({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
