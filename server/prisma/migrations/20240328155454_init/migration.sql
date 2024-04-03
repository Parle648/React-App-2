/*
  Warnings:

  - Added the required column `task_property` to the `TasksActivities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TasksActivities" ADD COLUMN     "task_property" TEXT NOT NULL;
