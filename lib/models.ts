export function getModelString(id: string) {
  switch (id) {
    case "gpt-3.5-turbo":
      return "GPT-3.5 Turbo";
    case "gpt-4":
      return "GPT-4";
    case "gpt-4-0613":
      return "GPT-4 (June 2023)";
    case "gpt-4-0314":
      return "GPT-4 (March 2023)";
    case "gpt-4-32k":
      return "GPT-4 (32k)";
    case "gpt-3.5-turbo-16k":
      return "GPT-3.5 Turbo (16k)";
    case "gpt-3.5-turbo-0613":
      return "GPT-3.5 Turbo (June 2023)";
    case "gpt-3.5-turbo-16k-0613":
      return "GPT-3.5 Turbo (16k - June 2023)";
    case "gpt-3.5-turbo-0301":
      return "GPT-3.5 Turbo (March 2023)";
    case "gpt-3.5-turbo-instruct":
      return "GPT-3.5 Turbo Instruct";
    case "gpt-3.5-turbo-instruct-0914":
      return "GPT-3.5 Turbo Instruct (September 2023)";
    default:
      return id;
  }
}