const formats = [
  {
    category: "regular-category",
    options: [
      { text: "paragraph", val: "para" },
      { text: "email", val: "email" },
      { text: "blog-post", val: "blog" },
      { text: "ideas", val: "ideas" },
      { text: "table", val: "table" },
    ],
  },
  {
    category: "essay",
    options: [
      { text: "essay-outline", val: "es_outline" },
      { text: "introduction", val: "es_intro" },
      { text: "conclusion", val: "es_conclusion" },
      { text: "essay-basic", val: "es_basic" },
      { text: "essay-complex", val: "es_complex" },
    ],
  },
  {
    category: "philosophy",
    options: [
      { text: "essay-outline", val: "ph_outline" },
      { text: "introduction", val: "ph_intro" },
      { text: "problematization", val: "ph_prob" },
      { text: "conclusion", val: "ph_conclusion" },
      { text: "essay-basic", val: "ph_basic" },
      { text: "essay-complex", val: "ph_complex" },
    ],
  },
];
export default formats;

export function typesToString(type: string): string {
  for (let i = 0; i < formats.length; i++) {
    for (let j = 0; j < formats[i].options.length; j++) {
      if (formats[i].options[j].val === type) {
        return formats[i].options[j].text;
      }
    }
  }
  return "";
}

export const tones = [
  "tones-none",
  "tones-professional",
  "tones-casual",
  "tones-enthusiastic",
  "tones-informative",
  "tones-funny",
];
