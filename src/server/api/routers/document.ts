import { z } from "zod";
import { TRPCError } from "@trpc/server";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { eq, and, isNull } from "drizzle-orm";
import { documents } from "~/server/db/schema";

export const documentRouter = createTRPCRouter({
  getAllById: protectedProcedure.query(async ({ ctx }) => {
    const documentList = await ctx.db
      .select()
      .from(documents)
      .where(
        and(
          eq(documents.ownerId, ctx.session.user.id),
          isNull(documents.deletedAt),
        ),
      );
    return documentList;
  }),
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const document = await ctx.db.query.documents.findFirst({
        where: (docs, { eq, and, isNull }) =>
          and(
            eq(docs.id, input.id),
            eq(docs.ownerId, ctx.session.user.id),
            isNull(docs.deletedAt),
          ),
      });

      if (!document) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Document not found or you don't have access to it",
        });
      }

      await ctx.db
        .update(documents)
        .set({ lastAccessedAt: new Date() })
        .where(eq(documents.id, input.id));

      return document;
    }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [newDoc] = await ctx.db
        .insert(documents)
        .values({
          title: input.title,
          description: input.description,
          ownerId: ctx.session.user.id,
        })
        .returning();
      return newDoc;
    }),
});
