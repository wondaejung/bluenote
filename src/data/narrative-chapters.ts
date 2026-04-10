export type NarrativeActId = 1 | 2 | 3

export type NarrativeChapter = {
  id: string
  act: NarrativeActId
  themeKo: string
  lyrics: string[]
  /** `public` 기준 — 예: `/audio/samples/gwansim.mp3` */
  sampleSrc: string
}

export const narrativeChapters: NarrativeChapter[] = [
  {
    id: "gwansim",
    act: 1,
    themeKo: "관심",
    lyrics: [
      "빛은 닿지 않는 쪽의 이름을 불렀다",
      "관심은 시선이 아니라 무게였다",
      "보이지 않는 곳에 발을 옮긴다",
    ],
    sampleSrc: "/audio/samples/01-gwansim.mp3",
  },
  {
    id: "sarang",
    act: 1,
    themeKo: "사랑",
    lyrics: [
      "말이 없어도 남는 온도가 있었다",
      "사랑은 때로 날카로운 조용함이었다",
      "끝까지 닿지 못한 손을 기억한다",
    ],
    sampleSrc: "/audio/samples/02-sarang.mp3",
  },
  {
    id: "trauma",
    act: 1,
    themeKo: "트라우마",
    lyrics: [
      "밤마다 같은 문을 두드리는 소리",
      "상처는 이름을 잃고 남는다",
      "돌아보지 않아도 따라오는 그림자",
    ],
    sampleSrc: "/audio/samples/03-trauma.mp3",
  },
  {
    id: "jikmyeon",
    act: 2,
    themeKo: "직면",
    lyrics: [
      "눈을 피하지 않기로 했다",
      "거울이 거짓말을 멈추던 날",
      "말하지 않은 진실을 읽을 수 있었다",
    ],
    sampleSrc: "/audio/samples/04-jikmyeon.mp3",
  },
  {
    id: "hoebok",
    act: 2,
    themeKo: "회복",
    lyrics: [
      "숨이 길어지는 쪽으로 걸었다",
      "회복은 완벽이 아니라 방향이었다",
      "또 무너져도 다시 세울 수 있다는 말",
    ],
    sampleSrc: "/audio/samples/05-hoebok.mp3",
  },
  {
    id: "jip",
    act: 3,
    themeKo: "집",
    lyrics: [
      "집은 주소가 아니라 온도였다",
      "돌아올 수 있는 나를 먼저 세웠다",
      "문 밖이 아니라 안쪽으로 들어가는 길",
    ],
    sampleSrc: "/audio/samples/06-jip.mp3",
  },
  {
    id: "hantan",
    act: 3,
    themeKo: "한탄",
    lyrics: [
      "한탄은 끝이 아니라 정리였다",
      "울어도 괜찮다는 말을 스스로에게",
      "비어 있던 자리에 이름을 붙인다",
    ],
    sampleSrc: "/audio/samples/07-hantan.mp3",
  },
]

export const getChaptersByAct = (act: NarrativeActId) =>
  narrativeChapters.filter((c) => c.act === act)
