import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { message, startupCategory } = req.body;

  // Predefined questions based on category
  const predefinedQuestions: Record<string, string[]> = {
    "E-commerce": ["How to scale my store?", "Best marketing strategies?", "How to optimize conversions?"],
    "SaaS": ["How to get initial users?", "Best pricing models?", "Tech stack recommendations?"],
    "Fintech": ["How to ensure security?", "What are the best payment processors?", "How to handle regulations?"],
    "HealthTech": ["How to comply with regulations?", "Best ways to get funding?", "How to ensure data security?"],
  };

  let aiMessage = predefinedQuestions[startupCategory]?.join(", ") || "Ask me anything!";

  res.status(200).json({ response: aiMessage });
}
