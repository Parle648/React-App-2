/*
  Warnings:

  - Added the required column `board_id` to the `Lists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lists" ADD COLUMN     "board_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Boards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Boards_pkey" PRIMARY KEY ("id")
);
