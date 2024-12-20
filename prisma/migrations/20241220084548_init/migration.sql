/*
  Warnings:

  - Made the column `createdAt` on table `Todo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Todo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET NOT NULL;
