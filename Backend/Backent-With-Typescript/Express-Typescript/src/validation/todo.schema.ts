import z from "zod";

export const todoValidationSchema = z.object({
  id: z.string().describe("ID for the todo"),
  title: z.string().describe("title of the todo"),
  description: z.string().optional().describe("description of the todo"),
  isCompleted: z
    .boolean()
    .default(false)
    .describe("is the task complete or not"),
});

export type Todo = z.infer<typeof todoValidationSchema>;
