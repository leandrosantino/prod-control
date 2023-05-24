/*
  Warnings:

  - Made the column `amount` on table `ProductionRecord` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductionRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    CONSTRAINT "ProductionRecord_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductionRecord" ("amount", "createdAt", "id", "productId") SELECT "amount", "createdAt", "id", "productId" FROM "ProductionRecord";
DROP TABLE "ProductionRecord";
ALTER TABLE "new_ProductionRecord" RENAME TO "ProductionRecord";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
