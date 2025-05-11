/*
  Warnings:

  - The primary key for the `Site` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Site` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `siteId` on the `Error` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Error" DROP CONSTRAINT "Error_siteId_fkey";

-- AlterTable
ALTER TABLE "Error" DROP COLUMN "siteId",
ADD COLUMN     "siteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Site" DROP CONSTRAINT "Site_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Site_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Error" ADD CONSTRAINT "Error_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
