/*
  Warnings:

  - Added the required column `board_id` to the `ListActivities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_id` to the `TasksActivities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListActivities" ADD COLUMN     "board_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TasksActivities" ADD COLUMN     "board_id" INTEGER NOT NULL;
