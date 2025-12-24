"use client";
import DOMPurify from "dompurify";
import React from "react";

interface Props {
  data: string;
  className?: string;
  tag?: string;
}

const SafeTag = ({ data, className = "", tag = "div" }: Props) => {
  const safeTag = (htmlString: string) => {
    if (htmlString === "") {
      return DOMPurify.sanitize("توضیحاتی برای این محصول درج نشده است !");
    }
    return DOMPurify.sanitize(htmlString);
  };

  return React.createElement(tag, {
    className,
    dangerouslySetInnerHTML: { __html: safeTag(data) },
  });
};

export default SafeTag;
