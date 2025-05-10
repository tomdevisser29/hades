/*
  Warnings:

  - The primary key for the `Error` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Error` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Error" DROP CONSTRAINT "Error_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Error_pkey" PRIMARY KEY ("id");
