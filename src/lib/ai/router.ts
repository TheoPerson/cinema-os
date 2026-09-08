import type { AIInterpretInput, AIIntent, AIProvider } from "./contracts";

type RouteResult =
  | { mode: "deterministic"; intent: AIIntent }
  | { mode: "ai"; intent: AIIntent };

function directIntent(input: AIInterpretInput): AIIntent | null {
  const message = input.message.trim();

  // Conservative starter: exact/simple strings go to deterministic search.
  // Expand this parser gradually. Never pretend confidence on ambiguous commands.
  if (
    message.length > 0 &&
    !/\b(add|remove|watchlist|favorite|watched|recommend|haven't|have not|my|under|above)\b/i.test(
      message
    )
  ) {
    return {
      kind: "search",
      query: message
    };
  }

  return null;
}

export async function routeAIRequest(
  input: AIInterpretInput,
  provider: AIProvider
): Promise<RouteResult> {
  const deterministic = directIntent(input);

  if (deterministic) {
    return { mode: "deterministic", intent: deterministic };
  }

  return {
    mode: "ai",
    intent: await provider.interpret(input)
  };
}
