/*
  Warnings:

  - You are about to drop the column `site` on the `Error` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fingerprint,timestamp]` on the table `Error` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `siteId` to the `Error` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Error_fingerprint_timestamp_site_key";

-- AlterTable
ALTER TABLE "Error" DROP COLUMN "site",
ADD COLUMN     "siteId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Site" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Site_url_key" ON "Site"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Error_fingerprint_timestamp_key" ON "Error"("fingerprint", "timestamp");

-- AddForeignKey
ALTER TABLE "Error" ADD CONSTRAINT "Error_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
