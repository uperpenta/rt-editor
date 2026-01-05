import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { eq } from "drizzle-orm";
import { documents } from "~/server/db/schema";

export const documentRouter = createTRPCRouter({
  getAllById: protectedProcedure.query(async ({ ctx }) => {
    const documentList = await ctx.db
      .select()
      .from(documents)
      .where(eq(documents.ownerId, ctx.session.user.id));
    return documentList;
  }),
  create: protectedProcedure
      .input(z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const [newDoc] = await ctx.db.insert(documents).values({
          title: input.title,
          description: input.description,
          ownerId: ctx.session.user.id,
        }).returning();
        return newDoc;
      }),
});
