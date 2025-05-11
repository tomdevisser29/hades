-- CreateTable
CREATE TABLE "_SitesToUsers" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SitesToUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_SitesToUsers_B_index" ON "_SitesToUsers"("B");

-- AddForeignKey
ALTER TABLE "_SitesToUsers" ADD CONSTRAINT "_SitesToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Site"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SitesToUsers" ADD CONSTRAINT "_SitesToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
