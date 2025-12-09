import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: {
      type: SchemaType.OBJECT,
      properties: {
        settings: {
          type: SchemaType.OBJECT,
          properties: {
            name: { type: SchemaType.STRING },
            title: { type: SchemaType.STRING },
            location: { type: SchemaType.STRING },
            summary: { type: SchemaType.STRING },
            profileImage: { type: SchemaType.STRING },
          },
          required: ["name"],
        },
        sections: {
          type: SchemaType.OBJECT,
          properties: {
            hero: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                ctaButtons: {
                  type: SchemaType.ARRAY,
                  items: {
                    type: SchemaType.OBJECT,
                    properties: {
                      text: { type: SchemaType.STRING },
                      url: { type: SchemaType.STRING },
                    },
                    required: ["text", "url"],
                  },
                },
              },
              required: ["enabled", "ctaButtons"],
            },
            about: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                skills: {
                  type: SchemaType.OBJECT,
                  properties: {
                    enabled: { type: SchemaType.BOOLEAN },
                    title: { type: SchemaType.STRING },
                    items: {
                      type: SchemaType.ARRAY,
                      items: { type: SchemaType.STRING },
                    },
                  },
                  required: ["enabled", "title", "items"],
                },
              },
              required: ["enabled", "skills"],
            },
            experience: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                title: { type: SchemaType.STRING },
                items: {
                  type: SchemaType.ARRAY,
                  items: {
                    type: SchemaType.OBJECT,
                    properties: {
                      company: { type: SchemaType.STRING },
                      role: { type: SchemaType.STRING },
                      period: { type: SchemaType.STRING },
                      description: { type: SchemaType.STRING },
                    },
                    required: ["company", "role", "period", "description"],
                  },
                },
              },
              required: ["enabled", "title", "items"],
            },
            projects: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                title: { type: SchemaType.STRING },
                items: {
                  type: SchemaType.ARRAY,
                  items: {
                    type: SchemaType.OBJECT,
                    properties: {
                      title: { type: SchemaType.STRING },
                      description: { type: SchemaType.STRING },
                      tags: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                      },
                      previewUrl: { type: SchemaType.STRING },
                      repoUrl: { type: SchemaType.STRING },
                    },
                    required: [
                      "title",
                      "description",
                      "tags",
                      "previewUrl",
                      "repoUrl",
                    ],
                  },
                },
              },
              required: ["enabled", "title", "items"],
            },
            education: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                title: { type: SchemaType.STRING },
                items: {
                  type: SchemaType.ARRAY,
                  items: {
                    type: SchemaType.OBJECT,
                    properties: {
                      institution: { type: SchemaType.STRING },
                      degree: { type: SchemaType.STRING },
                      period: { type: SchemaType.STRING },
                    },
                    required: ["institution", "degree", "period"],
                  },
                },
              },
              required: ["enabled", "title", "items"],
            },
            achievements: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                title: { type: SchemaType.STRING },
                items: {
                  type: SchemaType.ARRAY,
                  items: {
                    type: SchemaType.OBJECT,
                    properties: {
                      title: { type: SchemaType.STRING },
                      description: { type: SchemaType.STRING },
                    },
                    required: ["title", "description"],
                  },
                },
              },
              required: ["enabled", "title", "items"],
            },
            contact: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                title: { type: SchemaType.STRING },
                email: { type: SchemaType.STRING },
                phone: { type: SchemaType.STRING },
                location: { type: SchemaType.STRING },
              },
              required: ["enabled", "title", "email", "location"],
            },
            social: {
              type: SchemaType.OBJECT,
              properties: {
                enabled: { type: SchemaType.BOOLEAN },
                items: {
                  type: SchemaType.ARRAY,
                  items: {
                    type: SchemaType.OBJECT,
                    properties: {
                      platform: { type: SchemaType.STRING },
                      url: { type: SchemaType.STRING },
                      icon: { type: SchemaType.STRING },
                    },
                    required: ["platform", "url", "icon"],
                  },
                },
              },
              required: ["enabled", "items"],
            },
          },
          required: [
            "hero",
            "about",
            "experience",
            "projects",
            "education",
            "achievements",
            "contact",
            "social",
          ],
        },
        navigation: {
          type: SchemaType.OBJECT,
          properties: {
            enabled: { type: SchemaType.BOOLEAN },
            items: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  name: { type: SchemaType.STRING },
                  url: { type: SchemaType.STRING },
                },
                required: ["name", "url"],
              },
            },
          },
          required: ["enabled", "items"],
        },
        footer: {
          type: SchemaType.OBJECT,
          properties: {
            enabled: { type: SchemaType.BOOLEAN },
            copyright: { type: SchemaType.STRING },
          },
          required: ["enabled", "copyright"],
        },
      },
      required: ["settings", "sections", "navigation", "footer"],
    },
  },
});

export async function parseResumeText(text: string) {
  const result = await model.generateContent(
    "Extract the following details from the resume text and format them as JSON according to given schema. " +
      "For fields that are not present in the resume, use sensible defaults or empty strings/arrays. " +
      "Ensure 'enabled' is true for sections that have data. " +
      "IMPORTANT: Ensure all 'description' fields (in experience, projects, achievements, etc.) are concise and strictly limited to a maximum of 25-30 words. Summarize longer content to fit this limit. " +
      "\n\nResume Text:\n" +
      text
  );

  const data = JSON.parse(result.response.text());
  return data;
}
