-- CreateTable
CREATE TABLE "Tea_Quntity" (
    "id" TEXT NOT NULL,
    "quntity" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "providedAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tea_Quntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Tea_Quntity_userId_idx" ON "Tea_Quntity"("userId");

-- AddForeignKey
ALTER TABLE "Tea_Quntity" ADD CONSTRAINT "Tea_Quntity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerckUserId") ON DELETE CASCADE ON UPDATE CASCADE;
