/*
  Warnings:

  - A unique constraint covering the columns `[fingerprint,timestamp,site]` on the table `Error` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Error_fingerprint_timestamp_site_key" ON "Error"("fingerprint", "timestamp", "site");
