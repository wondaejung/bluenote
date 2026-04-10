/** 외부 참조 URL이 있으면 사용하고, 없으면 사이트 내부 `/bluenotecreative-ref` */
export const getPhilosophyHref = (): string => {
  const raw = process.env.NEXT_PUBLIC_BLUENOTE_CREATIVE_REF_URL
  if (raw && /^https?:\/\//i.test(raw.trim())) {
    return raw.trim()
  }
  return "/bluenotecreative-ref"
}

export const isExternalHref = (href: string): boolean =>
  /^https?:\/\//i.test(href)
