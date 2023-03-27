-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "plantId" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
