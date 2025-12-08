import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: {
      type: SchemaType.OBJECT,
      properties: {
        name: { type: SchemaType.STRING },
        title: { type: SchemaType.STRING, nullable: true },
        location: { type: SchemaType.STRING, nullable: true },
        summary: { type: SchemaType.STRING, nullable: true },
        skills: {
          type: SchemaType.ARRAY,
          items: { type: SchemaType.STRING },
        },
        education: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            properties: {
              degree: { type: SchemaType.STRING },
              institution: { type: SchemaType.STRING },
              year: { type: SchemaType.STRING, nullable: true },
            },
            required: ["degree", "institution"],
          },
        },
        experience: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            properties: {
              company: { type: SchemaType.STRING },
              role: { type: SchemaType.STRING },
              startDate: { type: SchemaType.STRING, nullable: true },
              endDate: { type: SchemaType.STRING, nullable: true },
              description: { type: SchemaType.STRING, nullable: true },
            },
            required: ["company", "role"],
          },
        },
        projects: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            properties: {
              name: { type: SchemaType.STRING },
              description: { type: SchemaType.STRING, nullable: true },
              link: { type: SchemaType.STRING, nullable: true },
            },
            required: ["name"],
          },
        },
      },
      required: ["name", "skills", "education", "experience", "projects"],
    },
  },
});

export async function parseResumeText(text: string) {
  const result = await model.generateContent(
    "Extract the following details from the resume text and format them as JSON according to given schema: " +
      "\n\nResume Text:\n" +
      text
  );

  const data = JSON.parse(result.response.text());
  return data;
}
