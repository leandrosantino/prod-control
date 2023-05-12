/*
  Warnings:

  - Added the required column `classification` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technicalDescription` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ute` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "technicalDescription" TEXT NOT NULL,
    "ute" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "partNumber" TEXT NOT NULL,
    "sapCode" TEXT NOT NULL,
    "projectNumber" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_Product" ("amount", "description", "id", "partNumber", "projectNumber", "sapCode") SELECT "amount", "description", "id", "partNumber", "projectNumber", "sapCode" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_partNumber_key" ON "Product"("partNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
