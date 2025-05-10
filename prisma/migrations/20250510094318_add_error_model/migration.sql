-- CreateTable
CREATE TABLE "Error" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "errno" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "line" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "site" TEXT NOT NULL,
    "phpVersion" TEXT NOT NULL,
    "wpVersion" TEXT NOT NULL,
    "wpTheme" JSONB NOT NULL,
    "wpPlugins" JSONB NOT NULL,
    "fingerprint" TEXT NOT NULL,
    "backtrace" JSONB NOT NULL,

    CONSTRAINT "Error_pkey" PRIMARY KEY ("id")
);
