-- CreateTable
CREATE TABLE "Lists" (
    "id" SERIAL NOT NULL,
    "list_name" TEXT NOT NULL,

    CONSTRAINT "Lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "priority" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListActivities" (
    "id" SERIAL NOT NULL,
    "activity_type" TEXT NOT NULL,
    "list_name" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "list_id" INTEGER,

    CONSTRAINT "ListActivities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TasksActivities" (
    "id" SERIAL NOT NULL,
    "activity_type" TEXT NOT NULL,
    "task_name" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "task_id" INTEGER,

    CONSTRAINT "TasksActivities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListActivities_id_key" ON "ListActivities"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TasksActivities_id_key" ON "TasksActivities"("id");

-- AddForeignKey
ALTER TABLE "ListActivities" ADD CONSTRAINT "ListActivities_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "Lists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TasksActivities" ADD CONSTRAINT "TasksActivities_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
