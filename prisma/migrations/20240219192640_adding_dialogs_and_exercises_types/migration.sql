/*
  Warnings:

  - You are about to drop the column `lessonId` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `dialogId` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_lessonId_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "lessonId",
ADD COLUMN     "codeToComplete" TEXT,
ADD COLUMN     "dialogId" INTEGER NOT NULL,
ADD COLUMN     "expectedOutput" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "correctOption" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Dialog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "Dialog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dialog" ADD CONSTRAINT "Dialog_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_dialogId_fkey" FOREIGN KEY ("dialogId") REFERENCES "Dialog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
